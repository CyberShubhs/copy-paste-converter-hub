---
title: "Base64 encoding explained for web developers"
description: "When working with web applications, I often encounter situations where I need to transmit binary data over a medium that only supports text, such as in email attachments or when st"
date: "2026-06-29"
author: "Shubham Singla"
tags: ["base64", "encoding"]
---

When working with web applications, I often encounter situations where I need to transmit binary data over a medium that only supports text, such as in email attachments or when storing images in a database. One common solution to this problem is to use a Base64 encoder to convert the binary data into a text representation. For example, I can use a Base64 encoder to convert an image file into a string that can be embedded directly into an HTML document. This approach can be useful for reducing the number of HTTP requests made by a web page, but it's not without its drawbacks.

## TL;DR
* Base64 encoding is a way to represent binary data as text using a 64-character alphabet
* It is not a form of encryption, but rather a way to encode data for transmission or storage
* Base64 encoding has a 33% size overhead compared to the original binary data
* There are URL-safe variants of Base64 encoding that can be used in URLs or other contexts where special characters are not allowed
* Data URIs can be used to embed small images or other binary data directly into HTML documents

## Introduction to Base64 encoding
Base64 encoding is a way to represent binary data as text using a 64-character alphabet. The alphabet consists of the uppercase and lowercase letters A-Z and a-z, the digits 0-9, and the special characters + and /. This alphabet is used to encode binary data into a text representation that can be transmitted or stored easily. The encoding process involves dividing the binary data into 6-bit chunks and mapping each chunk to a character in the alphabet. 
### The 64-character alphabet
The 64-character alphabet used in Base64 encoding is as follows:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```
This alphabet is used to map each 6-bit chunk of the binary data to a character in the encoded text.

## How Base64 encoding works
The Base64 encoding process involves several steps. First, the binary data is divided into 6-bit chunks. Each chunk is then mapped to a character in the alphabet using the following mapping:
```
000000 -> A
000001 -> B
...
111111 -> /
```
The encoded text is then constructed by concatenating the characters corresponding to each chunk of the binary data. 
### Padding rules
If the length of the binary data is not a multiple of 6 bits, padding characters are added to the end of the encoded text to make its length a multiple of 4. The padding characters are the = character, which is used to indicate that the preceding characters are padding and should be ignored.

## URL-safe Base64 encoding
There are URL-safe variants of Base64 encoding that can be used in URLs or other contexts where special characters are not allowed. These variants use the - and _ characters instead of the + and / characters, which are not allowed in URLs. 
For more information on Base64 encoding, see the [RFC 4648 specification](https://www.rfc-editor.org/rfc/rfc4648).

## Using a Base64 encoder
To use a Base64 encoder, you can paste your binary data into a tool like our [Base64 encoder](/tools/base64-encode-decode) and it will generate the corresponding text representation. You can also use the `btoa` function in JavaScript to encode binary data using Base64. For example:
```javascript
const binaryData = new Uint8Array([1, 2, 3]);
const encodedData = btoa(String.fromCharCode(...binaryData));
console.log(encodedData);
```
Note that the `btoa` function expects a string as input, so we need to convert the binary data to a string using the `String.fromCharCode` method.

## Data URIs
Data URIs are a way to embed small images or other binary data directly into HTML documents. They use the `data` scheme and specify the MIME type of the data, followed by the Base64-encoded data. For example:
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==">
```
This approach can be useful for reducing the number of HTTP requests made by a web page, but it's not suitable for large images or other binary data due to the 33% size overhead of Base64 encoding.

## Common mistakes
* Using Base64 encoding as a form of encryption: Base64 encoding is not secure and should not be used to protect sensitive data.
* Not using padding characters correctly: Padding characters are necessary to make the length of the encoded text a multiple of 4.
* Using the wrong alphabet: There are different variants of Base64 encoding that use different alphabets, so make sure to use the correct one for your application.
* Not considering the size overhead: Base64 encoding has a 33% size overhead compared to the original binary data, so it may not be suitable for large images or other binary data.
* Not using URL-safe variants: If you need to use Base64 encoding in a URL or other context where special characters are not allowed, make sure to use a URL-safe variant.

## FAQ
### Is Base64 encryption?
No, Base64 encoding is not a form of encryption. It is a way to represent binary data as text using a 64-character alphabet, but it does not provide any security guarantees.
### What is the size overhead of Base64 encoding?
The size overhead of Base64 encoding is 33% compared to the original binary data. This means that the encoded text will be 33% larger than the original binary data.
### Can I use Base64 encoding in URLs?
Yes, but you need to use a URL-safe variant of Base64 encoding that uses the - and _ characters instead of the + and / characters. You can also use a tool like our [URL encode decode](/tools/url-encode-decode) tool to encode the data.
### How do I decode Base64-encoded data?
You can use a tool like our Base64 encoder to decode Base64-encoded data. Alternatively, you can use the `atob` function in JavaScript to decode Base64-encoded data. For more information, see the [MDN documentation on Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64).
### Can I use Data URIs for large images?
No, Data URIs are not suitable for large images or other binary data due to the 33% size overhead of Base64 encoding. It's better to use a separate HTTP request to load the image or other binary data.

## Wrapping up
In conclusion, Base64 encoding is a useful tool for representing binary data as text, but it's not a form of encryption and has a 33% size overhead. When working with Base64 encoding, it's essential to use the correct alphabet and padding characters, and to consider the size overhead when deciding whether to use Data URIs or separate HTTP requests to load binary data. For more information on Base64 encoding, see the [RFC 4648 specification](https://www.rfc-editor.org/rfc/rfc4648) or the [MDN documentation on Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64).
