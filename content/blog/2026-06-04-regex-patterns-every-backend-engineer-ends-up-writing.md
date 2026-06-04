---
title: "Regex patterns every backend engineer ends up writing"
description: "I've lost count of how many times I've written a regex pattern to validate an email address. It's one of those tasks that seems simple at first, but can quickly become complex. For"
date: "2026-06-04"
author: "Shubham Singla"
tags: ["regex", "backend", "validation"]
---

I've lost count of how many times I've written a regex pattern to validate an email address. It's one of those tasks that seems simple at first, but can quickly become complex. For instance, I was working on a project that required me to validate email addresses, and I found myself referencing the [Mozilla Developer Network's guide to regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) to ensure I was using the correct pattern. After some trial and error, I finally settled on a pattern that worked for my use case. However, I've come to realize that there are certain regex patterns that every backend engineer ends up writing at some point in their career. 

## TL;DR
* Email validation is a common use case for regex patterns
* UUID, slug, phone, and URL validation are also frequently used
* There are canonical patterns for each of these use cases
* Knowing when to stop using regex and reach for a real parser is crucial

## Introduction to Regex Patterns
Regex patterns are a powerful tool for any backend engineer. They allow us to validate and extract data from strings with precision and flexibility. However, they can also be complex and difficult to read. When working with regex patterns, it's essential to have a solid understanding of the syntax and semantics. For example, the following regex pattern matches most common email address formats: 
```javascript
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `[a-zA-Z0-9._%+-]+` matches one or more alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens
- `@` matches the at symbol
- `[a-zA-Z0-9.-]+` matches one or more alphanumeric characters, dots, or hyphens
- `\.` matches a period
- `[a-zA-Z]{2,}` matches the domain extension (it must be at least 2 characters long)
- `$` asserts the end of the line

## Regex Patterns for Common Use Cases
There are several common use cases for regex patterns, including UUID, slug, phone, and URL validation. For instance, the following regex pattern matches most common UUID formats: 
```javascript
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `[0-9a-fA-F]{8}` matches exactly 8 hexadecimal digits
- `-` matches a hyphen
- `[0-9a-fA-F]{4}` matches exactly 4 hexadecimal digits
- `-` matches a hyphen
- `[0-9a-fA-F]{4}` matches exactly 4 hexadecimal digits
- `-` matches a hyphen
- `[0-9a-fA-F]{4}` matches exactly 4 hexadecimal digits
- `-` matches a hyphen
- `[0-9a-fA-F]{12}` matches exactly 12 hexadecimal digits
- `$` asserts the end of the line
If you need to generate a UUID, you can use our [UUID generator](/tools/uuid-generator) to create a valid one.

### Slug Validation
Slug validation is another common use case for regex patterns. A slug is a string that is used to identify a resource, such as a blog post or a product. The following regex pattern matches most common slug formats: 
```javascript
^[a-zA-Z0-9-]+$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `[a-zA-Z0-9-]+` matches one or more alphanumeric characters or hyphens
- `$` asserts the end of the line

## Regex Patterns for Phone and URL Validation
Phone and URL validation are also common use cases for regex patterns. For instance, the following regex pattern matches most common phone number formats: 
```javascript
^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `\(?` matches an optional opening parenthesis
- `([0-9]{3})` matches exactly 3 digits
- `\)?` matches an optional closing parenthesis
- `[-. ]?` matches an optional separator (hyphen, dot, or space)
- `([0-9]{3})` matches exactly 3 digits
- `[-. ]?` matches an optional separator (hyphen, dot, or space)
- `([0-9]{4})` matches exactly 4 digits
- `$` asserts the end of the line
The following regex pattern matches most common URL formats: 
```javascript
^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `(https?:\/\/)?` matches an optional protocol (http or https)
- `([\da-z\.-]+)` matches the domain name
- `\.` matches a period
- `([a-z\.]{2,6})` matches the domain extension (it must be at least 2 characters long)
- `([\/\w \.-]*)*` matches any path or query string
- `\/?` matches an optional trailing slash
- `$` asserts the end of the line

## Regex Patterns Developer Should Know
As a developer, it's essential to have a solid understanding of regex patterns. They can be used to validate and extract data from strings with precision and flexibility. However, they can also be complex and difficult to read. When working with regex patterns, it's essential to have a solid understanding of the syntax and semantics. For example, the following regex pattern matches most common regex patterns: 
```javascript
^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$
```
This pattern breaks down into several parts: 
- `^` asserts the start of the line
- `(https?:\/\/)?` matches an optional protocol (http or https)
- `([\da-z\.-]+)` matches the domain name
- `\.` matches a period
- `([a-z\.]{2,6})` matches the domain extension (it must be at least 2 characters long)
- `([\/\w \.-]*)*` matches any path or query string
- `\/?` matches an optional trailing slash
- `$` asserts the end of the line
If you need to work with JSON data, you can paste it into our [JSON formatter](/tools/json-formatter) to make it more readable.

## Common Mistakes
Here are some common mistakes to watch out for when working with regex patterns: 
* Not using anchors (`^` and `$`) to ensure the pattern matches the entire string
* Not using character classes (`[]`) to match specific characters
* Not using quantifiers (`*`, `+`, `?`) to match repeated characters
* Not using groups (`()`) to capture matched text
* Not using the `i` flag to make the pattern case-insensitive
* Not testing the pattern thoroughly to ensure it matches the expected input

## FAQ
### What is a regex pattern?
A regex pattern is a string that is used to match and extract data from other strings. It consists of a series of characters that have special meanings, such as `.` to match any character, `*` to match zero or more repetitions, and `[]` to match a character class.

### How do I use regex patterns in my code?
You can use regex patterns in your code by creating a regex object and calling its `match()` or `exec()` method. For example: 
```javascript
const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const email = 'example@example.com';
if (regex.test(email)) {
  console.log('The email address is valid');
} else {
  console.log('The email address is not valid');
}
```
### What are some common use cases for regex patterns?
Some common use cases for regex patterns include email validation, UUID validation, slug validation, phone validation, and URL validation.

### Can I use regex patterns to parse HTML?
No, you should not use regex patterns to parse HTML. HTML is a complex and nuanced markup language that is difficult to parse using regex patterns. Instead, you should use a dedicated HTML parser.

### How do I optimize my regex patterns for performance?
To optimize your regex patterns for performance, you should use anchors (`^` and `$`) to ensure the pattern matches the entire string, use character classes (`[]`) to match specific characters, and use quantifiers (`*`, `+`, `?`) to match repeated characters. You should also test your pattern thoroughly to ensure it matches the expected input.

## Wrapping up
In conclusion, regex patterns are a powerful tool for any backend engineer. They allow us to validate and extract data from strings with precision and flexibility. However, they can also be complex and difficult to read. By understanding the syntax and semantics of regex patterns, and by using them judiciously, we can write more efficient and effective code.
