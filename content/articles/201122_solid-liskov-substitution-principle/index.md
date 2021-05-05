---
title: "SOLID Design Principles - Liskov Substitution Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2020-11-22"
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
* [Example](#example)
  * [Bad Example](#bad-example)
  * [Good Example](#good-example)
* [Conclusion](#conclusion)
* [References](#references)

---

<a name="concept"></a>
## Concept

> Let Φ(x) be a property provable about objects x of type T. Then Φ(y)should be true for objects y of type S where S is a subtype of T.<br/>
> -*Barbara Liskov and Jeannette Wing*

The general idea of **LSP** is **substitutability**, where a superclass can be replaced with its subclass without altering any properties of the application. Thus, objects of the subclasses required to behave in similar to the objects of the superclass.

In **object-oriented programming (OOP)** such as Java has a concept called **Inheritance**. Inheritance is a concept where a class is based on another class. Where a class is "inherited" from another class, the inherited class become the subclass of the superclass, thus has all the characteristics of the superclass, but can also contain new properties.

---

<a name="example"></a>
## Example

LSP is easier to abuse due to this principle is depends on the behavior of the classes than structures. Thus, the compiler would not catch any error in the application and it will work, but mostly lead to buggy or difficult to maintain code.

<a name="bad-example"></a>
### Bad Example

Below is the bad application of LSP for vehicle application.

```java
public class Vehicle {

  private String name;
  private double speed;

  // public setter and getter method

  public void startEngine() { ... }
}
```
***Vehicle.java***

```java
public class Car extends Vehicle {

  @Override
  public void startEngine() { ... }
}
```
***Car.java***

Above shown Car class is a subclass of Vehicle class. Thus, Car is overriding the `startEngine` method of its superclass.

```java
public class Bicycle extends Vehicle {

  @Override
  public void startEngine() { ... }
}
```
***Bicycle.java***

But if Bicycle class inherited Vehicle class, it leads to incorrect behavior due to bicycle do not have any engine. Therefore, the `startEngine` method is redundant and useless for Bicycle class.

Therefore, this violate the LSP which result in a method in class does nothing, or simply cannot be implemented due incorrect behavior.

<a name="good-example"></a>
### Good Example

To fix the violation, each vehicle need to classify either with or without engines. In this case, bicycle as vehicle without engine while car with engine.

```java
public class Vehicle {

  private String name;
  private double speed;

  // public setter and getter
}
```
***Vehicle.java***

```java
public class VehicleWithEngine extends Vehicle {

  public void startEngine() { ... }
}
```
***VehicleWithEngine.java***

```java
public class VehicleWithoutEngine extends Vehicle {

  public void startMoving() { ... }
}
```
***VehicleWithoutEngine.java***

```java
public class Car extends VehicleWithEngine {

  @Override
  public void startEngine() { .. }
}
```
***Car.java***

```java
public class Bicycle extends VehicleWithoutEngine {

  @Override
  public void startMoving() { ... }
}
```
***Bicycle.java***

Therefore, with more classes to differentiate vehicle with or without engine, the implementation now adhere to LSP.

---

<a name="conclusion"></a>
## Conclusion

In conclusion, Liskov Substitution Principle enables developer to replace a parent class with subclass without breaking the application.

While to apply the principle can be achieved by using inheritance in OOP, inheritance can easily misuse which lead to buggy or difficult to maintain code although the application is running fine.

Thus, developer need careful about the behavior of class when developing an application to avoid violate the LSP.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Liskov Substitution Principle; springframework.guru](https://springframework.guru/principles-of-object-oriented-design/liskov-substitution-principle/)
* [SOLID Design Principles Explained: The Liskov Substitution Principle with Code Examples; stackify.com](https://stackify.com/solid-design-liskov-substitution-principle/)
