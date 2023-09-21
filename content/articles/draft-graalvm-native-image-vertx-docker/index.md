---
title: "Build GraalVM Native Image with Vert.x and Docker"
description: "Guide to build GraalVM Native Image with Vert.x and Docker"
author: "Anas Juwaidi"
date: "draft"
tags: ["graalvm", "vert.x", "docker"]
---

GraalVM Native Image is a native executable with optimized translation of Java application which includes only the core required at run time.
The executable has several advantages, such as
- Faster startup times
- (Usually) smaller package and heap size

Vert.x is a tool-kit for building reactive Java application rather than full-features framework.
Thus, Vert.x is suitable candidate to build native image as native image compilation has several restrictions which most not apply to Vert.x core code.

Below are the steps on how to build GraalVM Native Image with Vert.x and Docker.

---

## Table Of Contents

- [Steps](#steps)
  - [1. Create a new Vert.x application](#1-create-a-new-vertx-application)
  - [2. Setup GraalVM config files](#2-setup-graalvm-config-files)
  - [3. Create Dockerfile](#3-create-dockerfile)
  - [4. Build and run Docker image](#4-build-and-run-docker-image)
- [References](#references)

---

<a name="steps"></a>
## Steps

Following are the list of tools need for the project:
- Docker
- Maven (or Gradle)

<a name="1-create-a-new-vertx-application"></a>
### 1. Create a new Vert.x application

Create a new Vert.x applicaton using [Vert.x App Generator](https://start.vertx.io/).

Make note the **Group Id** and **Artifact Id** when create the application.
In this example, following are the values used for both:
- **Group Id**: com.anasdidi
- **Artifact Id**: nativeimage

![01-generate-project](./01-generate-project.png)
*Figure 01: Vert.x Starter - Create a new Vert.x application*
<br/><br/>

Then, create a simple Hello World Vert.x application.
```java
package com.anasdidi.nativeimage;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;

public class MainVerticle extends AbstractVerticle {

  @Override
  public void start(Promise<Void> startPromise) throws Exception {
    vertx.createHttpServer().requestHandler(req -> {
      req.response()
        .putHeader("content-type", "text/plain")
        .end("Hello from Vert.x!");
    }).listen(8888, http -> {
      if (http.succeeded()) {
        startPromise.complete();
        System.out.println("HTTP server started on port 8888");
      } else {
        startPromise.fail(http.cause());
      }
    });
  }
}
```

<a name="2-setup-graalvm-config-files"></a>
### 2. Setup GraalVM config files

Create a new folder in path:

`src/main/resources/META-INF/native-image/<Group Id>/<Artifact Id>`.

In this case, the created folder will be:

**src/main/resources/META-INF/native-image/com.anasdidi/nativeimage**.

Next, create these files in the folder:
- jni-config.json
- native-image.properties
- reflect-config.json
- resource-config.json

```json
[]
```
*META-INF/native-image/com.anasdidi/nativeimage/jni-config.json*
<br/><br/>

```properties
Args =\
--enable-http \
--enable-https \
-H:EnableURLProtocols=http,https \
--report-unsupported-elements-at-runtime \
-H:ReflectionConfigurationResources=${.}/reflect-config.json \
-H:JNIConfigurationResources=${.}/jni-config.json \
-H:ResourceConfigurationResources=${.}/resource-config.json \
--initialize-at-run-time=io.netty.handler.codec.compression.ZstdOptions \
-H:+PrintClassInitialization \
-H:+ReportExceptionStackTraces
```
*META-INF/native-image/com.anasdidi/nativeimage/native-image.properties*
<br/><br/>

```json
[
  {
    "name": "io.vertx.core.impl.launcher.commands.RunCommand",
    "allDeclaredConstructors": true,
    "allDeclaredMethods": true
  },
  {
    "name": "io.vertx.core.impl.launcher.commands.VertxIsolatedDeployer",
    "allDeclaredConstructors": true,
    "allDeclaredMethods": true
  },
  {
    "name": "java.lang.Long",
    "allDeclaredConstructors": true
  },
  {
    "name": "java.lang.Integer",
    "allDeclaredConstructors": true
  },

  {
    "name": "com.anasdidi.nativeimage.MainVerticle",
    "allDeclaredConstructors": true,
    "allDeclaredMethods": true
  }
]
```
*META-INF/native-image/com.anasdidi/nativeimage/reflect-config.json*

Replace `"name": "com.anasdidi.nativeimage.MainVerticle"` with respective Group Id and Artifact Id.
<br/><br/>

```json
{
    "resources": {
      "includes": [
        {"pattern": "META-INF/com.anasdidi.nativeimage.*"}
      ],
      "excludes": [
      ]
    }
  }
```
*META-INF/native-image/com.anasdidi/nativeimage/resource-config.json*

Replace `{"pattern": "META-INF/com.anasdidi.nativeimage.*"}` with respective Group Id and Artifact Id.
<br/><br/>

Below are the structure of the folders and files for the setup.
```bash
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── anasdidi
│   │   │           └── nativeimage
│   │   │               └── MainVerticle.java
│   │   └── resources
│   │       └── META-INF
│   │           └── native-image
│   │               └── com.anasdidi
│   │                   └── nativeimage
│   │                       ├── jni-config.json
│   │                       ├── native-image.properties
│   │                       ├── reflect-config.json
│   │                       └── resource-config.json
```

<a name="3-create-dockerfile"></a>
### 3. Create Dockerfile

Create a multi-stage builds Dockerfile to create the Docker image.
The multi-stage consists of following stages:
1. Compile the source code to Jar file
2. Build the Jar file to GraalVM native image
3. Run the native image

```Dockerfile
FROM maven:3.8.5-openjdk-17-slim as build-jar
WORKDIR /workspace
COPY src/ /workspace/src/
COPY pom.xml /workspace/pom.xml
RUN mvn clean package -DskipTests
```
_Stage 1: Compile the source code to Jar file_
<br/><br/>

```Dockerfile
FROM ghcr.io/graalvm/native-image:ol8-java17-22.3.3 as build-nativeimage
WORKDIR /workspace
COPY --from=build-jar /workspace/target/nativeimage-1.0.0-SNAPSHOT-fat.jar /workspace/nativeimage-1.0.0-SNAPSHOT-fat.jar
RUN native-image --static -jar nativeimage-1.0.0-SNAPSHOT-fat.jar nativeimage
```
_Stage 2: Build the Jar file to GraalVM native image_
<br/><br/>

```Dockerfile
FROM alpine:3.18.3
WORKDIR /workspace
COPY --from=build-nativeimage /workspace/nativeimage /workspace/nativeimage
EXPOSE 8888
ENTRYPOINT ["sh", "-c"]
CMD ["exec ./nativeimage run com.anasdidi.nativeimage.MainVerticle"]
```
_Stage 3: Run the native image_
<br/><br/>

Below is the complete the Dockefile.
```Dockerfile
FROM maven:3.8.5-openjdk-17-slim as build-jar
WORKDIR /workspace
COPY src/ /workspace/src/
COPY pom.xml /workspace/pom.xml
RUN mvn clean package -DskipTests

FROM ghcr.io/graalvm/native-image:ol8-java17-22.3.3 as build-nativeimage
WORKDIR /workspace
COPY --from=build-jar /workspace/target/nativeimage-1.0.0-SNAPSHOT-fat.jar /workspace/nativeimage-1.0.0-SNAPSHOT-fat.jar
RUN native-image --static -jar nativeimage-1.0.0-SNAPSHOT-fat.jar nativeimage

FROM alpine:3.18.3
WORKDIR /workspace
COPY --from=build-nativeimage /workspace/nativeimage /workspace/nativeimage
EXPOSE 8888
ENTRYPOINT ["sh", "-c"]
CMD ["exec ./nativeimage run com.anasdidi.nativeimage.MainVerticle"]
```
_Dockerfile_

<a name="4-build-and-run-docker-image"></a>
### 4. Build and run Docker image

Next, execute the Docker build command to build the image using the Dockerfile.

```bash
docker build -t test -f nativeimage.Dockerfile
```
_Docker build command_
<br/><br/>

After done, execute the Docker run command run the image.
```bash
podman run -p 8888:8888 test
```
_Docker run command_
<br/><br/>

Press `CTRL + C` to stop the Docker image.

In case the Docker image unable to stop using keys, stop the Docker image using Docker stop command.

```bash
$ podman ps -a
CONTAINER ID  IMAGE                                                                                                   COMMAND               CREATED        STATUS                  PORTS                   NAMES
1efbfd8f9841  localhost/test:latest                                                                                   exec ./nativeimag...  4 minutes ago  Up 4 minutes            0.0.0.0:8888->8888/tcp  magical_clarke
```
_Docker ps command to get running container ID. In this case, it is **1efbfd8f9841**._
<br/><br/>

```bash
podman container stop 1efbfd8f9841
```
_Docker container command to stop container using container ID_

---

<a name="references"></a>
## References

* [Native Image](https://www.graalvm.org/latest/reference-manual/native-image/)
* [Building a Vert.x Native Image](https://how-to.vertx.io/graal-native-image-howto/)
