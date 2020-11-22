---
title: "SOLID Design Principles - Liskov Substitution Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2099-12-31"
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

Following writing will discussed on one of the principles which is **Liskov Substitution Principle (LSP)**.

---

## Table of contents
* [Concept](#concept)
* [References](#references)

---

<a name="concept"></a>
## Concept

> Let Φ(x) be a property provable about objects x of type T. Then Φ(y)should be true for objects y of type S where S is a subtype of T.<br/>
> -*Barbara Liskov and Jeannette Wing*

The general idea of **LSP** is **substitutability**, where a superclass can be replaced with its subclass without altering any properties of the application. Thus, objects of the subclasses required to behave in similar to the objects of the superclass.

In **object-oriented programming (OOP)** such as Java has a concept called **Inheritance**. Inheritance is a concept where a class are based on another class. Where a class is "inherited" from another class, the inherited class become the subclass of the superclass, thus has all the characteristics of the superclass, but can also contain new properties.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
