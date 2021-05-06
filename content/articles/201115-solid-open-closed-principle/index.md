---
title: "SOLID Design Principles - Open-closed Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2020-11-15"
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
* [Example](#example)
  * [Bad Example](#bad-example)
  * [Good Example](#good-example)
* [Conclusion](#conclusion)
* [References](#references)

---

<a name="concept"></a>
## Concept

> "Software entities should be open for extension, but closed for modification."<br/>
>  -*Bertrand Mayer*

The general idea of **Open-closed Principle** is we will be able to add new features without changes the existing implementation of the project. This principle will avoid any changes required other classes as dependencies in the project.

Therefore, the summary of the definition as below:
- **Open for extension** - Project can add any new features.
- **Closed for modification** - Adding new feature does not result in changes to other classes of the project.

To design for Open-closed Principle, we can adopt either of two (generally used) pattern.
- **Implementation inheritance** - Uses abstract classes and methods.
- **Interface inheritance** - Uses interface.

Using **interface** is better instead of classes to enable different implementations which we can easily substitute without changing the code that uses it. Thus, by using interface enable loose-coupling which are independent of each other and don't need to share any code.

---

<a name="example"></a>
## Example

<a name="bad-example"></a>
### Bad Example

Below are implementation for Calculator project.

```java
public interface IOperation {
}
```
***IOperation.java***

```java
public class Addition implements IOperation {
    private double num1;
    private double num2;
    private double total = 0.0;

    public Addition(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    //Setters and getters
}
```
***Addition.java***

```java
public class Substraction implements IOperation {
    private double num1;
    private double num2;
    private double total = 0.0;

    public Substraction(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    //Setters and getters
}
```
***Substraction.java***

```java
public interface ICalculator {
  void calculate(IOperation operation)
}
```
***ICalculator.java***

```java
public class SimpleCalculator implements ICalculator {
    @Override
    public void calculate(IOperation operation)
    {
        if (operation == null) {
            throw new InvalidParameterException("Some message");
        }

        if (operation instanceof Addition) {
            Addition obj = (Addition) operation;
            obj.setTotal(obj.getNum1() + obj.getNum2());
        } else if (operation instanceof Substraction) {
            Substraction obj = (Substraction) operation;
            obj.setTotal(obj.getNum1() - obj.getNum2());
        }
    }
}
```
***SimpleCalculator.java***

From the implementation, by adding new feature such as Multiplication, ***SimpleCalculater.java*** need to update. Thus, this code breaking Open-closed Principle.

<a name="good-example"></a>
### Good Example

Therefore, we need to abstract the functionality what changes in the project. In this project, the calculation part is changes with every new operations.

```java
public interface IOperation {
  void performOperation();
}
```
***IOperation.java***

```java
public class Addition implements IOperation {
    private double num1;
    private double num2;
    private double total = 0.0;

    public Addition(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    @Override
    public void performOperation() {
        total = num1 + num2;
    }

    //Setters and getters
}
```
***Addition.java***

```java
public class Substraction implements IOperation {
    private double num1;
    private double num2;
    private double total = 0.0;

    public Substraction(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    @Override
    public void performOperation() {
        total = num1 - num2;
    }

    //Setters and getters
}
```
***Substraction.java***

```java
public interface ICalculator {
  void calculate(IOperation operation)
}
```
***ICalculator.java***

```java
public class SimpleCalculator implements ICalculator {
    @Override
    public void calculate(IOperation operation)
    {
        if (operation == null) {
            throw new InvalidParameterException("Some message");
        }

        operation.performOperation();
    }
}
```
***SimpleCalculator.java***

Thus, we can add new operation such as Multiplication without need to change the current implementation. Any new operation will easily integrate with existing implementation.

```java
public class Multiplication implements IOperation {
    private double num1;
    private double num2;
    private double total = 0.0;

    public Multiplication(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    @Override
    public void performOperation() {
        total = num1 * num2;
    }

    //Setters and getters
}
```
***Multiplication.java***

---

<a name="conclusion"></a>
## Conclusion

In conclusion, Open-closed Principle is a guideline on how developers can build code that allows change over time. With introduction of agile practice, add new features is common. If the current implementation not built to enable change, it will be difficult, time-consuming, error-prone and costly.

By adhere to the principle of open to extension but closed for modification, we can disallow any changes to existing implementation, and any new features are easily integrated by using the interface.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [Open closed principle; howtodoinjava.com](https://howtodoinjava.com/design-patterns/open-closed-principle/)
* [SOLID Design Principles Explained: The Open/Closed Principle with Code Examples; stackify.com](https://stackify.com/solid-design-open-closed-principle/)
