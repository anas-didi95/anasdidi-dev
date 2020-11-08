---
title: "SOLID Design Principles - Single-responsibility Principle"
description: "Discussion on one of the SOLID design principles in object-oriented software development"
author: "Anas Juwaidi"
date: "2020-11-08"
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

Following writing will discussed on one of the principles which is **Single-responsibility Principle**.

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

> "A class should have only one reason to change."<br/>
>  -*Robert C Martin*

**Single-responsibility Principle** defined that every module, class or function in software should have responsibility over single purpose in the software's functionality. Therefore, all module, class or function's services should be narrowly aligned with that responsibility.

If a single class of software has multiple responsibilities, it will make the software tightly coupled, thus make any changes in the future harder.

Therefore, by applying single-responsibility on class of software, it will make the software easier to understand and prevents unexpected side-effects of future changes.

Thus, a class should only have a single responsibility, that is, only changes to one part of software's specification should be able to affect the specification of the function.

---

<a name="example"></a>
## Example

<a name="bad-example"></a>
### Bad Example

Below is a example of `Student` class

```java
// Student.java
package app;

public class Student {
  private String name;
  private boolean isPresent;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setIsPresent(boolean isPresent) {
    this.isPresent = isPresent;
  }

  public boolean getIsPresent() {
    return isPresent;
  }

  public String markAttendance() {
    return String.format("%s is %s", name, (isPresent ? "present" : "not present"));
  }
}
```

Overall, it looks like a POJO class, however the class actually breaking the Single-responsibility Principle.

This is due to implementation of method `markAttendance`. By having the method in the class, we now have multiple responsibilities to has the Student details and to display the attendance status of Student.

Any new requirement on the attendance status, we need to change the Student class, which may lead to unexpected side-effects in the future.

<a name="good-example"></a>
### Good Example

Therefore, we need to separate the responsibilities to each class, `Student` for Student details and `AttendanceTracker` for attendance-related functions.

```java
// Student.java
package app;

public class Student {
  private String name;
  private boolean isPresent;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setIsPresent(boolean isPresent) {
    this.isPresent = isPresent;
  }

  public boolean getIsPresent() {
    return isPresent;
  }

  public String markAttendance() {
    return String.format("%s is %s", name,
        (isPresent ? "present" : "not present"));
  }
}
```
Above is the revised `Student` class.

```java
// AttendanceTracker.java
package app;

public class AttendanceTracker {
  private final Student student;

  public AttendanceTracker(Student student) {
    this.student = student;
  }

  public String markAttendance() {
    return String.format("%s is %s", student.getName(),
        (student.getIsPresent() ? "present" : "not present"));
  }
}
```
And above is the new class, `AttendanceTracker` class.

The `AttendanceTracker` class takes a student object as a dependency and marks the student's attendance.

Therefore, both responsibilities has been split according to each class which adhere to the Single-responsibility principle. Any changes in the future for any of the class would not affect the others, thus the maintenance and testing of the software easier.

---

<a name="conclusion"></a>
## Conclusion

In conclusion, having a class with multiple responsibilities will make implements new requirements harder. Moreover, the software's maintenance will be a growing pain as it is adding more complexity and making the classes responsibilities strongly coupled to each other.

Therefore, having a class with single responsibility is the best way to make class more robust and easier to maintain.

---

<a name="references"></a>
## References

* [SOLID; wikipedia.org](https://en.wikipedia.org/wiki/SOLID)
* [SOLID Design Principles Explained: The Single Responsibility Principle; stackify.com](https://stackify.com/solid-design-principles/)
* [S.O.L.I.D: Single Responsibility Principle; abhishekprakash.com](https://blog.abhishekprakash.com/2020-03-25-s-o-l-i-d-single-responsibility-principle/)
