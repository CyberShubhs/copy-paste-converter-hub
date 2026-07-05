---
title: "Regex patterns every backend engineer ends up writing"
description: "When working on a project that involves validating user input, I often find myself writing regex patterns to match specific formats such as email addresses, UUIDs, and URLs. While"
date: "2026-07-05"
author: "Shubham Singla"
tags: ["regex", "backend", "validation"]
---

When working on a project that involves validating user input, I often find myself writing regex patterns to match specific formats such as email addresses, UUIDs, and URLs. While these patterns can be useful for basic validation, they can also become complex and difficult to maintain. In this post, I will cover some common regex patterns that every backend engineer ends up writing, including patterns for email, UUID, slug, phone, and URL, and discuss when to stop using regex and reach for a real parser instead. I will also provide examples of how to use these patterns in code and discuss some common mistakes to avoid. 

## TL;DR
* Regex patterns can be used for basic validation of user input
* Common patterns include email, UUID, slug, phone, and URL
* It's essential to know when to stop using regex and use a real parser instead
* Common mistakes include using incorrect syntax and not testing patterns thoroughly
* Regex patterns should be used in conjunction with other validation methods for robust validation

## Introduction to Regex Patterns
Regex patterns are a powerful tool for matching strings in code. They can be used for a variety of tasks, including validation, parsing, and extraction of data. However, writing effective regex patterns can be challenging, especially for complex formats. In this section, I will cover some basic concepts of regex patterns and provide examples of how to use them in code. For example, the following regex pattern can be used to match a basic email address:
```javascript
 /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```
This pattern matches most common email address formats, but it may not cover all possible valid formats.

## Regex Patterns for Common Formats
In this section, I will cover some common regex patterns that every backend engineer ends up writing. These include patterns for email, UUID, slug, phone, and URL. 
### Email Regex Pattern
The email regex pattern is one of the most commonly used patterns. It can be used to validate user input and ensure that the email address is in the correct format. The following is an example of an email regex pattern:
```javascript
 /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```
This pattern matches most common email address formats, but it may not cover all possible valid formats. For more information on regex patterns, you can visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).

## Regex Patterns Developer Should Know
As a developer, it's essential to know how to write effective regex patterns for common formats. In this section, I will cover some regex patterns that every backend engineer should know, including patterns for UUID, slug, phone, and URL. 
### UUID Regex Pattern
The UUID regex pattern can be used to validate UUIDs in code. The following is an example of a UUID regex pattern:
```javascript
/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
```
This pattern matches the standard UUID format. You can use this pattern to validate UUIDs in your code. If you need to generate a UUID, you can use a tool like the [UUID generator](/tools/uuid-generator).

## Regex Patterns for Phone and URL
In this section, I will cover regex patterns for phone and URL. These patterns can be used to validate user input and ensure that the phone number and URL are in the correct format. 
### Phone Regex Pattern
The phone regex pattern can be used to validate phone numbers in code. The following is an example of a phone regex pattern:
```javascript
/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
```
This pattern matches most common phone number formats, but it may not cover all possible valid formats.

### URL Regex Pattern
The URL regex pattern can be used to validate URLs in code. The following is an example of a URL regex pattern:
```javascript
/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
```
This pattern matches most common URL formats, but it may not cover all possible valid formats.

## When to Stop Using Regex
While regex patterns can be useful for basic validation, they can also become complex and difficult to maintain. In this section, I will discuss when to stop using regex and reach for a real parser instead. If you find that your regex pattern is becoming too complex or difficult to maintain, it may be time to consider using a real parser. For example, if you are working with JSON data, you can use a JSON parser to validate and parse the data. You can paste it into our [JSON formatter](/tools/json-formatter) to validate and format the data.

## Common mistakes
Here are some common mistakes to avoid when using regex patterns:
* Using incorrect syntax
* Not testing patterns thoroughly
* Using patterns that are too complex or difficult to maintain
* Not considering all possible valid formats
* Not using regex patterns in conjunction with other validation methods

## FAQ
### Is Regex Case Sensitive
Regex patterns are case sensitive by default. However, you can use the `i` flag to make the pattern case insensitive. For example:
```javascript
 /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
```
This pattern matches most common email address formats, regardless of case.

### Can I Use Regex to Validate All User Input
While regex patterns can be used to validate user input, they should not be used as the sole method of validation. You should always use regex patterns in conjunction with other validation methods to ensure robust validation.

### How Do I Test My Regex Patterns
You should test your regex patterns thoroughly to ensure that they are working as expected. You can use a tool like a regex tester to test your patterns.

### What Are Some Common Regex Patterns
Some common regex patterns include email, UUID, slug, phone, and URL. These patterns can be used to validate user input and ensure that the data is in the correct format.

### Can I Use Regex to Parse JSON Data
While regex patterns can be used to parse JSON data, it's not recommended. You should use a JSON parser to validate and parse JSON data.

## Wrapping up
In this post, I covered some common regex patterns that every backend engineer ends up writing, including patterns for email, UUID, slug, phone, and URL. I also discussed when to stop using regex and reach for a real parser instead. By following the guidelines and examples in this post, you can write effective regex patterns and use them to validate user input in your code.
