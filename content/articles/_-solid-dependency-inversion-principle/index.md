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
* [Example](#example)
* [Conclusion](#conclusion)
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

Therefore, it dictates that both high-level modules and low-level modules must depend on same abstractions. It splits the dependency between high-level modules and low-level modules by introduce an abstraction between them.

---

<a name="example"></a>
## Example

Consider the following implementations:
```java
public class SecurityManager {
  private final UserServicePg userService;

  public SecurityManager(UserServicePg userService) {
    this.userService = userService;
  }

  public List<User> getUserList() {
    return userService.getUserList();
  }
}

public class UserServicePg {
  public List<User> getUserList() {
    return new ArrayList<>(); // Get results from Postgres
  }
}
```

From above example, the `SecurityManager` class uses the concrete `UserServicePg` class. Therefore, it is tightly-coupled in the implementation. It means when the implementation need to change the configuration like database from Postgres to Mongo, the `SecurityManager` need to be change.

Thus, **DIP** can be uses to make `SecurityManager` and `UserServicePg` class more loosely-coupled.

Based on **DIP** definition, a high-level module should not depend on low-level module. And both should depend on abstraction. From the example, `SecurityManager` depends on the `UserServicePg` class, so `SecurityManager` is a high-level module and `UserServicePg` is a low-level module.

Next, abstraction need to be define between both high-level module and low-level module. An abstraction in programming means to create an interface or abstract class which allows both high-level module and low-level module to depend on and create interaction between them.

Thus, `UserServicePg` class method can be abstract into interface class like below:
```java
public interface IUserService {
  public List<User> getUserList();
}
```

Next, the interface can be implemented into `UserServicePg` class.
```java
public class UserServicePg implements IUserService {
  @Override
  public List<User> getUserList() {
    return new ArrayList<>(); // Get results from Postgres
  }
}
```

Now, change the `SecurityManager` to accept interface as parameter for dependency.
```java
public class SecurityManager {
  private final UserService userService;

  public SecurityManager(UserService userService) {
    this.userService = userService;
  }

  public List<User> getUserList() {
    return userService.getUserList();
  }
}
```

With the latest implementation, the `SecurityManager` class can accept any class which implements the `UserService` interface. Thus, if next development required change to the configuration like database, it can simply be change without making any changes to `SecurityManager` class which is high-level module.

---

<a name="conclusion"></a>
## Conclusion

In conclusion, Dependency Inversion Principle enables abstraction between high-level modules and low-level modules by usage of interface.
It allows the dependency between high-level modules and low-leve levels split and both modules will depend on same abstraction to interact.

Thus, it enables developer to change high-level modules and low-level modules without affection any other classes, as long as they do not change any interface abstractions.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Dependency Inversion Principle; tutorialsteacher.com](https://www.tutorialsteacher.com/ioc/dependency-inversion-principle)
* [SOLID Design Principles Explained: Dependency Inversion Principle with Code Examples; stackify.com](https://stackify.com/dependency-inversion-principle/)
