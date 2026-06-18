---
title: "URL encoding: the rules every API consumer gets wrong"
description: "I've seen many cases where a simple API request fails due to incorrect URL encoding. For instance, when sending a GET request with a query parameter that contains special character"
date: "2026-06-18"
author: "Shubham Singla"
tags: ["urls", "api", "http"]
---

I've seen many cases where a simple API request fails due to incorrect URL encoding. For instance, when sending a GET request with a query parameter that contains special characters, the request may fail if the URL is not properly encoded. This can be frustrating, especially when the issue is not immediately apparent. To avoid such problems, it's essential to understand the rules of URL encoding and how to use a URL encoder correctly. A common point of confusion is the difference between encodeURI and encodeURIComponent, which are two popular functions used for URL encoding in JavaScript.

## TL;DR
* Use encodeURIComponent to encode URL components, such as query parameters and fragment identifiers
* Be aware of reserved characters, which have special meanings in URLs
* Avoid double-encoding, which can lead to incorrect URLs
* Use a URL encoder to ensure correct encoding of special characters
* Understand the difference between encodeURI and encodeURIComponent

## Introduction to URL Encoding
URL encoding is the process of converting characters that have special meanings in URLs into a format that can be safely transmitted over the internet. This is typically done using a URL encoder, which replaces special characters with their corresponding escape sequences. For example, the space character is often encoded as %20 or +, depending on the context. The + character is used to encode spaces in query strings, while %20 is used in the path component of a URL.

### Reserved Characters
Reserved characters are characters that have special meanings in URLs. These characters include !, *, ', (, ), ;, :, @, &, =, +, $, ,, /, ?, #, [ and ]. When using a URL encoder, it's essential to be aware of these characters and ensure they are properly encoded. For instance, the & character is used to separate query parameters, so it must be encoded if it appears in a query parameter value.

## Using a URL Encoder
When working with URLs, it's often necessary to use a URL encoder to ensure that special characters are properly encoded. This can be done using functions like encodeURIComponent, which encodes a string for use in a URL. For example:
```javascript
const encodedParam = encodeURIComponent('foo bar');
console.log(encodedParam); // Output: foo%20bar
```
In this example, the space character is encoded as %20, which is the correct encoding for a space in a URL path.

## EncodeURI vs encodeURIComponent
EncodeURI and encodeURIComponent are two popular functions used for URL encoding in JavaScript. However, they serve different purposes and should be used accordingly. EncodeURI is used to encode the entire URL, while encodeURIComponent is used to encode individual URL components, such as query parameters and fragment identifiers. When using encodeURI, be aware that it will not encode reserved characters that are meant to be used as part of the URL syntax. For example:
```javascript
const encodedUrl = encodeURI('https://example.com/foo bar');
console.log(encodedUrl); // Output: https://example.com/foo%20bar
```
In contrast, encodeURIComponent will encode all special characters, including reserved characters:
```javascript
const encodedParam = encodeURIComponent('https://example.com/foo bar');
console.log(encodedParam); // Output: https%3A%2F%2Fexample.com%2Ffoo%20bar
```
As noted in the [URL specification](https://url.spec.whatwg.org/), the choice of encoding function depends on the specific use case and the requirements of the application.

## Percent-Encoded + and %20
When using a URL encoder, it's essential to understand the difference between percent-encoded + and %20. The + character is used to encode spaces in query strings, while %20 is used in the path component of a URL. For example:
```javascript
const queryString = 'foo+bar';
const encodedQueryString = encodeURIComponent(queryString);
console.log(encodedQueryString); // Output: foo%2Bbar
```
In this example, the + character is encoded as %2B, which is the correct encoding for a + character in a query string.

## Double-Encoding Disasters
Double-encoding occurs when a string is encoded multiple times, resulting in incorrect URLs. This can happen when using a URL encoder and then manually encoding the resulting string. To avoid double-encoding, it's essential to use a URL encoder correctly and avoid manual encoding whenever possible. For instance, instead of manually encoding a query parameter, use a URL encoder like [https://converterhub.dev/tools/url-encode-decode](https://converterhub.dev/tools/url-encode-decode) to ensure correct encoding.

## Common mistakes
* Using encodeURI instead of encodeURIComponent for encoding URL components
* Manually encoding URLs instead of using a URL encoder
* Double-encoding URLs, resulting in incorrect encoding
* Not accounting for reserved characters when encoding URLs
* Using the wrong encoding function for a specific use case
* Not testing URLs after encoding to ensure correct functionality

## FAQ
### Is Base64 encryption?
Base64 is an encoding scheme, not an encryption scheme. It is used to encode binary data as text, but it does not provide any security guarantees. For encoding text data, you can use a tool like [https://converterhub.dev/tools/base64-encode-decode](https://converterhub.dev/tools/base64-encode-decode).
### What is the difference between HTML escaping and URL encoding?
HTML escaping and URL encoding are two different encoding schemes used for different purposes. HTML escaping is used to encode special characters in HTML, while URL encoding is used to encode special characters in URLs. You can use a tool like [https://converterhub.dev/tools/html-escape-unescape](https://converterhub.dev/tools/html-escape-unescape) to escape HTML characters.
### How do I know which encoding function to use?
The choice of encoding function depends on the specific use case and the requirements of the application. For encoding URL components, use encodeURIComponent. For encoding the entire URL, use encodeURI.
### Can I use a URL encoder to encode any string?
No, not all strings can be encoded using a URL encoder. Some strings may contain characters that are not allowed in URLs, such as newline characters or non-ASCII characters.
### What if the server is at fault?
If the server is not decoding URLs correctly, it may be necessary to work with the server team to resolve the issue. As noted in the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent), correct decoding of URLs is essential for ensuring correct functionality.

## Wrapping up
In conclusion, URL encoding is a critical aspect of working with URLs, and using a URL encoder correctly is essential for ensuring correct functionality. By understanding the rules of URL encoding and using the correct encoding functions, developers can avoid common mistakes and ensure that their applications work correctly. When in doubt, consult the [URL specification](https://url.spec.whatwg.org/) or use a tool like our URL encoder to ensure correct encoding of special characters.
