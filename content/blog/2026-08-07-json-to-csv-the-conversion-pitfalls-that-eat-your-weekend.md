---
title: "JSON to CSV: the conversion pitfalls that eat your weekend"
description: "I've spent countless weekends debugging issues that arose from converting JSON to CSV. One particular instance that comes to mind is when I was working on a project that involved i"
date: "2026-08-07"
author: "Shubham Singla"
tags: ["json", "csv", "data"]
---

I've spent countless weekends debugging issues that arose from converting JSON to CSV. One particular instance that comes to mind is when I was working on a project that involved importing data from a JSON file into a CSV file for further analysis. The JSON file contained nested objects and arrays, which made the conversion process more complex. After spending hours trying to resolve the issues, I realized that the problem lay in the way the JSON data was being converted to CSV. The nested objects and arrays were not being handled correctly, resulting in a malformed CSV file. This experience taught me the importance of using a reliable JSON to CSV converter to avoid such pitfalls.

## TL;DR
* JSON to CSV conversion can be tricky due to nested objects and arrays
* Commas inside fields and quoting and escaping rules can cause issues
* Using a reliable JSON to CSV converter can help avoid common mistakes
* Understanding the differences between Excel and Sheets behavior is crucial
* Stable column ordering is essential for accurate data analysis

## Introduction to JSON to CSV Conversion
JSON (JavaScript Object Notation) is a lightweight data interchange format that is widely used for exchanging data between web servers and web applications. CSV (Comma Separated Values) is a file format that is commonly used for importing and exporting data. Converting JSON to CSV is a common task, but it can be challenging due to the complexities of the JSON format. One of the main challenges is handling nested objects and arrays. For example, consider the following JSON data:
```json
{
  "name": "John",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY"
  },
  "interests": ["reading", "hiking", "coding"]
}
```
This data contains a nested object (address) and an array (interests), which can be difficult to convert to CSV.

## Handling Nested Objects and Arrays
To handle nested objects and arrays, we need to use a JSON to CSV converter that can recursively traverse the JSON data and extract the relevant information. We can use a library like [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) to parse the JSON data and then use a CSV library to generate the CSV file. For example:
```javascript
const jsonData = {
  "name": "John",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY"
  },
  "interests": ["reading", "hiking", "coding"]
};

const csvData = [];
Object.keys(jsonData).forEach(key => {
  if (typeof jsonData[key] === 'object') {
    Object.keys(jsonData[key]).forEach(subKey => {
      csvData.push(`${key}.${subKey},${jsonData[key][subKey]}`);
    });
  } else {
    csvData.push(`${key},${jsonData[key]}`);
  }
});
```
This code recursively traverses the JSON data and extracts the relevant information, which can then be used to generate the CSV file.

## Commas Inside Fields and Quoting and Escaping Rules
Another challenge when converting JSON to CSV is handling commas inside fields and quoting and escaping rules. According to the [RFC 4180](https://www.rfc-editor.org/rfc/rfc4180) specification, commas inside fields should be enclosed in double quotes, and double quotes inside fields should be escaped with another double quote. For example:
```csv
"Name","Address","Interests"
"John","123 Main St, New York, NY","reading, hiking, coding"
```
This can be achieved by using a CSV library that can handle quoting and escaping rules correctly.

## Using a Reliable JSON to CSV Converter
To avoid common mistakes when converting JSON to CSV, it's essential to use a reliable JSON to CSV converter. We can paste the JSON data into our [JSON formatter](/tools/json-to-csv) to format the data and then convert it to CSV. This ensures that the data is correctly formatted and that nested objects and arrays are handled correctly.

## Differences Between Excel and Sheets Behavior
When importing CSV files into Excel or Sheets, it's essential to understand the differences between their behavior. Excel uses a comma as the default delimiter, while Sheets uses a comma or a semicolon, depending on the locale. Additionally, Excel has a limit of 256 columns, while Sheets has a limit of 18,278 columns. Understanding these differences can help avoid issues when importing CSV files.

## Common mistakes
* Not handling nested objects and arrays correctly
* Not quoting and escaping fields correctly
* Not using a reliable JSON to CSV converter
* Not understanding the differences between Excel and Sheets behavior
* Not checking for stable column ordering

## FAQ
### What is the difference between a JSON object and a JSON array?
A JSON object is a collection of key-value pairs, while a JSON array is a collection of values. For example:
```json
{
  "name": "John",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY"
  }
}
```
is a JSON object, while:
```json
[
  "reading",
  "hiking",
  "coding"
]
```
is a JSON array.
### How do I handle commas inside fields?
Commas inside fields should be enclosed in double quotes, and double quotes inside fields should be escaped with another double quote. For example:
```csv
"Name","Address","Interests"
"John","123 Main St, New York, NY","reading, hiking, coding"
```
### What is the purpose of the BOM and CRLF in CSV files?
The BOM (Byte Order Mark) is a Unicode character that indicates the byte order of a text file. The CRLF (Carriage Return Line Feed) is a character sequence that indicates the end of a line. Both are used to ensure that CSV files are correctly formatted and can be imported into Excel or Sheets.
### Can I use a JSON minifier to compress my JSON data?
Yes, you can use a JSON minifier like the one found at [/tools/json-minifier](/tools/json-minifier) to compress your JSON data. However, be aware that minifying JSON data can make it more difficult to read and debug.
### How do I ensure stable column ordering in my CSV file?
To ensure stable column ordering, you should use a JSON to CSV converter that can preserve the order of the columns. You can also use a CSV library to generate the CSV file and specify the column order explicitly.

## Wrapping up
In conclusion, converting JSON to CSV can be a challenging task due to the complexities of the JSON format. However, by using a reliable JSON to CSV converter and understanding the differences between Excel and Sheets behavior, we can avoid common mistakes and ensure that our CSV files are correctly formatted and stable. Additionally, using tools like the JSON formatter and minifier can help us to format and compress our JSON data, making it easier to work with.
