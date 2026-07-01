---
title: "URL encoding: the rules every API consumer gets wrong"
description: "I've lost count of the number of times I've seen URL encoding issues cause problems in production code. Just the other day, I was debugging an API integration that was failing beca"
date: "2026-07-01"
author: "Shubham Singla"
tags: ["urls", "api", "http"]
---

I've lost count of the number of times I've seen URL encoding issues cause problems in production code. Just the other day, I was debugging an API integration that was failing because of a misplaced plus sign in a query string. The API consumer was using a library that was double-encoding the URL, resulting in a percent-encoded plus sign that the server couldn't handle. It took a while to track down the issue, but it highlighted the importance of understanding the rules of URL encoding. A good URL encoder can help avoid these kinds of problems.

## TL;DR
* URL encoding is a critical aspect of API consumption, but it's often misunderstood
* `encodeURI` and `encodeURIComponent` are not interchangeable, and using the wrong one can cause issues
* Reserved characters in URLs must be percent-encoded, but what counts as a reserved character can vary depending on the context
* Double-encoding can lead to disasters, and it's essential to understand how to avoid it
* Sometimes, the server is at fault, and it's not just a client-side issue

## Introduction to URL encoding
URL encoding is the process of converting characters in a URL to a format that can be safely transmitted over the internet. It's a critical aspect of API consumption, as it ensures that data is transmitted correctly and securely. However, URL encoding is often misunderstood, and using the wrong encoding scheme can cause issues. For example, using `encodeURI` instead of `encodeURIComponent` can result in incorrect encoding, leading to errors on the server-side.

## Understanding encodeURI and encodeURIComponent
`encodeURI` and `encodeURIComponent` are two commonly used functions in JavaScript for URL encoding. However, they serve different purposes and should not be used interchangeably. `encodeURI` is used to encode an entire URL, while `encodeURIComponent` is used to encode a component of a URL, such as a query string or a fragment. Using `encodeURI` on a query string can result in incorrect encoding, as it will not encode reserved characters such as `&` and `=`. On the other hand, using `encodeURIComponent` on an entire URL can result in double-encoding, which can lead to disasters. 
```javascript
const uri = 'https://example.com/path?query=string';
const encodedUri = encodeURI(uri);
console.log(encodedUri); // outputs: https://example.com/path?query=string

const queryString = 'query=string';
const encodedQueryString = encodeURIComponent(queryString);
console.log(encodedQueryString); // outputs: query%3Dstring
```
### Reserved characters in URLs
Reserved characters in URLs are characters that have special meaning in the context of a URL. These characters include `&`, `=`, `+`, and `%`, among others. When using a URL encoder, it's essential to understand what counts as a reserved character, as this can vary depending on the context. For example, in a query string, `&` and `=` are reserved characters, while in a fragment, `#` is a reserved character.

## Using a URL encoder
A good URL encoder can help avoid the pitfalls of URL encoding. When using a URL encoder, it's essential to understand the context in which the encoding is being used. For example, when encoding a query string, it's essential to use a function like `encodeURIComponent` to ensure that reserved characters are correctly encoded. You can paste it into our [JSON formatter](/tools/url-encode-decode) to see the encoded result. Additionally, when working with Base64 encoding, it's essential to use a function like the one provided in the [Base64 encode decode tool](/tools/base64-encode-decode) to ensure that the encoding is correct.

## Percent-encoded plus sign and %20
One common issue with URL encoding is the percent-encoded plus sign. When a plus sign is used in a query string, it can be interpreted as a space, which can lead to issues on the server-side. To avoid this, it's essential to percent-encode the plus sign using `%2B`. Similarly, when using a space in a query string, it's essential to percent-encode it using `%20`. 
```javascript
const queryString = 'query=string+with+spaces';
const encodedQueryString = encodeURIComponent(queryString);
console.log(encodedQueryString); // outputs: query%3Dstring%2Bwith%2Bspaces
```
### Double-encoding disasters
Double-encoding can lead to disasters, as it can result in incorrect encoding and decoding of data. When using a URL encoder, it's essential to avoid double-encoding, as this can lead to issues on the server-side. To avoid double-encoding, it's essential to understand the context in which the encoding is being used and to use the correct encoding scheme.

## Common mistakes
* Using `encodeURI` instead of `encodeURIComponent` on a query string
* Not percent-encoding reserved characters in a URL
* Double-encoding data, resulting in incorrect encoding and decoding
* Not using a URL encoder to encode data, resulting in incorrect encoding
* Using the wrong encoding scheme for the context, resulting in incorrect encoding
* Not testing the encoding and decoding of data, resulting in issues on the server-side

## FAQ
### Is Base64 encryption?
Base64 is not encryption, but rather a method of encoding binary data as text. It's commonly used in APIs to transmit binary data, such as images, as text.
### What is the difference between encodeURI and encodeURIComponent?
`encodeURI` is used to encode an entire URL, while `encodeURIComponent` is used to encode a component of a URL, such as a query string or a fragment.
### How do I avoid double-encoding?
To avoid double-encoding, it's essential to understand the context in which the encoding is being used and to use the correct encoding scheme. You can use a URL encoder, such as the one provided in the [URL encode decode tool](/tools/url-encode-decode), to ensure that data is correctly encoded.
### What is the purpose of percent-encoding?
Percent-encoding is used to encode characters in a URL that have special meaning, such as `&` and `=`, to ensure that they are transmitted correctly.
### Can I use HTML escape to encode URLs?
No, HTML escape is not suitable for encoding URLs. Instead, you can use a URL encoder, such as the one provided in the [URL encode decode tool](/tools/url-encode-decode), or the [HTML escape unescape tool](/tools/html-escape-unescape) for HTML encoding.
### What is the specification for URL encoding?
The specification for URL encoding is provided in the [URL specification](https://url.spec.whatwg.org/) and the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) for `encodeURIComponent`.

## Wrapping up
In conclusion, URL encoding is a critical aspect of API consumption, but it's often misunderstood. Using the wrong encoding scheme or not percent-encoding reserved characters can lead to issues on the server-side. By understanding the rules of URL encoding and using a good URL encoder, developers can avoid common mistakes and ensure that their APIs are secure and reliable.
