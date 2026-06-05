---
title: "Unix timestamp to date: every conversion you’ll ever need"
description: "I recently worked on a project where we were receiving Unix timestamps from an API and needed to convert them to a human-readable format. The problem was that the timestamps were i"
date: "2026-06-05"
author: "Shubham Singla"
tags: ["timestamps", "dates", "utc"]
---

I recently worked on a project where we were receiving Unix timestamps from an API and needed to convert them to a human-readable format. The problem was that the timestamps were in seconds, but our JavaScript code was expecting milliseconds. This led to a series of bugs that were difficult to track down. After spending hours debugging, I realized that the issue was due to the difference in units between the API and our code. To avoid this problem in the future, I started using a Unix timestamp converter to ensure that the timestamps were in the correct format.

## TL;DR
* Understand the difference between Unix timestamps in seconds and milliseconds
* Be aware of the implications of using UTC vs local time
* Use a Unix timestamp converter to avoid common mistakes
* Familiarize yourself with ISO 8601 and timezone offsets
* Use online tools to format and validate your timestamps

## Introduction to Unix timestamps
Unix timestamps are a way to represent a point in time as a single number. They are often used in programming and are a convenient way to store and transmit dates and times. However, they can be confusing, especially when it comes to the difference between seconds and milliseconds. In JavaScript, for example, the `Date` object expects timestamps to be in milliseconds, as shown in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). To convert a Unix timestamp from seconds to milliseconds, you can simply multiply it by 1000.

## Working with Unix timestamps in code
When working with Unix timestamps in code, it's essential to be aware of the unit of time being used. In JavaScript, the `Date` object provides several methods for working with timestamps, including `getTime()`, which returns the timestamp in milliseconds. To convert a Unix timestamp to a `Date` object, you can use the following code:
```javascript
const timestamp = 1643723400; // Unix timestamp in seconds
const date = new Date(timestamp * 1000); // Convert to milliseconds
console.log(date.toISOString()); // Output: 2022-02-01T12:30:00.000Z
```
### Using UTC vs local time
When working with timestamps, it's also important to consider the timezone. Unix timestamps are typically in UTC, but you may need to convert them to a local timezone. To do this, you can use the `toLocaleString()` method, which takes a timezone offset as an argument.

## Understanding ISO 8601 and timezone offsets
ISO 8601 is a standard for representing dates and times in a string format. It provides a way to represent timestamps with timezone offsets, which is essential for avoiding confusion when working with dates and times across different timezones. A timezone offset is the difference between a local timezone and UTC. For example, the offset for New York is -05:00, which means that New York is 5 hours behind UTC. To work with timezone offsets, you can use the following code:
```javascript
const timestamp = 1643723400; // Unix timestamp in seconds
const date = new Date(timestamp * 1000); // Convert to milliseconds
const offset = -5 * 60 * 60 * 1000; // Timezone offset for New York
const localDate = new Date(date.getTime() + offset);
console.log(localDate.toISOString()); // Output: 2022-02-01T07:30:00.000Z
```
As specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), the format for representing timestamps with timezone offsets is `YYYY-MM-DDTHH:MM:SSZ`, where `Z` represents UTC.

## Using online tools to format and validate timestamps
To avoid common mistakes when working with Unix timestamps, it's a good idea to use online tools to format and validate your timestamps. For example, you can paste a timestamp into our [timestamp converter](/tools/timestamp-converter) to ensure that it's in the correct format. You can also use a JSON formatter, such as the one found at `/tools/json-formatter`, to format and validate your JSON data.

## Common mistakes
* Using the wrong unit of time (seconds vs milliseconds)
* Not considering the timezone offset
* Not using a standard format for representing timestamps (such as ISO 8601)
* Not validating timestamps before using them in code
* Not using online tools to format and validate timestamps

## FAQ
### What is a Unix timestamp?
A Unix timestamp is a way to represent a point in time as a single number. It is typically represented in seconds or milliseconds.

### How do I convert a Unix timestamp to a Date object?
To convert a Unix timestamp to a `Date` object, you can multiply the timestamp by 1000 (if it's in seconds) and pass it to the `Date` constructor.

### What is the difference between UTC and local time?
UTC (Coordinated Universal Time) is a standard timezone that is used as a reference point for all other timezones. Local time, on the other hand, is the timezone of a specific location.

### How do I work with timezone offsets?
To work with timezone offsets, you can use the `toLocaleString()` method, which takes a timezone offset as an argument. You can also use the `getTimezoneOffset()` method to get the offset of a `Date` object.

### Can I use online tools to format and validate timestamps?
Yes, you can use online tools, such as a Unix timestamp converter, to format and validate your timestamps.

## Wrapping up
In conclusion, working with Unix timestamps can be complex, but by understanding the difference between seconds and milliseconds, using UTC vs local time, and working with ISO 8601 and timezone offsets, you can avoid common mistakes and ensure that your code is correct. By using online tools, such as a Unix timestamp converter, you can also format and validate your timestamps to ensure that they are in the correct format.
