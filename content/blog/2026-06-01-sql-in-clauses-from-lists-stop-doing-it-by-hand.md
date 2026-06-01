---
title: "SQL IN clauses from lists: stop doing it by hand"
description: "I've lost count of how many times I've seen developers manually construct SQL IN clauses from lists of values. It's a common task, but doing it by hand is error-prone and can lead"
date: "2026-06-01"
author: "Shubham Singla"
tags: ["sql", "databases"]
---

I've lost count of how many times I've seen developers manually construct SQL IN clauses from lists of values. It's a common task, but doing it by hand is error-prone and can lead to security vulnerabilities. For instance, consider a simple query that checks if a user is in a list of allowed users: `SELECT * FROM users WHERE id IN (1, 2, 3, 4, 5)`. This works for small lists, but what about when the list grows to hundreds or thousands of values. Manually quoting and formatting the list becomes impractical. 

When working with larger lists, it's essential to consider the SQL IN clause parameter limits across different databases. These limits can vary significantly, and exceeding them can result in errors. Furthermore, the distinction between string and number quoting can also lead to issues if not handled correctly. 

## TL;DR
* SQL IN clauses can be constructed from lists, but manual construction is error-prone and insecure
* Different databases have varying parameter limits for SQL IN clauses
* String and number quoting must be handled correctly to avoid errors
* Alternatives like temp tables and VALUES can be used instead of SQL IN clauses

## Introduction to SQL IN Clauses
The SQL IN clause is used to filter results based on a list of values. It's a powerful tool, but its usage can be tricky, especially when dealing with large lists. One common issue is the parameter limit, which varies across databases. For example, PostgreSQL has a limit of 32767 parameters per query, as stated in the [PostgreSQL documentation](https://www.postgresql.org/docs/current/functions-comparisons.html). 

## Constructing SQL IN Clauses
When constructing SQL IN clauses from lists, it's essential to handle quoting correctly. Strings must be quoted, while numbers should not be. Incorrect quoting can lead to errors or security vulnerabilities. For instance, consider the following incorrect query: `SELECT * FROM users WHERE name IN ('1', '2', '3')`. In this example, the numbers are quoted, which can lead to incorrect results. 

## Alternatives to SQL IN Clauses
Instead of using SQL IN clauses, you can use temp tables or the VALUES clause. Temp tables are useful when dealing with large lists, as they can be indexed and joined like regular tables. The VALUES clause, on the other hand, allows you to specify a list of values directly in the query. For example: 
```sql
SELECT * FROM users
WHERE id IN (VALUES (1), (2), (3), (4), (5));
```
This approach can be more readable and maintainable than constructing a large SQL IN clause.

## Working with Large Lists
When working with large lists, it's often more practical to use a tool to generate the SQL IN clause. For instance, you can paste your list into our [tools/text-to-sql](/tools/text-to-sql) tool to generate a correctly formatted SQL IN clause. Additionally, you can use the [tools/line-sorter](/tools/line-sorter) tool to sort your list before constructing the SQL IN clause.

## Common mistakes
* Incorrect quoting: quoting numbers or failing to quote strings
* Exceeding parameter limits: not checking the parameter limit for the specific database
* Insecure construction: constructing SQL IN clauses from user input without proper sanitization
* Poor performance: using SQL IN clauses with large lists without indexing or optimizing the query
* Incorrect data types: using incorrect data types for the values in the SQL IN clause

## FAQ
### Is it possible to use SQL IN clauses with subqueries
Yes, it is possible to use SQL IN clauses with subqueries. However, this can lead to performance issues if not optimized correctly. It's essential to ensure that the subquery is indexed and that the SQL IN clause is constructed correctly.

### How do I handle large lists in SQL IN clauses
When dealing with large lists, it's often more practical to use temp tables or the VALUES clause. These approaches can be more readable and maintainable than constructing a large SQL IN clause.

### Can I use SQL IN clauses with user input
No, it's not recommended to use SQL IN clauses with user input without proper sanitization. This can lead to security vulnerabilities, such as SQL injection attacks.

### What are the parameter limits for SQL IN clauses in different databases
The parameter limits for SQL IN clauses vary across databases. For example, PostgreSQL has a limit of 32767 parameters per query, while other databases may have different limits. It's essential to check the documentation for the specific database being used.

### How do I optimize SQL IN clauses for performance
To optimize SQL IN clauses for performance, ensure that the values in the clause are indexed and that the query is constructed correctly. Additionally, consider using temp tables or the VALUES clause instead of SQL IN clauses for large lists.

## Wrapping up
In conclusion, constructing SQL IN clauses from lists can be error-prone and insecure if done manually. It's essential to consider the parameter limits across different databases and to handle quoting correctly. By using alternatives like temp tables and VALUES, and by optimizing queries for performance, developers can write more efficient and secure code.
