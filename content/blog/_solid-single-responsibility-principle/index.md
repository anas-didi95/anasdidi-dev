---
title: "SOLID Design Principles - Single Responsibility Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "9999-99-99"
tags: ["solid", "design-principle", "oop"]
---

**SOLID** is a sets for five design principles used in object-oriented programming to make software easier to understand, flexible and maintain. The theory of SOLID was introduced by Robert C. Martin in year 200o on his paper *Design Principles and Design Patterns.*. Later, the SOLID acronym is introduced by Micheal Feathers.

SOLID stands for
- **S**ingle-responsibility Principle
- **O**pen-closed Principle
- **L**iskov substitution principle
- **I**nterface segregation principle
- **D**ependency inversion principle

Following writing will discussed on one of the principles which is **Single-responsibility Principle (SRP)**.

---

## Table of contents
* [Concept](#concept)
* [References](#references)

---

<a name="concept"></a>
## Concept

> "A class should have only one reason to change."<br/>
>  -*Robert C Martin*

**SRP** defined that every module, class or function in software should have responsibility over single purpose in the software's functionality. Therefore, all module, class or function's services should be narrowly aligned with that responsibility.

If a single function of software has multiple responsibilities, it will make the software tightly coupled, thus make any changes in the future harder. Therefore, by applying single-responsibility on function of software, it will makes the software easier to understand and prevents unexpected side-effects of future changes.

Thus, a function should only have a single responsibility, that is, only changes to one part of software's specification should be able to affect the specification of the function.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [SOLID Design Principles Explained: The Single Responsibility Principle; stackify.com](https://stackify.com/solid-design-principles/)
