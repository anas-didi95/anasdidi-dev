---
title: "How to use Maven Parent POM"
description: "Utilize Maven Parent POM in Java project"
author: "Anas Juwaidi"
date: "draft"
tags: ["java", "maven"]
---

Apache Maven(Maven) is a software project management tool which is based on project object module(POM).
Maven is used to manage project build, reporting and documentation of the project.

One of the features of Maven is Parent POM. Parent POM is used to structure the project to avoid redundancies or duplicates configurations between child POM.
Thus, common dependencies, properties, constants and others can be defined in parent POM, which child POM able to inherit those parameters for their own project.
Upon running Maven, both parent POM and child POM is merged to create effective POM as the final POM which used in the project.

By using parent POM, it allows easier maintenance between projects. For example, multiple projects which used same parent POM will have same dependencies according to the parent POM. Later, the projects able to maintain and update their dependencies whether parent POM change or update the dependencies.

