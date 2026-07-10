---
title: "JSON to CSV: the conversion pitfalls that eat your weekend"
description: "I've lost count of the number of weekends I've spent wrestling with JSON to CSV conversions. It usually starts with a simple task: take a JSON file from an API and import it into a"
date: "2026-07-10"
author: "Shubham Singla"
tags: ["json", "csv", "data"]
---

I've lost count of the number of weekends I've spent wrestling with JSON to CSV conversions. It usually starts with a simple task: take a JSON file from an API and import it into a spreadsheet for analysis. But then the issues start to creep in. Nested objects, arrays of arrays, commas inside fields - all of these can cause problems when trying to convert JSON to CSV. And once you think you've got it working, you'll often find that the quoting and escaping rules have tripped you up. 

## TL;DR
* JSON to CSV conversions can be tricky due to nested objects and arrays
* Commas inside fields and quoting/escaping rules can cause issues
* Using a reliable JSON to CSV converter can simplify the process
* Understanding the differences between Excel and Google Sheets behavior is important
* Stable column ordering is crucial for accurate data analysis

## Understanding JSON Structure
When working with JSON data, it's essential to understand its structure. JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write. According to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), JSON is a text format that is completely language-independent. However, this independence can sometimes lead to issues when converting JSON to CSV. For example, consider the following JSON object:
```json
{
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
```
This object has a nested structure, which can be difficult to handle when converting to CSV.

## Converting JSON to CSV
When converting JSON to CSV, it's essential to use a reliable tool. I often paste my JSON data into our [JSON to CSV converter](/tools/json-to-csv) to get a clean and accurate conversion. This tool can handle nested objects and arrays, as well as commas inside fields. However, it's still important to understand the quoting and escaping rules to ensure that your data is converted correctly. According to the [RFC 4180 specification](https://www.rfc-editor.org/rfc/rfc4180), CSV files should use double quotes to enclose fields that contain commas or other special characters.

## Handling Nested Objects and Arrays
Nested objects and arrays can be particularly tricky when converting JSON to CSV. Consider the following example:
```json
{
  "name": "John Doe",
  "orders": [
    {
      "id": 1,
      "total": 10.99
    },
    {
      "id": 2,
      "total": 5.99
    }
  ]
}
```
In this example, the `orders` field is an array of objects. When converting this to CSV, we need to decide how to handle the nested structure. One approach is to use a separate row for each order, with the `name` field repeated for each row.

### Arrays of Arrays
Arrays of arrays can be even more challenging. Consider the following example:
```json
{
  "name": "John Doe",
  "orders": [
    [
      1,
      10.99
    ],
    [
      2,
      5.99
    ]
  ]
}
```
In this case, we need to decide how to handle the inner arrays. One approach is to use a separate column for each inner array element.

## Quoting and Escaping Rules
Quoting and escaping rules are essential when converting JSON to CSV. According to the [RFC 4180 specification](https://www.rfc-editor.org/rfc/rfc4180), CSV files should use double quotes to enclose fields that contain commas or other special characters. However, this can sometimes lead to issues when working with Excel or Google Sheets. For example, Excel may interpret double quotes as part of the field value, rather than as a quoting character. To avoid this issue, it's often helpful to use a tool like our [JSON formatter](/tools/json-formatter) to format the JSON data before converting it to CSV.

## Common mistakes
* Not handling nested objects and arrays correctly
* Not using quoting and escaping rules correctly
* Not accounting for commas inside fields
* Not using a reliable JSON to CSV converter
* Not understanding the differences between Excel and Google Sheets behavior
* Not checking for stable column ordering

## FAQ
### Is JSON a text format?
Yes, JSON is a text format that is completely language-independent. According to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), JSON is a lightweight data interchange format that is easy to read and write.
### How do I handle nested objects and arrays when converting JSON to CSV?
You can use a reliable JSON to CSV converter to handle nested objects and arrays. Alternatively, you can use a programming language like JavaScript to parse the JSON data and convert it to CSV manually.
### What is the difference between Excel and Google Sheets behavior when working with CSV files?
Excel and Google Sheets have different behavior when working with CSV files. For example, Excel may interpret double quotes as part of the field value, rather than as a quoting character. To avoid this issue, it's often helpful to use a tool like our [JSON minifier](/tools/json-minifier) to minify the JSON data before converting it to CSV.
### How do I ensure stable column ordering when converting JSON to CSV?
You can ensure stable column ordering by using a reliable JSON to CSV converter. Alternatively, you can use a programming language like JavaScript to parse the JSON data and convert it to CSV manually, using a consistent column ordering.
### Can I use a JSON to CSV converter to convert large JSON files?
Yes, you can use a JSON to CSV converter to convert large JSON files. However, it's often helpful to use a tool like our JSON formatter to format the JSON data before converting it to CSV, to ensure that the conversion process is efficient and accurate.
### How do I handle commas inside fields when converting JSON to CSV?
You can handle commas inside fields by using quoting and escaping rules correctly. According to the [RFC 4180 specification](https://www.rfc-editor.org/rfc/rfc4180), CSV files should use double quotes to enclose fields that contain commas or other special characters.

## Wrapping up
In conclusion, converting JSON to CSV can be a complex process, especially when dealing with nested objects and arrays. By using a reliable JSON to CSV converter and understanding the quoting and escaping rules, you can ensure that your data is converted correctly and efficiently. Additionally, being aware of the differences between Excel and Google Sheets behavior, as well as the importance of stable column ordering, can help you to avoid common mistakes and ensure accurate data analysis.
