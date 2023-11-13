---
title: "How to use Maven Parent POM"
description: "Explaination and guide on Maven Parent POM"
author: "Anas Juwaidi"
date: "draft"
tags: ["java", "maven"]
---

Apache Maven(Maven) is a software project management tool which is based on Project Object Module(POM).
Maven is used to manage project build, reporting and documentation of the project.

One of the features of Maven is Parent POM. Parent POM is used to structure the project to avoid redundancies or duplicates configurations between child POM.
Thus, common dependencies, properties, constants and others can be defined in parent POM, which child POM able to inherit those parameters for their own project.
Upon running Maven, both parent POM and child POM is merged to create effective POM as the final POM which used in the project.

By using parent POM, it allows easier maintenance between projects. For example, multiple projects which used same parent POM will have same dependencies according to the parent POM. Later, the projects able to maintain and update their dependencies whether parent POM change or update the dependencies.

---

## Table of Contents

- [What is a Maven Parent POM?](#what-is-a-maven-parent-pom)

---

<a href="what-is-a-maven-parent-pom"></a>

## What is a Maven Parent POM?

Maven Parent POM is a template for child POM which providing a centralized location for managing shared parameters.
These parameters such as common configuration, dependencies and build settings.
Thus, parent POM is used to shared common parameters across multiple Maven projects within organization or related projects.

Parent POM has several purposes such as:
1. **Centralized Configuration**:
    - Parent POM centralizes common configuration such as dependencies, properties and more.
    - It ensures multiple project to maintain consistency by avoid redundancy, having single source of truth for shared configuration.
2. **Dependency Management**:
    - Parent POM can manage dependency versions, which allows child POM to inherit these dependency with same determined version.
    - It simplifies dependency management and the shared dependencies will have same version for all related projects.
3. **Plugin Management**:
    - Parent POM can define plugin properties, which are shared by child projects.
    - It streamlines project processes such as build by having consistent plugin setups, minimizing the need of repetitive configurations in every project POM files.
4. **Standardized Project Structure**:
    - Parent POM can enforces standardized project structure and naming conventions.
    - This promotes consistency among project, allowing developers to have easier navigation and understanding of layout of projects.
5. **Version Inheritance**:
    - Parent POM allows child POM to inherit versions of plugins and dependencies.
    - It simplifies child POM and make updates easier among projects by making changes in Parent POM.
6. **Effective POM Creation**:
    - Upon build, parent POM is combined with child POM to create an effective POM.
    - Effective POM is used to unify the configurations from both parent POM and child POM during build process.
7. **Simplified Maintenance**:
    - Changes for common configurations, such as upgrading dependencies or changing build settings can be made in parent POM.
    - It simplifies maintenance by allowing any updates in parent POM to be propagated to child POM, thus reducing the risk of inconsistencies.

In summary, parent POM is a feature to promote consistency, reduce redundancy and simplify management of shared configuration across multiple projects.
