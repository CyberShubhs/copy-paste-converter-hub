---
title: "URL encoding: the rules every API consumer gets wrong"
description: "I've lost count of the number of times I've seen URL encoding issues cause problems in APIs. A recent example that comes to mind is when a colleague was trying to send a GET reques"
date: "2026-06-25"
author: "Shubham Singla"
tags: ["urls", "api", "http"]
---

I've lost count of the number of times I've seen URL encoding issues cause problems in APIs. A recent example that comes to mind is when a colleague was trying to send a GET request to a server with a query parameter that contained a space. The request was failing, and it took us a while to figure out that the issue was due to the space not being properly encoded. We were using the `encodeURI` function, which doesn't encode spaces. Once we switched to `encodeURIComponent`, the issue was resolved. This experience made me realize how important it is to understand the rules of URL encoding, especially when working with APIs.

## TL;DR
* URL encoding is a critical aspect of working with APIs
* `encodeURI` and `encodeURIComponent` are not interchangeable
* Reserved characters must be properly encoded
* Double encoding can lead to disasters
* Sometimes, the server is at fault, not the client

## Introduction to URL Encoding
URL encoding is the process of converting characters that are not allowed in URLs into a format that can be safely transmitted. This is typically done using a URL encoder, which replaces reserved characters with a percent sign followed by their ASCII code. For example, the space character is encoded as `%20`. The `encodeURIComponent` function in JavaScript is a commonly used URL encoder.

### Reserved Characters
Reserved characters are those that have special meanings in URLs, such as `&`, `?`, and `#`. These characters must be properly encoded to avoid conflicts. For example, if you're sending a query parameter that contains an `&` character, it must be encoded as `%26` to avoid being interpreted as a parameter separator.

## Using a URL Encoder
A good URL encoder will take care of encoding reserved characters for you. For example, if you're using JavaScript, you can use the `encodeURIComponent` function to encode a string. Here's an example:
```javascript
const queryString = "Hello World";
const encodedQueryString = encodeURIComponent(queryString);
console.log(encodedQueryString); // Output: Hello%20World
```
You can then paste it into our [URL encoder](/tools/url-encode-decode) to verify that it's correctly encoded.

## Percent-Encoded Plus Sign
One common issue with URL encoding is the percent-encoded plus sign. The `+` character is often used to represent spaces in URLs, but it's not the same as the `%20` encoding. If you're using a URL encoder, make sure it's configured to use `%20` instead of `+` for spaces.

## Double Encoding Disasters
Double encoding occurs when a string is encoded twice, resulting in a mess of percent signs and characters. This can happen when a URL is encoded on the client-side and then again on the server-side. To avoid double encoding, make sure you're only encoding the string once, and that you're using the correct encoding function. For example, if you're using JavaScript, use `encodeURIComponent` instead of `encodeURI`.

## Common mistakes
* Using `encodeURI` instead of `encodeURIComponent`
* Not encoding reserved characters
* Using the `+` character to represent spaces instead of `%20`
* Double encoding strings
* Not verifying that the URL is correctly encoded before sending it
* Assuming that the server will handle encoding for you

## FAQ
### Is Base64 encryption?
No, Base64 is not encryption. It's a way of encoding binary data as text, but it doesn't provide any security guarantees. If you need to encrypt data, you should use a proper encryption algorithm, such as AES. You can use our [Base64 encoder](/tools/base64-encode-decode) to convert binary data to Base64.
### What is the difference between encodeURI and encodeURIComponent?
The main difference between `encodeURI` and `encodeURIComponent` is that `encodeURI` doesn't encode reserved characters, while `encodeURIComponent` does. This means that `encodeURIComponent` is generally safer to use, especially when working with APIs. You can find more information about `encodeURIComponent` on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).
### How do I verify that a URL is correctly encoded?
You can use a URL decoder to verify that a URL is correctly encoded. Our [URL decoder](/tools/url-encode-decode) can help you with this. You can also use a tool like [HTML escape](/tools/html-escape-unescape) to verify that any HTML characters are correctly escaped.
### Can I use a URL encoder to encode HTML characters?
No, you should not use a URL encoder to encode HTML characters. Instead, use a tool like [HTML escape](/tools/html-escape-unescape) to escape any HTML characters. This will ensure that your HTML is correctly formatted and won't cause any issues.
### What is the specification for URL encoding?
The specification for URL encoding is defined in the [URL specification](https://url.spec.whatwg.org/). This specification provides a detailed overview of how URLs should be encoded and decoded.

## Wrapping up
In conclusion, URL encoding is a critical aspect of working with APIs, and using a URL encoder is essential to ensure that your URLs are correctly formatted. By following the rules outlined in this post and using the right tools, you can avoid common mistakes and ensure that your APIs work as expected. For more information on URL encoding, you can refer to the [URL specification](https://url.spec.whatwg.org/).
