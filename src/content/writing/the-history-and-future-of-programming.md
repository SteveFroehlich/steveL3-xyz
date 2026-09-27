---
title: "The history and future of programming by Bret Victor"
description: "An adaptation of Bret Victor’s talk on how programming evolved—and what generative AI might mean for what comes next."
publishedAt: 2024-02-17
tags:
  - software-engineering
  - programming
featured: true
draft: false
---

![Illustration for the history and future of programming](https://miro.medium.com/v2/resize:fit:1100/1*9KMG1fSxyhuX5quVabdhNA.png)

In the beginning there were machine programmers. These were legends, such as John von Neumann who created foundational computational models in the von Neumann architecture. They programmed in absolute binary. No variables, no “for loops”, no compilers, just machine code on something like an IBM 650. They were the real deal.

```
 0001 0000010000
 0002 0000000000
 0003 1000018003
 0004 6100080007
 0005 2400008003
 0006 0100008000
 0007 6900060005
 0008 2019990003

Sample program for IBM 650
```

However, after a while, Stan Poley came around and wrote one of the first assembly languages called the Symbolic Optimizing Assembly Program. This allowed programmers to use variables instead of hard coding memory addresses. To use words instead of binary. It was also much less error prone than binary.

```asm
_start:
 ; Hello World in assembly

 mov eax, 4 ; syscall number for sys_write
 mov ebx, 1 ; file descriptor 1 (stdout)
 mov ecx, hello ; pointer to the message
 mov edx, 13 ; message length
 int 0x80 ; interrupt to invoke syscall

 ; Exit the program
 mov eax, 1 ; syscall number for sys_exit
 mov ebx, 0 ; exit code
 int 0x80 ; interrupt to invoke syscall
```

When they showed assembler to the binary programmers, they weren’t interested. They thought, I know what programming is, and this is not it. There was a university student in one of von Neumann’s classes who wrote a little assembler program, presumably to save time. John von Neumann went so far as to scold him for wasting precious machine time on assembly tasks. In his mind machine time was only to be used for executing programs, not building them.

Eventually assembly languages gained widespread adoption and became the standard for how we program. Then John Backus at IBM designed FORTRAN in the late 1950s. Opening up a whole new world of programming at higher levels of abstraction. We can use ‘for loops’ and not have to worry about specific move statements or system calls. The size of a program’s source code was greatly reduced, while the amount of logic it represented was expanded. It marked another fundamental shift in the approach to programming.

When FORTRAN was presented to the assembler programmers they dismissed it. They didn’t see the value in it. They already formed their opinions about what programming should be.

```
/* Hello World in FORTRAN */

program HelloWorld
 print *, "Hello, World!"
end program HelloWorld
```

During this period, other foundational ideas emerged, such as pattern matching and regular expressions. Instead of writing a parser that procedurally analyzes a body of text, you specify the pattern of interest. The program then figures out how to find the text based on that pattern. The theoretical foundations for regular expressions (also known as regex) were established by mathematicians Warren McCulloch and Walter Pitts in 1943, who introduced models of neural networks. They introduced how neural activity could be represented as logic gates. Stephen Kleene expanded on to this model the concept of regular sets and regular events which allowed computers to recognize patterns in language. Regular expressions gained more adoptoin when Ken Thompson incorporated regular expression into the search patterns of the QED text editor.

```python
# modern Python regex example

import re
pattern = re.compile('[a-z]+')

string = "here is a string with UPPER CASE and lower case letters and 0123456789 numbers"

# returns all words that match the pattern (lower case letters) in the string
matches = pattern.findall(string)

print(matches)
```

Another groundbreaking development was the introduction of the Standard Query Language (SQL) developed in the early 1970s. It was based on Edgar F Codd’s seminal paper “A Relational Model of Data for Large Shared Data Banks.” Which established the mathematical foundation for relational databases.

This innovation lead to one of the first declarative programming paradigms, wherein programmers specify the desired state of the system, not the specifics on how to get it. For example the declarative SQL to get all people who are of legal drinking age in the United States.

```sql
SELECT NAME FROM PEOPLE WHERE AGE >= 21
```

Versus the procedural approach:

```
List can_drink = []
For person in people_collection
 If person.age >= 21
  can_drink.add(person.name)
Return can_drink
```

Fast forward to today and it’s interesting to note one of the most widely used programming languages, Python, still retains much of the structure of FORTRAN.

```python
# hello world in python

print("Hello, World!")
```

Why was there a Cambrian explosion of innovation in the mid 1900s followed by an apparent cooling afterward into the present? Could it be that enough programmers learned procedural programming and became productive enough that they decided they knew what programming was? And like the binary programmers we became constrained by our own beliefs of what programming ought to be. We believed we figured it all out. Perhaps the mid 1900s was that sweet spot where the technology was mature enough to do useful things but earlier enough that most programmers didn’t know what programming was suppose to look like. Because of that they were free to imagine all sorts of creative ways to program. As more programmers figured out what programming was suppose to look like, we became constrained by those beliefs. So much so that maybe dogma started to creep in and newer generations were brought up believing everything had been figured out.

We now arrive at what seems like another inflection point in programming with the rise of Generative AI. The discourse can be fierce. However the story seems eerily similar to the binary programmers and assembly. It can be useful to ask ourselves, what would Generative AI programming look like through a lens of a modern software developer? Perhaps a code generator, something to make what they already do a bit faster. Conversely what would someone who knows nothing about programming think? Maybe to them, programming is conversational English? As we stare into this new era, if we can admit to ourselves that we actually don’t know what we are doing. We don’t know what programming is or ought to be. Than we won’t be bound by our past. We can be free. Free to image wondrous new ways to do what we love. Code.

*Credit for this article’s content should go to Bret Victor. His talk on the history and future of programming is one of my favorites. This article is an adaptation of that work into the written form. I added my flavor to it and a few small changes but the majority of the content is Bret’s. I think this content is very relevant given the changes happening in AI. If you haven’t seen the [video](https://www.youtube.com/watch?v=8pTEmbeENF4) I recommend it.*
