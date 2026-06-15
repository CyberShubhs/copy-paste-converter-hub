---
title: "Regex patterns every backend engineer ends up writing"
description: "When working on a project that involves validating user input, I often find myself writing regex patterns to match specific formats such as email addresses, UUIDs, and URLs. For in"
date: "2026-06-15"
author: "Shubham Singla"
tags: ["regex", "backend", "validation"]
---

When working on a project that involves validating user input, I often find myself writing regex patterns to match specific formats such as email addresses, UUIDs, and URLs. For instance, I was recently tasked with validating email addresses in a web application, and I ended up writing a regex pattern to match the general format of an email address. However, I realized that writing regex patterns can be tricky and prone to errors, especially for complex formats. In this post, I will discuss some common regex patterns that every backend engineer ends up writing, including patterns for email, UUID, slug, phone, and URL, and provide guidance on when to stop using regex and reach for a real parser instead.

## TL;DR
* Regex patterns can be used to match specific formats such as email addresses, UUIDs, and URLs
* Common regex patterns include email, UUID, slug, phone, and URL
* It's essential to know when to stop using regex and reach for a real parser instead
* Regex patterns can be prone to errors and may not cover all edge cases
* Using a real parser can help improve the accuracy and reliability of input validation

## Introduction to Regex Patterns
Regex patterns are a powerful tool for matching specific formats in text data. They can be used to validate user input, extract data from text, and even perform complex searches. However, writing regex patterns can be challenging, especially for complex formats. In this section, we will discuss some common regex patterns that every backend engineer ends up writing. We will also provide guidance on how to write these patterns correctly and avoid common mistakes.

## Regex Patterns for Common Formats
### Email Addresses
The regex pattern for matching email addresses is quite complex, but a common pattern is `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`. This pattern matches most common email address formats, but it may not cover all edge cases. For instance, it does not match email addresses with non-ASCII characters or addresses with comments.
```javascript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "example@example.com";
if (emailPattern.test(email)) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}
```
### UUIDs
The regex pattern for matching UUIDs is `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`. This pattern matches the standard format of a UUID, which consists of 32 hexadecimal digits divided into five groups.
```javascript
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const uuid = "123e4567-e89b-12d3-a456-426655440000";
if (uuidPattern.test(uuid)) {
  console.log("UUID is valid");
} else {
  console.log("UUID is not valid");
}
```
You can also use our [UUID generator](/tools/uuid-generator) to generate valid UUIDs.

## Regex Patterns for Phone Numbers and URLs
### Phone Numbers
The regex pattern for matching phone numbers is quite complex, as phone numbers can have different formats in different countries. A common pattern is `^\+[0-9]{1,3}[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$`. This pattern matches most common phone number formats, but it may not cover all edge cases.
```javascript
const phonePattern = /^\+[0-9]{1,3}[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
const phone = "+1 123 456 7890";
if (phonePattern.test(phone)) {
  console.log("Phone number is valid");
} else {
  console.log("Phone number is not valid");
}
```
### URLs
The regex pattern for matching URLs is also quite complex, as URLs can have different formats. A common pattern is `^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$`. This pattern matches most common URL formats, but it may not cover all edge cases.
```javascript
const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
const url = "https://example.com";
if (urlPattern.test(url)) {
  console.log("URL is valid");
} else {
  console.log("URL is not valid");
}
```
For more information on regex patterns, you can visit the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).

## When to Stop Using Regex
While regex patterns can be powerful tools for matching specific formats, they can also be prone to errors and may not cover all edge cases. In some cases, it's better to use a real parser instead of a regex pattern. For instance, when working with JSON data, it's better to use a JSON parser instead of trying to parse the data using regex. You can paste your JSON data into our [JSON formatter](/tools/json-formatter) to validate and format it.

## Common mistakes
* Not testing regex patterns thoroughly, which can lead to errors and unexpected behavior
* Not considering edge cases, which can lead to regex patterns that do not match all possible valid inputs
* Using regex patterns to parse complex data formats, which can lead to errors and performance issues
* Not using regex pattern modifiers, which can lead to case sensitivity issues and other problems
* Not validating user input, which can lead to security vulnerabilities and other issues

## FAQ
### What is the difference between a regex pattern and a parser?
A regex pattern is a string that defines a search pattern, while a parser is a program that analyzes a string and breaks it into its component parts.
### How do I test a regex pattern?
You can test a regex pattern by using it to match a set of test strings and verifying that it produces the expected results.
### Can I use regex patterns to parse JSON data?
No, it's not recommended to use regex patterns to parse JSON data. Instead, you should use a JSON parser.
### What is the best way to learn regex patterns?
The best way to learn regex patterns is by practicing and using online resources such as the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).
### Are regex patterns case sensitive?
By default, regex patterns are case sensitive, but you can use modifiers to make them case insensitive.

## Wrapping up
In conclusion, regex patterns are powerful tools for matching specific formats, but they can also be prone to errors and may not cover all edge cases. By understanding when to use regex patterns and when to stop using them, you can write more efficient and effective code. Remember to test your regex patterns thoroughly and consider edge cases to ensure that they work as expected.
