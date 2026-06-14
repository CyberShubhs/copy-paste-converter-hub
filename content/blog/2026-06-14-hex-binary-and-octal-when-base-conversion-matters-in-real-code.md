---
title: "Hex, binary, and octal: when base conversion matters in real code"
description: "When working with low-level system programming or embedded systems, I often encounter hexadecimal dumps of memory or binary data. For instance, while debugging a network protocol i"
date: "2026-06-14"
author: "Shubham Singla"
tags: ["binary", "hex", "low-level"]
---

When working with low-level system programming or embedded systems, I often encounter hexadecimal dumps of memory or binary data. For instance, while debugging a network protocol implementation, I needed to read a hex dump of a packet capture to understand why the protocol was malfunctioning. The dump was a long string of hexadecimal values, which I had to convert to a more readable format to identify the issue. This experience made me realize the importance of understanding different number bases, particularly when working with bitmasks, Unix file permissions, or color codes. A reliable number base converter is essential in such situations, and I use tools like the one at https://converterhub.dev/tools/number-base-converter to simplify the process.

## TL;DR
* Understanding different number bases is crucial in low-level system programming and embedded systems development
* Hex, binary, and octal number bases are commonly used in bitmasks, Unix file permissions, and color codes
* A number base converter can simplify the process of converting between different number bases
* Familiarity with hex literal syntax across languages is essential for working with binary data
* Common mistakes in base conversion can be avoided by using the right tools and understanding the underlying concepts

## Introduction to Number Bases
Number bases are a fundamental concept in computer science, and understanding them is essential for working with binary data. The most common number bases used in programming are decimal, binary, octal, and hexadecimal. Decimal is the base-10 system we use in everyday life, while binary is the base-2 system used by computers. Octal and hexadecimal are base-8 and base-16 systems, respectively, which are often used as shorthand for binary values. For example, the binary value `1010` can be represented as `A` in hexadecimal or `12` in octal.

## Working with Bitmasks
Bitmasks are a common use case for number base conversion. A bitmask is a binary value used to represent a set of flags or options. For instance, in a Unix file system, permissions are represented as a bitmask, where each bit corresponds to a specific permission, such as read, write, or execute. To work with bitmasks, you need to understand how to convert between binary and other number bases. For example, the binary value `111` can be represented as `7` in decimal or `7` in octal. In code, you can use bitwise operators to manipulate bitmasks:
```c
// Set the read permission bit
int permissions = 0;
permissions |= 0x4; // 0x4 is the binary value 100
```
In this example, the `|=` operator is used to set the read permission bit in the `permissions` variable.

## Understanding Unix File Permissions
Unix file permissions are another area where number base conversion is essential. Permissions are represented as a three-digit octal value, where each digit corresponds to the permissions for the owner, group, and other users, respectively. For example, the permission `755` means the owner has read, write, and execute permissions, while the group and other users have read and execute permissions. To work with Unix file permissions, you need to understand how to convert between octal and other number bases. For instance, the octal value `755` can be represented as `493` in decimal or `0x2ED` in hexadecimal.

## Color Codes and Hex Literal Syntax
Color codes are often represented as hexadecimal values, where each value corresponds to the red, green, and blue components of the color, respectively. For example, the color white can be represented as `#FFFFFF` in hexadecimal. In programming languages, hex literal syntax is used to represent hexadecimal values. For instance, in JavaScript, you can use the `0x` prefix to represent a hexadecimal value:
```javascript
// Represent the color white as a hexadecimal value
const white = 0xFFFFFF;
```
According to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString), the `toString()` method can be used to convert a number to a string in a specific radix. For example:
```javascript
// Convert the decimal value 255 to a hexadecimal string
const hexString = (255).toString(16);
```
In this example, the `toString(16)` method is used to convert the decimal value `255` to a hexadecimal string.

## Using a Number Base Converter
A number base converter is a tool that simplifies the process of converting between different number bases. It can be used to convert binary, octal, or hexadecimal values to decimal or other bases. For example, you can use a number base converter to convert the binary value `1010` to decimal or hexadecimal. Some number base converters also support additional features, such as converting between different encoding schemes, like Base64. You can use the Base64 encode and decode tool at /tools/base64-encode-decode to convert between Base64 and other encoding schemes.

## Common mistakes
* Using the wrong number base when working with bitmasks or Unix file permissions
* Failing to understand the hex literal syntax in a specific programming language
* Not using a reliable number base converter to simplify the conversion process
* Assuming that all programming languages use the same hex literal syntax
* Not considering the endianness of the system when working with binary data
* Using the wrong encoding scheme when converting between different number bases

## FAQ
### Is Base64 encryption?
Base64 is not an encryption scheme, but rather an encoding scheme used to represent binary data as a string of characters. It is often used to transmit binary data over text-based protocols, such as email or HTTP.
### How do I convert a binary value to decimal?
You can use a number base converter to convert a binary value to decimal. Alternatively, you can use the built-in functions in your programming language, such as the `parseInt()` function in JavaScript.
### What is the difference between big-endian and little-endian byte order?
Big-endian and little-endian byte order refer to the way in which binary data is stored in memory. In big-endian systems, the most significant byte is stored first, while in little-endian systems, the least significant byte is stored first.
### Can I use a number base converter to convert between different encoding schemes?
Some number base converters support additional features, such as converting between different encoding schemes, like Base64. However, not all number base converters support this feature, so it's essential to check the documentation before using one.
### How do I represent a hexadecimal value in a specific programming language?
The way to represent a hexadecimal value in a programming language depends on the language's hex literal syntax. For example, in JavaScript, you can use the `0x` prefix to represent a hexadecimal value.
### What is the purpose of the `toString()` method in JavaScript?
The `toString()` method in JavaScript is used to convert a number to a string in a specific radix. It can be used to convert a decimal value to a hexadecimal or binary string.

## Wrapping up
In conclusion, understanding different number bases is essential in low-level system programming and embedded systems development. A reliable number base converter can simplify the process of converting between different number bases, and familiarity with hex literal syntax across languages is crucial for working with binary data. By avoiding common mistakes and using the right tools, developers can ensure that their code is correct and efficient.
