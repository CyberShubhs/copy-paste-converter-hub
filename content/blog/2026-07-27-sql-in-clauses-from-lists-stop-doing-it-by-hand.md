---
title: "SQL IN clauses from lists: stop doing it by hand"
description: "I've lost count of how many times I've seen developers manually crafting SQL IN clauses from lists of values. It's a tedious process that's prone to errors, especially when dealing"
date: "2026-07-27"
author: "Shubham Singla"
tags: ["sql", "databases"]
---

I've lost count of how many times I've seen developers manually crafting SQL IN clauses from lists of values. It's a tedious process that's prone to errors, especially when dealing with large lists or values that require quoting. For instance, suppose you have a list of user IDs and you want to fetch their corresponding records from a database table. You might end up writing a query like this: `SELECT * FROM users WHERE id IN (1, 2, 3, 4, 5)`. This approach works fine for small lists, but it becomes cumbersome when dealing with hundreds or thousands of values.

## TL;DR
* The SQL IN clause can be used to filter records based on a list of values
* Manually crafting IN clauses from lists can lead to errors and inefficiencies
* There are alternative approaches, such as using temp tables or the VALUES clause, that can simplify the process
* Different databases have varying limits on the number of parameters that can be used in an IN clause
* Using the wrong type of quoting for values can lead to errors or security vulnerabilities

## Introduction to SQL IN clauses
The SQL IN clause is a powerful tool for filtering records based on a list of values. It's commonly used in scenarios where you need to retrieve records that match one of several values. For example, suppose you have an e-commerce database and you want to fetch all orders that belong to a specific set of customers. You can use an IN clause to filter the orders based on the customer IDs. However, as the list of values grows, manually crafting the IN clause can become impractical.

## Crafting IN clauses manually
When crafting IN clauses manually, it's essential to ensure that the values are properly quoted. For string values, this typically means enclosing them in single quotes. For example: `SELECT * FROM users WHERE name IN ('John', 'Jane', 'Bob')`. However, if you're dealing with numeric values, quoting is not necessary: `SELECT * FROM users WHERE id IN (1, 2, 3)`. It's also important to note that different databases have varying limits on the number of parameters that can be used in an IN clause. For instance, PostgreSQL has a limit of 32767 parameters, as documented in the [PostgreSQL documentation](https://www.postgresql.org/docs/current/functions-comparisons.html).

### Using the VALUES clause
One alternative to manually crafting IN clauses is to use the VALUES clause. This allows you to specify a list of values as a table, which can then be used in a query. For example: `SELECT * FROM users WHERE id IN (VALUES (1), (2), (3))`. This approach can be more readable and efficient than manually crafting an IN clause, especially when dealing with large lists of values.

## Common mistakes
* Using the wrong type of quoting for values, leading to errors or security vulnerabilities
* Exceeding the parameter limit for the IN clause, resulting in a syntax error
* Failing to properly escape special characters in string values, leading to errors or unexpected behavior
* Using an IN clause with a large list of values, leading to performance issues
* Not considering the data type of the values when crafting the IN clause, leading to type mismatches or errors
* Not using parameterized queries, making the code vulnerable to SQL injection attacks

## Working with large lists of values
When dealing with large lists of values, it's often more efficient to use a temp table or a join instead of an IN clause. For example, you can create a temp table with the list of values and then join it with the main table: `CREATE TEMP TABLE ids (id INT); INSERT INTO ids (id) VALUES (1), (2), (3); SELECT * FROM users WHERE id IN (SELECT id FROM ids)`. Alternatively, you can use a tool like the [line sorter](/tools/line-sorter) to sort and format your list of values, making it easier to work with.

## Alternative approaches
In some cases, it may be more efficient to use a different approach altogether. For instance, if you have a large list of values and you need to perform a complex query, it may be better to use a programming language to generate the query dynamically. You can use a tool like the [text to SQL converter](/tools/text-to-sql) to help with this process. By generating the query dynamically, you can avoid the limitations of the IN clause and create a more efficient query.

## FAQ
### Is it possible to use an IN clause with a subquery?
Yes, it is possible to use an IN clause with a subquery. This can be useful when you need to filter records based on a complex condition that involves another table. For example: `SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 100)`.

### Can I use an IN clause with a join?
Yes, you can use an IN clause with a join. This can be useful when you need to filter records based on a condition that involves another table. For example: `SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 100) AND country = 'USA'`.

### How do I optimize an IN clause for performance?
To optimize an IN clause for performance, you can consider using an index on the column being filtered, or using a join instead of an IN clause. You can also consider using a temp table or a common table expression (CTE) to simplify the query and improve performance.

### Can I use an IN clause with a parameterized query?
Yes, you can use an IN clause with a parameterized query. This can help improve security by reducing the risk of SQL injection attacks. For example: `SELECT * FROM users WHERE id IN (@ids)`.

### Are there any limitations to using an IN clause?
Yes, there are limitations to using an IN clause. For example, different databases have varying limits on the number of parameters that can be used in an IN clause. Additionally, using an IN clause with a large list of values can lead to performance issues.

## Wrapping up
In conclusion, while the SQL IN clause can be a powerful tool for filtering records, it's essential to use it judiciously and consider alternative approaches when dealing with large lists of values or complex queries. By understanding the limitations and potential pitfalls of the IN clause, you can write more efficient and effective SQL code.
