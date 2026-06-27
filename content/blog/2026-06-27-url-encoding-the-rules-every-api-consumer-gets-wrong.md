---
title: "URL encoding: the rules every API consumer gets wrong"
description: "When working with APIs, I've encountered my fair share of issues related to URL encoding. One particular problem that comes to mind is when a URL parameter contains special charact"
date: "2026-06-27"
author: "Shubham Singla"
tags: ["urls", "api", "http"]
---

When working with APIs, I've encountered my fair share of issues related to URL encoding. One particular problem that comes to mind is when a URL parameter contains special characters. For instance, if we have a URL like `https://example.com/api/data?param=value&special=+`, the `+` character can be misinterpreted as a space. To avoid this, we need to use a URL encoder to properly encode the URL parameters. 

## TL;DR
* URL encoding is crucial when working with APIs to avoid misinterpretation of special characters
* `encodeURI` and `encodeURIComponent` are two different functions in JavaScript that serve distinct purposes
* Reserved characters in URLs must be percent-encoded to ensure correct interpretation
* Double-encoding can lead to disasters and should be avoided at all costs
* Sometimes, the server is at fault, and the issue lies with its implementation of URL decoding

## Introduction to URL Encoding
URL encoding is the process of converting characters in a URL to a format that can be safely transmitted over the internet. This is necessary because certain characters have special meanings in URLs, such as `&`, `?`, and `+`. If these characters are not encoded, they can be misinterpreted by the server or client, leading to errors. 

### Understanding Reserved Characters
Reserved characters in URLs are those that have special meanings. These characters include `!`, `*`, `'`, `(`, `)`, `;`, `:`, `@`, `&`, `=`, `+`, `$`, `,`, `/`, `?`, `#`, `[`, and `]`. When these characters are used in a URL, they must be percent-encoded to ensure correct interpretation. For example, the `+` character is often used to represent a space in URL parameters, but if it's not encoded, it can be misinterpreted as a literal plus sign.

## Using a URL Encoder
To avoid issues with URL encoding, it's essential to use a URL encoder. This can be done manually or programmatically. For instance, we can use the `encodeURIComponent` function in JavaScript to encode URL parameters. Here's an example:
```javascript
const param = 'value with spaces';
const encodedParam = encodeURIComponent(param);
console.log(encodedParam); // outputs "value%20with%20spaces"
```
We can then paste it into our [URL encoder](/tools/url-encode-decode) to verify the encoding.

## encodeURI vs encodeURIComponent
In JavaScript, there are two functions that can be used for URL encoding: `encodeURI` and `encodeURIComponent`. While they seem similar, they serve distinct purposes. `encodeURI` is used to encode the entire URL, while `encodeURIComponent` is used to encode individual URL parameters. Here's an example of how to use `encodeURI`:
```javascript
const url = 'https://example.com/api/data?param=value&special=+';
const encodedUrl = encodeURI(url);
console.log(encodedUrl); // outputs "https://example.com/api/data?param=value&special=+"
```
As we can see, `encodeURI` does not encode the `+` character. This is because `encodeURI` is intended to encode the entire URL, not individual parameters. For encoding individual parameters, we should use `encodeURIComponent`. 

## Percent-Encoded + and %20
When encoding URL parameters, it's essential to understand the difference between `+` and `%20`. The `+` character is often used to represent a space in URL parameters, but it's not the correct way to encode a space. Instead, we should use `%20` to represent a space. For example:
```javascript
const param = 'value with spaces';
const encodedParam = encodeURIComponent(param);
console.log(encodedParam); // outputs "value%20with%20spaces"
```
As we can see, `encodeURIComponent` correctly encodes the space as `%20`.

## Double-Encoding Disasters
Double-encoding occurs when a URL parameter is encoded twice. This can lead to disasters, as the encoded characters can be misinterpreted by the server or client. For example, if we encode a URL parameter using `encodeURIComponent` and then encode it again, the resulting string can be incorrect. To avoid double-encoding, we should only encode URL parameters once. 

## Common mistakes
* Using `encodeURI` instead of `encodeURIComponent` for encoding individual URL parameters
* Not encoding reserved characters in URLs
* Using `+` to represent a space instead of `%20`
* Double-encoding URL parameters
* Not verifying the encoding of URL parameters
* Not handling decoding errors on the server-side

## FAQ
### Is Base64 encryption?
Base64 is not encryption, but rather a method of encoding binary data as text. It's often used to transmit binary data over text-based protocols, such as email or HTTP. For more information on Base64, we can use the [Base64 encode and decode tool](/tools/base64-encode-decode).
### What is the difference between HTML escaping and URL encoding?
HTML escaping and URL encoding are two different processes. HTML escaping is used to encode special characters in HTML, while URL encoding is used to encode special characters in URLs. For more information on HTML escaping, we can use the [HTML escape and unescape tool](/tools/html-escape-unescape).
### How do I decode a URL parameter?
To decode a URL parameter, we can use the `decodeURIComponent` function in JavaScript. This function decodes a percent-encoded string, replacing `%xx` escapes with their single-character equivalent. For more information on URL decoding, we can refer to the [URL specification](https://url.spec.whatwg.org/).
### Can I use encodeURIComponent for encoding entire URLs?
No, we should not use `encodeURIComponent` for encoding entire URLs. Instead, we should use `encodeURI` for encoding entire URLs. For more information on `encodeURI` and `encodeURIComponent`, we can refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).
### What happens if the server is at fault?
If the server is at fault, it may not correctly decode URL parameters, leading to errors. In this case, we should verify the server-side implementation of URL decoding to ensure it's correct.

## Wrapping up
In conclusion, URL encoding is a crucial aspect of working with APIs. By understanding the rules of URL encoding and using the correct functions, such as `encodeURIComponent`, we can avoid common mistakes and ensure that our APIs work correctly. For more information on URL encoding and decoding, we can refer to the [URL specification](https://url.spec.whatwg.org/) and other authoritative sources.
