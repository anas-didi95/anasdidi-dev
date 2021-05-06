---
title: "Introduction to Regular Expression"
description: "Introduction to Regular Expression or Regex explained common syntax and usage."
author: "Anas Juwaidi"
date: "2020-06-21"
tags: ["regex", "regular", "expression"]
---

Regular expression or shortened as **regex** is a sequence of characters to define a search pattern.

Regex allows us to search for specific, standard textual syntax for representing patterns for matching text. 

Though look complicated, regex are very powerful as it can be used to create and match any text pattern.

Usually, operations such as string searching algorithms and input validation solved by using regex. 

Thus, regex is used in search engines and in search and replace dialog of text editors.

---

## Table of contents
* [Metacharacter](#metacharacter)
  * [^ *(Caret)*](#caret)
  * [. *(Dot)*](#dot)
  * [\[ \]](#square-bracket)
  * [\[^ \]](#caret-bracket)
  * [$ *(Dollar)*](#dollar)
  * [* *(Asterisk)*](#asterisk)
  * [+ *(Plus)*](#plus)
  * [? *(Question mark)*](#question-mark)
  * [{n}](#curly-n)
  * [{n,m}](#curly-m-n)
  * [| *(Pipe)*](#pipe)
* [Example usage](#example-usage)
  * [Email validation](#email-validation)
  * [Phone validation](#phone-validation)
* [References](#references)

---

<a name="metacharacter"></a>
## Metacharacter

Metacharacter is a character that has a special meaning to a regex.

Following are the common metacharacters in regex and description:

---

<a name="caret"></a>
### ^ *(Caret)*

Matches the starting position within the string.

**Example**
![Caret](./01-caret.png)


---

<a name="dot"></a>
### . *(Dot)*

Matches any single character. Can be used as *wildcard* character.

**Example**
![Dot](./02-dot.png)

---

<a name="square-bracket"></a>
### [ ]

Matches a single character that is contained within the bracket.

**Example**
![Bracket 1](./03.1-bracker.png)

`-` can be used to specific a range of characters. Thus, `[a-z]` matches "a" until "z".

**Example**
![Bracket 2](./03.2-bracker.png)

---

<a name="caret-bracket"></a>
### [\^ ]

Matches a single character that is not contained within the bracket.

**Example**
![Caret bracket 1](./04.1-caret-bracket.png)

`-` can be used to specific a range of characters. Thus, `[^a-z]` matches any except "a" until "z".

**Example**
![Caret bracket 2](./04.2-caret-bracket.png)

---

<a name="dollar"></a>
### $ *(Dollar)*

Matches the ending position of the string.

**Example**
![Dollar](./05-dollar.png)

---

<a name="asterisk"></a>
### * *(Asterisk)*

A repeater where matches when the character preceding `*` matches 0 or more times.

**Example**
![Asterisk](./06-asterisk.png)

---

<a name="plus"></a>
### + *(Plus)*

A repeater where matches when the character preceding `+` matches at least one or more times.

**Example**
![Plus](./07-plus.png)

---

<a name="question-mark"></a>
### ? *(Question mark)*

Matches when the character preceding `?` occurs 0 or 1 time only, making the character optional.

**Example**
![Question mark](./08-question-mark.png)

---

<a name="curly-n"></a>
### {n}

Matches when the preceding character occurs *n* times.

**Example**
![Curly n](./09-curly-n.png)

---

<a name="curly-m-n"></a>
### {m,n}

Matches when the preceding character occurs at least *m* and not more than *n* times.

**Example**
![Curly m n](./10-curly-m-n.png)

---

<a name="pipe"></a>
### | *(Pipe)*

Matches either the expression before or expression after the `|`.

**Example**
![Pipe](./11-pipe.png)

---

<a name="example-usage"></a>
## Example usage

Following are common usages of regex. 

If the usage required to use metacharacter as literal character, we can used backslash `\` to escape the character.

---

<a name="email-validation"></a>
### Email validation

`^[a-z0-9_\.]+@[a-z]+\.[a-z]{2,3}$`

**Result**
![Email validation](./12-email-validation.png)

---

<a name="phone-validation"></a>
### Phone validation

Regex is used to match phone validation used in Malaysia.

`^\+6[0-9]{2,3}-[0-9]{7,8}$`

**Result**
![Phone validation](./13-phone-validation.png)

---

<a name="references"></a>
## References

* [Regular Expression; wikipedia.org](https://en.wikipedia.org/wiki/Regular_expression)
* [A Programmer's Guide to Regex or Regular Expressions; hackernoon.com](https://hackernoon.com/a-programmers-guide-to-regex-or-regular-expressions-0daw30be)
* [Online regex tester and debugger; regex101.com](https://regex101.com/)

