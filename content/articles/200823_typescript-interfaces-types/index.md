---
title: "TypeScript: Interfaces vs. Types"
description: "Comparison between Interfaces and Types for TypeScript"
author: "Anas Juwaidi"
date: "2020-08-23"
tags: ["typescript"]
---

TypeScript is an open-source language which acts as superset of JavaScript, plus static typing to the language.

By having static typing to the language, it providing better documentation and enable type-checking at compile time when transcompiles to JavaScript.

One of TypeScript's principles is that type-checking focuses on the shape that values have. Thus, TypeScript has [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html) to fill the role of naming these types.

TypeScript also has several basic types such as string, boolean and number which can be referred [here](https://www.typescriptlang.org/docs/handbook/basic-types.html#table-of-contents). However, if we want to create a new or advanced types, TypeScript has [Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases) for that purpose.

Sometimes, **Type Aliases** is similar to **Interfaces**. However, both have different purposes and use-cases in TypeScript.

---

## Table of contents
* [Types Aliases](#types-aliases)
* [Interfaces](#interfaces)
* [Comparison between Types Aliases and Interfaces](#comparison-types-interfaces)
  * [1. Object / Function](#1-object-function)
  * [2. Other Type](#2-other-type)
  * [3. Extend](#3-extend)
  * [4. Implements](#4-implements)
  * [5. Declaration Merging](#5-declaration-merging)
* [Types Aliases and Interfaces Comparison Table](#types-intefaces-comparison-table)
* [References](#references)

---

<a name="types-aliases"></a>
## Type Aliases

**Types Aliases** is used to create a new name for a type. It provides a way to name primitives, unions, tuples and any other types.

Keyword `type` is used to define Type aliases.

For example,
```typescript
type Hour = number

let timeInHour: Hour = 10
console.log(typeof(timeInHour))
// Output: [LOG]: number

let time: Hour = 12
console.log(typeof(time))
// Output: [LOG]: number
```

Based on the example, aliasing does not create a new type, but to create a new *name* to refer to other type.

---

<a name="interfaces"></a>
## Interfaces

**Interfaces** is used to describe data shapes such as an object to provides type-checking on the shape that values have. Therefore, interfaces are a way to defining contracts within the code as well contract with code outside the project.

Keyword `interface` is used to define interfaces.

For example,
```typescript
interface Book {
    author: string
    title: string
}

let book1: Book = {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell"
}

console.log(typeof(book1))
// Output: [LOG]: object

console.log(book1)
// Output: [LOG]: { "title": "Cracking the Coding Interview", "author": "Gayle Laakmann McDowell" }
```

Based on the example, interfaces provides the powerful way to define entities.

---

<a name="comparison-types-interfaces"></a>
## Comparison between Types Aliases and Interfaces

Following is the list of differences of type aliases and interfaces.

---

<a name="1-object-function"></a>
### 1. Object / Function

Both can be used to describe the shape of an object or a function signature. But the syntax differs.

**Type alias**
```typescript
type Point = {
  x: number
  y: number
}

type SetPoint = (x: number, y: number) => Point
```

**Interface**
```typescript
interface Point {
    x: number
    y: number
}

interface SetPoint {
    (x: number, y: number): Point
}
```

---

<a name="2-other-type"></a>
### 2. Other Type

Only type alias can be used for other types such as primitives, unions and tuples.
```typescript
// Primitive
type Name = string

// Object
type PartialPointX = { x: number }
type PartialPointY = { y: number }

// Union
type PartialPoint = PartialPointX | PartialPointY

// Tuple
type Data = [number, string]
```

---

<a name="3-extend"></a>
### 3. Extend

Both can be extended, but the syntax differs. Moreover, an interface and type alias are not mutually exclusive. Thus, an interface can extend a type alias and vice versa.

**Interface extends interface**
```typescript
interface PartialPointX { x: number }
interface Point extends PartialPointX { y: number }
```

**Type alias extends type alias**
```typescript
type PartialPointX = { x: number }
type Point = PartialPointX & { y: number }
```

**Interface extends type alias**
```typescript
type PartialPointX = { x: number };
interface Point extends PartialPointX { y: number }
```

**Type alias extends interface**
```typescript
interface PartialPointX { x: number }
type Point = PartialPointX & { y: number }
```

---

<a name="4-implements"></a>
### Implements

A class can implement an interface or type alias. However, they cannot implement/extend a type alias that names a union type.
```typescript
interface Point {
  x: number
  y: number
}

class SomePoint implements Point {
  x = 1
  y = 2
}

type Point2 = {
  x: number
  y: number
};

class SomePoint2 implements Point2 {
  x = 1
  y = 2
}

type PartialPoint = { x: number } | { y: number }

/*
 * ERROR:
 * A class can only implement an object type or
 * intersection of object types with statically known members.(2422)
 **/
class SomePartialPoint implements PartialPoint {
  x = 1
  y = 2
}
```

---

<a name="5-declaration-merging"></a>
### 5. Declaration Merging

Only interface can be defined multiple times and will be treated as a single interface (with members of all declarations being merged).
```typescript
// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number }
interface Point { y: number }

const point: Point = { x: 1, y: 2 }
```

---

<a name="types-intefaces-comparison-table"></a>
## Types Aliases and Interfaces Comparison Table

Below is the summary of comparison between type alias and interface.

<div class="table-container">
	<table class="table is-striped is-bordered">
		<thead class="has-text-centered">
			<tr>
				<th></th>
				<th>Type Aliases</th>
				<th>Interfaces</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><b>Definition</b></td>
				<td>It allows the creation of the new name for a type</td>
				<td>Provides a powerful way to define entities</td>
			</tr>
			<tr>
				<td><b>Object / Function</b></td>
				<td>Can be used to declare</td>
				<td>Can be used to declare</td>
			</tr>
			<tr>
				<td><b>Other Type</b></td>
				<td>Can be used for other types</td>
				<td>Cannot be used for other types</td>
			</tr>
			<tr>
				<td><b>Extend</b></td>
				<td>Can be extend</td>
				<td>Can be extend</td>
			</tr>
			<tr>
				<td><b>Implements</b></td>
				<td>Can be used to implements</td>
				<td>Can be used to implements</td>
			</tr>
			<tr>
				<td><b>Declaration Merging</b></td>
				<td>Cannot have multiple merged declarations</td>
				<td>Can have multiple merged declarations</td>
			</tr>
		</tbody>
	</table>
</div>

---

<a name="references"></a>
## References

* [TypeScript Official Website; typescriptlang.org](https://www.typescriptlang.org/)
* [Types vs. interfaces in TypeScript; logrocket.com](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
* [TypeScript Type vs Interface; educba.com](https://www.educba.com/typescript-type-vs-interface/)
* [TypeScript: Interfaces vs Types; stackoverflow.com](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
