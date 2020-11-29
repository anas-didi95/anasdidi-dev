---
title: "SOLID Design Principles - Interface Segregation Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2020-11-29"
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

Following writing will discussed on one of the principles which is **Interface Segregation Principle (ISP)**.

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

> Many client-specific interfaces are better than one general-purpose interface.<br/>
> -*Robert C. Martin*

The general idea of **ISP** is client should not forced to implement methods it does not use. Thus, the approach is to splits several interfaces into smaller and specific interfaces, so the client can implements the specific interfaces which related to them.

Having an interface with define methods which unrelated to each others will make the interface become a fat interface or populated interface. When implement such interface, developer also need to write implementation for unused methods resulted in dummy methods which have no values in the implementation.

Thus, the implement is rigid for a fat interface due to developer need to manage changes for all clients when making change to a single interface. Therefore, the advantages of ISP will keep a system decoupled and make refactor an implementation easier as each interface will only has methods which required by its client.

---

<a name="example"></a>
## Example

Consider an example of a factory application. In a factory consists of ***Worker*** which is a human worker, ***Robot*** as robot worker. As human worker, they can work and eat. But for a robot worker, they can only work.

<a name="bad-example"></a>
### Bad Example

Therefore, below is the bad application for the factory application.

```java
public interface IWorker {
  public void eat();
  public void work();
}
```
***IWorker.java***

```java
public class Worker implements IWorker {
  public void eat() {
    // ...eating
  }

  public void work() {
    // ...working
  }
}
```
***Worker.java***

```java
public class Robot implements IWorker {
  public void eat() {
    // ...do nothing
  }

  public void work() {
    // ...working
  }
}
```
***Robot.java***

From the implementation, developer also need to implement `eat()` method for ***Robot*** class because the class implement ***IWorker*** interface. This make the method become a dummy method for ***Robot*** class, thus resulted ***IWorker*** interface become fat interface.

<a name="good-example"></a>
### Good Example

Thus, ***IWorker*** interface need is split into several specific interfaces. So, ***IFeedable*** can define `eat()` method and ***IWorker*** only define `work()` method.

```java
public interface IFeedable {
  public void eat();
}
```
***IFeedable.java***

```java
public interface IWorker {
  public void work();
}
```
***IWorker.java***

```java
public class Worker implements IWorker, IFeedable {
  public void eat() {
    // ...eating
  }

  public void work() {
    // ...working
  }
}
```
***Worker.java***

```java
public class Robot implements IWorker {
  public void work() {
    // ...working
  }
}
```
***Robot.java***

Thus, by splitting `work()` method and `eat()` method in specific interfaces, each class can implement the interfaces which related to them. So, ***Robot*** class no longer need to implement `eat()` method.

---

<a name="conclusion"></a>
## Conclusion

In conclusion, Interface Segregation Principle enables developer to split a general-purpose interface to several specific interfaces. Later, the client can implement the interface which needed by them.

Therefore, the client no need to implement dummy method leads to system decoupled and refactor easier. Moreover, if developer need another function for a client, they can create a specific interface for the function and implement to the client.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Interface Segregation Principle (ISP); oodesign.com](https://www.oodesign.com/interface-segregation-principle.html)
* [Interface Segregation Principle explained with example in Java; javabrahman.com](https://www.javabrahman.com/programming-principles/interface-segregation-principle-explained-examples-java/)
