---
title: "SOLID Design Principles - Dependency Inversion Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2099-01-01"
tags: ["solid", "design-principle", "oop"]
---

**SOLID** is a set of five design principles used in object-oriented programming to make software easier to understand, flexible and maintain.

Robert C. Martin introduced the theory of SOLID in year 2000 on his paper *Design Principles and Design Patterns*. Later, Micheal Feathers introduced the SOLID acronym.

SOLID stands for
- **S**ingle-responsibility Principle
- **O**pen-closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

Following writing will discussed on one of the principles which is **Dependency Inversion Principle (DIP)**.

---

## Table of contents
* [Concept](#concept)
* [References](#references)

---

<a name="concept"></a>
## Concept

> Depend upon abstractions, [not] concretions <br/>
> -*Robert C. Martin*

The general idea of **DIP** is that when designing between high-level modules and low-level modules, the interaction between them should be design as abstract. Meaning for high-level modules which provide complex logic, low-level modules which provide utility functions can easily be reuse and modify.

Thus, from the idea, **DIP** stated:
1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

Therefore, it dictates that both high-level modules and low-level modules must depend on same abstractions. It splits the dependency between high-level modules and low-level modules by introducint an abstraction between them.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Dependency Inversion Principle; tutorialsteacher.com](https://www.tutorialsteacher.com/ioc/dependency-inversion-principle)
* [SOLID Design Principles Explained: Dependency Inversion Principle with Code Examples; stackify.com](https://stackify.com/dependency-inversion-principle/)
