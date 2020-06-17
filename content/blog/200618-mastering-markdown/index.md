---
title: "Mastering Markdown"
description: "Introduction to Markdown with the basic syntax and examples."
author: "Anas Juwaidi"
date: "2020-06-18"
tags: ["markdown"]
slug: "200618-mastering-markdown"
---

Markdown is a lightweight and plain-text-formatting syntax markup language for styling documents such as README files and writing message in discussion forums.
Mostly, Markdown is just regular text with special characters throws such as `#` or `*` to control the format.

---

## Table of contents
* [Basic Syntax](#basic-syntax)
  * [Header](#header)
  * [Emphasis](#emphasis)
  * [List](#list)
  * [Image](#image)
  * [Link](#link)
  * [Blockquote](#blockquote)
  * [Inline code](#inline-code)
  * [Code block](#code-block)
  * [Horizontal rule](#horizontal-rule)
* [References](#references)

---

<a name="basic-syntax"></a>
## Basic Syntax
Following are the basic syntax used in Markdown.

---

<a name="header"></a>
### Header
```markdown
# This is an H1 tag
## This is an H2 tag
### This is an H3 tag
#### This is an H4 tag
##### This is an H5 tag
###### This is an H6 tag
```

**Result**

# This is an H1 tag
## This is an H2 tag
### This is an H3 tag
#### This is an H4 tag
##### This is an H5 tag
###### This is an H6 tag

---

<a name="emphasis"></a>
### Emphasis
```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

**Result**

*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

_You **can** combine them_

---

<a name="list"></a>
### List

*Unordered*
```markdown
* Item 1
* Item 2
```

**Result**

* Item 1
* Item 2

*Ordered*
```markdown
1. Item 1
2. Item 2
```

**Result**

1. Item 1
2. Item 2

---

<a name="image"></a>
### Image
```markdown
![Google Logo](url)
## Format: ![Alt text](URL)
```

**Result**

![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

---

<a name="link"></a>
### Link
```
[Google](http://google.com)
```

**Result**

[Google](http://google.com)

---

<a name="blockquote"></a>
### Blockquote
```markdown
> We're living the future so
> the present is our past.
```

**Result**

> We're living the future so
> the present is our past.

---

<a name="inline-code"></a>
### Inline Code
```markdown
`CTRL` + `C`
```

**Result**

`CTRL` + `C`

---

<a name="code-block"></a>
### Code block
```markdown
# backtick
'''javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
'''
```

**Result**

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

---

<a name="horizontal-rule"></a>
### Horizontal rule
```markdown
---
```

**Result**

---

---


<a name="references"></a>
## References

* [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)
* [https://daringfireball.net/projects/markdown/syntax#hr](https://daringfireball.net/projects/markdown/syntax#hr)
* [https://github.github.com/gfm](https://github.github.com/gfm/)

