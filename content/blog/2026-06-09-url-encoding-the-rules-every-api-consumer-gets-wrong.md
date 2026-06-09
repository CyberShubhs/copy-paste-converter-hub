---
title: "URL encoding: the rules every API consumer gets wrong"
description: "I've seen my share of API integration issues, but one that still manages to trip up many developers is URL encoding. It's a subtle problem that can cause a lot of headaches, especi"
date: "2026-06-09"
author: "Shubham Singla"
tags: ["urls", "api", "http"]
---

I've seen my share of API integration issues, but one that still manages to trip up many developers is URL encoding. It's a subtle problem that can cause a lot of headaches, especially when working with third-party services. Recently, I was debugging an issue where a URL-encoded parameter was being decoded incorrectly by the server, resulting in a 400 error. The problem turned out to be a misplaced use of `encodeURI` instead of `encodeURIComponent`. This experience made me realize that many developers are not aware of the nuances of URL encoding and the importance of using the correct encoding function.

## TL;DR
* The `encodeURI` and `encodeURIComponent` functions are not interchangeable and have different use cases.
* Reserved characters in URLs must be percent-encoded to ensure correct decoding.
* Double-encoding can lead to incorrect decoding and errors.
* The server may also be at fault if it's not decoding URL-encoded parameters correctly.
* Using a reliable URL encoder can help prevent common mistakes.

## Introduction to URL Encoding
URL encoding is the process of converting characters that are not allowed in URLs into a format that can be safely transmitted. This is typically done using percent-encoding, where the character is replaced with a `%` symbol followed by its ASCII code in hexadecimal. For example, the space character is encoded as `%20`. The `encodeURIComponent` function in JavaScript is used to encode URLs, and it's essential to use it correctly to avoid issues.

## Using the URL Encoder Correctly
When working with URLs, it's crucial to use the correct encoding function. The `encodeURI` function is used to encode the entire URL, while `encodeURIComponent` is used to encode individual components of the URL. Using the wrong function can lead to incorrect encoding and decoding. For example, if you use `encodeURI` on a URL component that contains special characters, it may not be encoded correctly. On the other hand, using `encodeURIComponent` on the entire URL can result in double-encoding, which can also cause issues.

```javascript
const url = 'https://example.com/path?param=' + encodeURIComponent('value with spaces');
```

In this example, `encodeURIComponent` is used to encode the `param` value, which contains spaces. This ensures that the URL is correctly encoded and can be safely transmitted.

### Percent-Encoded Characters
Percent-encoding is used to encode characters that are not allowed in URLs. For example, the `+` character is encoded as `%2B`, and the space character is encoded as `%20`. However, not all characters need to be encoded. For example, the `a-z` and `A-Z` characters are allowed in URLs and do not need to be encoded. It's essential to understand which characters need to be encoded and which do not to avoid incorrect encoding and decoding.

## Reserved Characters in URLs
Reserved characters in URLs are characters that have special meanings and must be encoded to ensure correct decoding. For example, the `&` character is used to separate parameters in a URL, and the `=` character is used to assign a value to a parameter. If these characters are not encoded, they can cause issues with URL decoding. The [URL specification](https://url.spec.whatwg.org/) provides a list of reserved characters that must be encoded.

## Common Mistakes
* Using `encodeURI` instead of `encodeURIComponent` to encode URL components
* Not encoding reserved characters in URLs
* Double-encoding URLs, which can lead to incorrect decoding
* Not using a reliable URL encoder, which can result in incorrect encoding
* Not decoding URL-encoded parameters correctly on the server-side
* Using the wrong encoding function for a specific use case

## FAQ
### Is Base64 encoding the same as URL encoding?
No, Base64 encoding and URL encoding are not the same. Base64 encoding is a way of encoding binary data as text, while URL encoding is used to encode characters that are not allowed in URLs. You can use our [Base64 encode/decode tool](/tools/base64-encode-decode) to work with Base64-encoded data.
### What is the difference between encodeURI and encodeURIComponent?
The `encodeURI` function is used to encode the entire URL, while `encodeURIComponent` is used to encode individual components of the URL. According to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent), `encodeURIComponent` should be used when encoding URL components.
### Can I use a URL encoder to encode HTML entities?
No, a URL encoder is not suitable for encoding HTML entities. You should use an HTML escape/unescape tool, such as our [HTML escape/unescape tool](/tools/html-escape-unescape), to work with HTML entities.
### How do I decode a URL-encoded string?
You can use the `decodeURIComponent` function in JavaScript to decode a URL-encoded string. Alternatively, you can paste it into our [URL encode/decode tool](/tools/url-encode-decode) to decode it.
### What happens if the server is not decoding URL-encoded parameters correctly?
If the server is not decoding URL-encoded parameters correctly, it can result in errors and incorrect behavior. You should ensure that the server is decoding URL-encoded parameters correctly to avoid issues.

## Wrapping up
In conclusion, URL encoding is a critical aspect of working with APIs and URLs. Using the correct encoding function and understanding which characters need to be encoded can help prevent common mistakes and ensure correct decoding. By following the guidelines outlined in this post and using reliable tools, you can ensure that your URLs are correctly encoded and decoded, and your API integrations work as expected.
