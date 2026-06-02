---
title: "UUID v4 vs UUID v7: which one should you use in 2026"
description: "When working with unique identifiers in applications, developers often reach for UUIDs. I've encountered situations where the choice between UUID v4 and UUID v7 was not clear-cut."
date: "2026-06-02"
author: "Shubham Singla"
tags: ["uuid", "database", "ids"]
---

When working with unique identifiers in applications, developers often reach for UUIDs. I've encountered situations where the choice between UUID v4 and UUID v7 was not clear-cut. For instance, in a recent project, we needed to generate identifiers for a large number of records that would be stored in a Postgres database. We opted for UUID v4, but later realized that UUID v7 might have been a better choice due to its time-ordered nature. This experience prompted me to explore the differences between UUID v4 and UUID v7, and how they impact application design.

## TL;DR
* UUID v4 is a random identifier, while UUID v7 is time-ordered
* B-tree index behavior in Postgres and MySQL differs between UUID v4 and UUID v7
* ULIDs exist as an alternative to UUIDs, offering a more compact representation
* The choice between UUID v4 and UUID v7 depends on the specific use case and requirements
* Using a UUID generator can simplify the process of generating identifiers

## Introduction to UUIDs
UUIDs, or universally unique identifiers, are 128-bit numbers used to identify information in computer systems. They are often generated using a UUID generator, which can produce different versions of UUIDs, including v4 and v7. UUID v4 is a random identifier, while UUID v7 is time-ordered, meaning that newer identifiers are guaranteed to be larger than older ones. This difference has significant implications for application design, particularly when it comes to database indexing.

## UUID v4 and v7 in Database Indexing
When using UUIDs as primary keys in a database, the choice between v4 and v7 can affect the performance of B-tree indexes. In Postgres, for example, UUID v4 can lead to poor index locality, resulting in slower query performance. On the other hand, UUID v7 can take advantage of the time-ordered nature of the identifiers to improve index locality. In MySQL, the situation is reversed, with UUID v4 performing better than UUID v7. To illustrate this, consider the following example:
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(50)
);
```
If we use UUID v4 as the primary key, the index locality may suffer, leading to slower query performance. However, if we use UUID v7, the time-ordered nature of the identifiers can improve index locality, resulting in faster queries.

## ULIDs as an Alternative to UUIDs
ULIDs, or universally unique lexically sortable identifiers, are an alternative to UUIDs that offer a more compact representation. They are designed to be sortable and can be used as a replacement for UUIDs in many cases. ULIDs are particularly useful when working with databases that have strict storage limits or when dealing with large amounts of data. To generate a ULID, you can use a library or implement the algorithm yourself:
```javascript
function generateULID() {
    const timestamp = Math.floor(Date.now() / 1000);
    const randomness = crypto.getRandomValues(new Uint8Array(16));
    return `${timestamp.toString(36)}-${randomness.toString('hex')}`;
}
```
Note that ULIDs are not universally unique in the same way that UUIDs are, but they can still provide a high degree of uniqueness.

## Using a UUID Generator
When working with UUIDs, it's often convenient to use a UUID generator to simplify the process of generating identifiers. For example, you can use our [UUID generator](/tools/uuid-generator) to generate UUID v4 or v7 identifiers. You can then paste it into our JSON formatter to work with the generated identifier. Using a UUID generator can save time and reduce errors, making it a valuable tool in any developer's toolkit.

## B-Tree Index Behavior
B-tree indexes are a type of database index that can take advantage of the time-ordered nature of UUID v7 identifiers. In Postgres, for example, B-tree indexes can use the time-ordered nature of UUID v7 to improve index locality, resulting in faster query performance. To illustrate this, consider the following example:
```sql
CREATE INDEX users_id_index ON users (id);
```
If we use UUID v7 as the primary key, the B-tree index can take advantage of the time-ordered nature of the identifiers to improve index locality.

## Common mistakes
* Using UUID v4 as the primary key in a database without considering the implications for index locality
* Failing to use a UUID generator to simplify the process of generating identifiers
* Not considering the trade-offs between UUID v4 and UUID v7 when designing an application
* Using ULIDs without understanding the limitations of their uniqueness
* Not testing the performance of different UUID versions in a database

## FAQ
### Is UUID v4 suitable for all use cases?
UUID v4 is suitable for many use cases, but it may not be the best choice when working with databases that require time-ordered identifiers. In such cases, UUID v7 may be a better option.
### What is the difference between UUID v4 and UUID v7?
UUID v4 is a random identifier, while UUID v7 is time-ordered, meaning that newer identifiers are guaranteed to be larger than older ones.
### Can I use ULIDs as a replacement for UUIDs?
ULIDs can be used as a replacement for UUIDs in many cases, but they are not universally unique in the same way that UUIDs are.
### How do I generate a UUID v7 identifier?
You can generate a UUID v7 identifier using a library or by implementing the algorithm yourself, as described in [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562).
### Are UUIDs cryptographically secure?
UUIDs are not cryptographically secure, as they are designed to be unique identifiers rather than secure tokens. For secure tokens, consider using a cryptographically secure pseudo-random number generator, such as the one provided by the [Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID).

## Wrapping up
In conclusion, the choice between UUID v4 and UUID v7 depends on the specific use case and requirements. By understanding the differences between these two versions and considering the implications for application design, developers can make informed decisions about which UUID version to use. Additionally, using a UUID generator and considering alternative identifiers like ULIDs can simplify the process of working with unique identifiers.
