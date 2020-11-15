---
title: "SOLID Design Principles - Open-closed Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "9999-12-31"
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

Following writing will discussed on one of the principles which is **Open-closed Principle**.

---

## Table of contents
* [Concept](#concept)
* [References](#references)

---

<a name="concept"></a>
## Concept

> "Software entities should be open for extension, but closed for modification."<br/>
>  -*Bertrand Mayer*

The general idea of **Open-closed Principle** is we will be able to implement new features without changes the existing implementation of the project. This principle will avoid any changes required other clasess as dependencies in the project.

Therefore, the definition can be summaries as below:
- **Open for extension** - Any new feature can be added in the project.
- **Closed for modification** - Adding new feature does not result in changes to other classes of the project.

To design for Open-closed Principle, we can adapt either of two (generally used) pattern.
- **Implementation inheritance** - Uses abstract classes and methods.
- **Interface inheritance** - Uses interface.

It is recommended to use **interface** instead of classes to enable different implementations which we can easily substitute without changing the code that uses it. Thus, by using interface enable loose-coupling which are independent of each other and don't need to share any code.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Open closed principle; howtodoinjava.com](https://howtodoinjava.com/design-patterns/open-closed-principle/)
* [SOLID Design Principles Explained: The Open/Closed Principle with Code Examples; stackify.com](https://stackify.com/solid-design-open-closed-principle/)
