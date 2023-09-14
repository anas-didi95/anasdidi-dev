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

Below is a guide on how to build GraalVM Native Image with Vert.x and Docker.
