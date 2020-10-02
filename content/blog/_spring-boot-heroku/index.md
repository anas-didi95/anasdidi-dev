---
title: "Deploying Spring Boot application with Heroku"
description: "Guide on how to deploy Spring Boot application with Heroku"
author: "Anas Juwaidi"
date: "2100-01-01"
tags: ["spring-boot", "heroku"]
---

**Spring Boot** packaging model enables us to package the application into a standalone application. Combine with **Heroku** to deploy the application, it will make deployment more easier compared to traditional Java application deployment.

Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps. Heroku makes the processes of deploying, configuring, scaling, tuning, and managing apps as simple and straightforward as possible, so that developers can focus on what’s most important: building great apps that delight and engage customers.

Therefore, using Heroku not only make it easier for deployment, it also provides tool for us to maintain and monitor the application.

Following is the guide on how to deploy Spring Boot application with Heroku using Github as deployment method.

---

## Table of contents
* [Generate project](#generate-project)
* [Create Web Controller](#create-web-controller)
* [References](#references)

---

<a name="generate-project"></a>
## Generate project

First, we need to generate Spring Boot project. And the easier way to do this is by using **[Spring Initializr](https://start.spring.io/)** website. Spring Initializr is a web-based tool provided by Pivotal Web Service to help generating Spring Boot project within clicks.

![01-generate-project](./01-generate-project.png)
*Figure 01: Spring Initializr website interface*

In the website, we can setup the project components such as package management, language, metadata and dependency. Thus, the website offers a fast way to pull in all the dependencies we need for an application and does a lot of the setup for us.

This example will add **Spring Web** for the dependency.

---

<a name="create-web-controller"></a>
## Create Web Controller


---

<a name="references"></a>
## References

* [What is Heroku; heroku.com](https://www.heroku.com/what)
* [Spring Initializr; spring.io](https://start.spring.io/)

