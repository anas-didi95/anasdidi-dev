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

## Steps

Following are the list of tools need for the project:
- Docker
- Maven (or Gradle)

### 1. Create a new Vert.x application

Create a new Vert.x applicaton using [Vert.x App Generator](https://start.vertx.io/).

Make note the **Group Id** and **Artifact Id** when create the application.
In this example, following are the values used for both:
- **Group Id**: com.anasdidi
- **Artifact Id**: nativeimage

![01-generate-project](./01-generate-project.png)
*Figure 01: Vert.x Starter - Create a new Vert.x application*

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

---

## References

* [Native Image](https://www.graalvm.org/latest/reference-manual/native-image/)
* [Building a Vert.x Native Image](https://how-to.vertx.io/graal-native-image-howto/)
