---
title: "The difference between var, let and const in JavaScript"
description: "Explanation about the difference between var, let and const in JavaScript"
author: "Anas Juwaidi"
date: "2020-09-15"
tags: ["javascript"]
---

Before the introduction of **ECMAScript 6 (ES6)**, the only way to declare a variable in JavaScript is by using `var` keyword. However, variables declared using `var` have several issues in terms of **scope** and **usage**.

With the introduction of `let` and `const` for variable declaration in JavaScript, it solve the issues when using `var`, making them easier to debug and less prone to mistakes.

Each keyword can be compared from their **scope** and **usage**.

---

## Table of contents
* [Scope](#scope)
  * [Global scope](#global-scope)
  * [Function scope](#function-scope)
  * [Block scope](#block-scope)
* [Variable re-declare](#variable-redeclare)
* [Variable constant](#variable-constant)
* [Summary](#summary)
* [References](#references)

---

<a name="scope"></a>
## Scope

**Scope** is defined as where the variables are available for use. In JavaScript, it has two type of common scopes; **Global scope** or **Function scope**.

But with the introduction of ES6, new type of scope is added to JavaScript; **Block scope**.

Therefore, unlike `var` keyword which has global scope and function scope, `let` and `const` keyword also have both with the additional of block scope for their definition.

---

<a name="global-scope"></a>
### Global Scope

**Global scope** is applied to variable declared globally (outside any function).

**Example**
```javascript
var name = "Anas";

function greetName() {
  console.log("Hello, " + anas);
}
```

In the example, variable `name` can be access anywhere as it is defined as global variable.

---

<a name="function-scope"></a>
### Function scope

**Function scope** is applied to variable declared locally (inside a function).

**Example**
```javascript

function getGreet() {
  var greet = "Hi";
  console.log(greet);
}
```

In the example, variable `greet` can only be access from inside the function it is declared.

---

<a name="block-scope"></a>
### Block scope

**Block scope** is applied to variable which is using `let` and `const` keyword. The variables with block scope cannot be access from outside the block.

**Example**
```javascript
{
  var a = 10;
  console.log("1: "+a); // Output: 1: 10
}
{
  a++;
  console.log("2: "+a); // Output: 2: 11
}
console.log("3: "+a); // Output: 3: 11
```

In the example, the `a` variable can be use outside the block as it is declared using `var` keyword.  Next is example for using `let` to declare variable.

**Example**
```javascript
{
  let b = 10;
  console.log("1: "+b); // Output: 1: 10
}
{
  b++;
  console.log("2: "+b); // Output: ERROR! Uncaught ReferenceError: b is not defined
}
console.log("3: "+b);
```

In the example, using `let` will produce error as variable `b` is declared on first block, but second block try to access it.

---

<a name="variable-redeclare"></a>
## Variable re-declare

The usage of `var` allow the developer to re-declare existing variable within same scope and will not caught any error.

**Example**
```javascript
var greet = "Hello";
console.log(greet); // Output: Hello

var greet = "Hi"; // Output: Hi
console.log(greet);
```

In the example, `greet` is declared twice and its value is updated when re-declared. But for `let` and `const`, re-declared existing variable within same scope will produce error.

**Example**
```javascript
let greet = "Hello";
console.log(greet);
let greet = "Hi";
console.log(greet);

/// Output
// ERROR! Uncaught SyntaxError: Identifier 'greet' has already been declared
```

Therefore, using `let` and `const` help the developer to avoid re-declare any existing variable, thus making less prone to mistakes in development.

---

<a name="variable-constant"></a>
## Variable constant

ES6 also introduce a way to declare constant using `const` keyword. Any variable declared with `const` cannot be re-assigned to a different value.

**Example**
```javascript
const name = "Anas";
console.log(name); // Output: Anas

name = "Anas Juwaidi";
console.log(name); // Output: ERROR! Uncaught TypeError: Assignment to constant variable.
```

However, the value of the variable is not fixed and it is mutable.

**Example**
```javascript
const lang = ["en", "my"];
const me = { firstName: "Anas" };

lang.push("cn");
me.lastName = "Juwaidi";

console.log(lang); // Output: ["en", "my", "cn"]
console.log(me); // Output: {firstName: "Anas", lastName: "Juwaidi"}
```

---

<a name="summary"></a>
## Summary

Following is the summary table between `var`, `let` and `const` keyword.

<div class="table-container">
	<table class="table is-striped is-bordered">
		<thead class="has-text-centered">
			<tr>
				<th></th>
				<th>var</th>
				<th>let</th>
				<th>const</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><b>Global scope</b></td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">Yes</td>
			</tr>
			<tr>
				<td><b>Function scope</b></td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">Yes</td>
			</tr>
			<tr>
				<td><b>Block scope</b></td>
				<td class="has-text-centered">No</td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">Yes</td>
			</tr>
			<tr>
				<td><b>Variable re-declare within same scope</b></td>
				<td class="has-text-centered">Yes</td>
				<td class="has-text-centered">No</td>
				<td class="has-text-centered">No</td>
			</tr>
			<tr>
				<td><b>Variable constant</b></td>
				<td class="has-text-centered">No</td>
				<td class="has-text-centered">No</td>
				<td class="has-text-centered">Yes</td>
			</tr>
		</tbody>
	</table>
</div>

---

<a name="references"></a>
## References

* [Var, Let, and Const – What's the Difference?; freecodecamp.org](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
* [Difference between var, let and const in Javascript.; codeburst.io](https://codeburst.io/difference-between-var-let-and-const-in-javascript-fbce2fba7b4)
