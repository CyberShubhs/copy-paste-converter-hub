---
title: "SQL IN clauses from lists: stop doing it by hand"
description: "I've worked on numerous projects that involved querying databases, and one common task that often comes up is using SQL IN clauses to filter data based on a list of values. For exa"
date: "2026-07-09"
author: "Shubham Singla"
tags: ["sql", "databases"]
---

I've worked on numerous projects that involved querying databases, and one common task that often comes up is using SQL IN clauses to filter data based on a list of values. For example, suppose we have a table of users and we want to retrieve all users who are from a specific list of countries. We might write a query like this: 
```sql
SELECT * FROM users WHERE country IN ('USA', 'Canada', 'Mexico');
```
This works fine for small lists, but what if we have a large list of countries? Writing out each country by hand can be tedious and error-prone. Moreover, different databases have different limits on the number of parameters we can pass to an IN clause. 

## TL;DR
* Using SQL IN clauses with large lists can be problematic due to parameter limits and quoting issues
* Temp tables and VALUES clauses can be used as alternatives to IN clauses
* Different databases have different limits and behaviors when it comes to IN clauses
* Using the right tools and techniques can simplify working with SQL IN clauses

## Introduction to SQL IN clauses
The SQL IN clause is used to filter data based on a list of values. It's a powerful tool, but it can also be tricky to work with, especially when dealing with large lists or different data types. One common issue is quoting - when working with strings, we need to quote each value, but when working with numbers, we don't. For example:
```sql
SELECT * FROM users WHERE id IN (1, 2, 3);  // numbers, no quotes needed
SELECT * FROM users WHERE name IN ('John', 'Jane', 'Bob');  // strings, quotes needed
```
As we can see, the syntax for SQL IN clauses is straightforward, but the details can be tricky.

## Working with large lists
When working with large lists, it's often better to use a temp table or a VALUES clause instead of an IN clause. This is because many databases have limits on the number of parameters that can be passed to an IN clause. For example, in PostgreSQL, the limit is around 1000 parameters, as [documented in the PostgreSQL documentation](https://www.postgresql.org/docs/current/functions-comparisons.html). If we try to pass more than this limit, we'll get an error. 
```sql
SELECT * FROM users WHERE id IN (/* more than 1000 values */);  // error
```
To avoid this issue, we can use a temp table to store our list of values, and then join this table with our main table. 

## Using temp tables and VALUES clauses
Temp tables and VALUES clauses can be used as alternatives to IN clauses. For example, we can create a temp table with our list of values, and then join this table with our main table:
```sql
CREATE TEMP TABLE country_list (country VARCHAR(50));
INSERT INTO country_list (country) VALUES ('USA'), ('Canada'), ('Mexico');
SELECT * FROM users WHERE country IN (SELECT country FROM country_list);
```
Alternatively, we can use a VALUES clause to specify our list of values directly in the query:
```sql
SELECT * FROM users WHERE country IN (VALUES ('USA'), ('Canada'), ('Mexico'));
```
Both of these approaches can be more efficient and flexible than using an IN clause, especially when working with large lists.

## Common mistakes
Here are some common mistakes to watch out for when working with SQL IN clauses:
* Not quoting string values correctly
* Trying to pass too many parameters to an IN clause
* Not handling NULL values correctly
* Using IN clauses with very large lists, which can be slow and inefficient
* Not checking the database's limits and behaviors when it comes to IN clauses
To avoid these mistakes, it's a good idea to use tools and techniques that can simplify working with SQL IN clauses, such as the [line sorter tool](/tools/line-sorter) to sort and format our lists of values.

## FAQ
### What is the limit on the number of parameters that can be passed to an IN clause?
The limit on the number of parameters that can be passed to an IN clause varies depending on the database. For example, in PostgreSQL, the limit is around 1000 parameters. To avoid hitting this limit, it's often better to use a temp table or a VALUES clause instead of an IN clause.
### How do I quote string values correctly in an IN clause?
String values should be quoted using single quotes, like this: `'USA'`. 
### Can I use an IN clause with a large list of values?
While it's technically possible to use an IN clause with a large list of values, it's often not the most efficient or effective approach. Instead, consider using a temp table or a VALUES clause to simplify your query and avoid hitting the database's parameter limit.
### How do I handle NULL values in an IN clause?
When working with NULL values in an IN clause, it's essential to use the `IS NULL` or `IS NOT NULL` syntax to filter out NULL values correctly. For example: `SELECT * FROM users WHERE country IN ('USA', 'Canada', 'Mexico') OR country IS NULL;`
### Can I use the ConverterHub tools to simplify working with SQL IN clauses?
Yes, ConverterHub offers a range of tools that can help simplify working with SQL IN clauses, including the [text to SQL tool](/tools/text-to-sql) to format and optimize our queries.

## Wrapping up
In conclusion, working with SQL IN clauses can be tricky, especially when dealing with large lists or different data types. By using the right tools and techniques, such as temp tables and VALUES clauses, we can simplify our queries and avoid common mistakes. Whether we're working with PostgreSQL, MySQL, or another database, it's essential to understand the limits and behaviors of our database when it comes to IN clauses, and to use the right approach to get the job done efficiently and effectively.
