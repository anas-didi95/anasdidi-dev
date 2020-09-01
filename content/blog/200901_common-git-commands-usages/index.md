---
title: "Basic Git commands and usages"
description: "Explanation about a list of basic Git commands and usages."
author: "Anas Juwaidi"
date: "2020-09-01"
tags: ["git"]
---

**Git** is a distributed version-control system for tracking changes in files. It is mostly used by developers to track changes in source code in software development.

Git has remote repository which stored in a server and local repository which stored in the computer. Rather than have only single source of truth for full history of files, Git allows every developer's workspace to have a copy of the history.

Thus, having a distributed version-control system provides speed, data integrity and support for distributed, non-linear workflows for developers. Multiple developers can work in parallel using their local repository and share the latest changes to others by commit to remote repository. 


Following are the list of basic Git commands and usages to get started.

---

## Table of contents
* [git init](#git-init)
* [git status](#git-status)
* [git add](#git-add)
* [git rm](#git-rm)
* [git commit](#git-commit)
* [git log](#git-log)
* [Summary](#summary)
* [References](#references)

---

<a name="git-init"></a>
## git init

This command creates an empty Git repository which is **.git** folder containing necessary metadata files for the new repository. 

Most other Git commands is usable outside of initialize repository, hence this is the first command to get started with Git in new project.

**Syntax**
> **git init**

**Example**
```sh
$ git init
Initialized empty Git repository in /home/anas/Desktop/#example/.git/
```

Additionally, running this command in existing repository is safe as it will not overwrite things in the repository. It will pick up newly added template which not been copied from template directory into existing repository.

---

<a name="git-status"></a>
## git status

This command displays the state of the working directory and the **staging area** which is an intermediate area where commits may be reviewed before complete the commit.

Therefore, it lets you see the current state of files and files which not being tracked by Git.

**Syntax**
> **git status**

**Example**
```sh
$ echo hello > hello.md ## Add file with content

$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.md

nothing added to commit but untracked files present (use "git add" to track)
```

The recommendation is to check the state of the files before committing to avoid any mistakes happen.

---

<a name="git-add"></a>
## git add

This command adds the changes in the working directory to the staging area. It tells Git to prepare the content staged for next commit. 

Therefore, this command do not affect the repository in any ways as the changes not recorded yet. User can get the summary of files that in staged by using `git status`.

**Syntax**
> **git add &lt;file1&gt; &lt;file2&gt; ...**

**Example**
```sh
$ git add .

$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   hello.md
```

Moreover, this command may be performed multiple times before commit, thus allowing user to group related changes before actually complete the commit.

---

<a name="git-rm"></a>
## git rm

This command removes tracked files from a Git repository. Thus, it may be assume as the inverse of `git add` command.

However, this command will not remove file from the working tree and yet keep it in the repository.

Following are the list of options for the command:
* **-f, --force**: Override the up-to-date check.
* **--cached**: Use this option to unstage and remove paths only from the index.

**Syntax**
> **git rm [option] &lt;file1&gt; &lt;file2&gt;**

**Example**
```sh
$ git rm --force --cached hello.md
rm 'hello.md'

$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.md

nothing added to commit but untracked files present (use "git add" to track)
```

---

<a name="git-commit"></a>
## git commit

This command captures the contents in staging area and create new commit in the repository.

The snapshot committed to the local repository only. Later, the commit may be pushed to remote repositories using another command.

Following are the list of options for the command:
* **-m <msg>, --message=<msg>**: Set commit message
* **-a, --all**: Automatically stage files that have been modified and deleted

**Syntax**
> **git commit [option]**

**Example**
```sh
$ git add hello.md

$ git commit -m 'Add new file'
[master (root-commit) 3953879] Add new file
 1 file changed, 1 insertion(+)
 create mode 100644 hello.md
```

Prior the execution of `git commit`, `git add` is used to stage the changes into staging are for the commit.

---

<a name="git-log"></a>
## git log

This command shows the commit logs.

**Syntax**
> **git log**

**Example**
```sh
$ git log
commit 3953879fd387daa7f4583cfdde4fdb60871fe9c4 (HEAD -> master)
Author: Anas Juwaidi <anas.didi95@gmail.com>
Date:   Tue Sep 1 20:27:17 2020 +0800

    Add new file
```

The log will show the author, date and message of the commit.

---

<a name="summary"></a>
## Summary

Below is the summary table of the command discussed above.

<div class="table-container">
	<table class="table is-striped is-bordered">
		<thead class="has-text-centered">
			<tr>
				<th>Command</th>
				<th>Usage</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><b>git init</b></td>
				<td>Creates an empty Git repository</td>
			</tr>
			<tr>
				<td><b>git status</b></td>
				<td>Displays the state of the working directory and staging area</td>
			</tr>
			<tr>
				<td><b>git add</b></td>
				<td>Adds the changes in the working directory to the staging area</td>
			</tr>
			<tr>
				<td><b>git rm</b></td>
				<td>Remove tracked files from a Git repository</td>
			</tr>
			<tr>
				<td><b>git commit</b></td>
				<td>Captures the contents in staging area and create new commit in the repository</td>
			</tr>
			<tr>
				<td><b>git log</b></td>
				<td>Shows the commit logs</td>
			</tr>
		</tbody>
	</table>
</div>

---

<a name="references"></a>
## References

* [An introduction to Git: what it is, and how to use it; freecodecamp.org](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)
* [Setting up a repository; atlassian.com](https://www.atlassian.com/git/tutorials/setting-up-a-repository)


