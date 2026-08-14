---
title: "Base64 encoding explained for web developers"
description: "When working with web applications, I often encounter situations where I need to encode binary data, such as images, into a text format that can be easily transmitted over the inte"
date: "2026-08-14"
author: "Shubham Singla"
tags: ["base64", "encoding"]
---

When working with web applications, I often encounter situations where I need to encode binary data, such as images, into a text format that can be easily transmitted over the internet. One common solution to this problem is to use a Base64 encoder, which converts binary data into a string of characters using a 64-character alphabet. For example, if I want to embed an image directly into an HTML file, I can use a Base64 encoder to convert the image data into a string that can be used as the source attribute of an img tag.

## TL;DR
* Base64 is an encoding scheme, not an encryption scheme
* It uses a 64-character alphabet to represent binary data as text
* The encoded data is typically 33% larger than the original data
* There are URL-safe variants of the Base64 alphabet that can be used in web applications
* Data URIs can be used to embed encoded data directly into web pages

## Introduction to Base64
Base64 is a widely used encoding scheme that converts binary data into a text format using a 64-character alphabet. The alphabet consists of the uppercase and lowercase letters A-Z and a-z, the digits 0-9, and the special characters + and /. This alphabet is used to represent binary data as a series of characters, allowing it to be easily transmitted over the internet. The Base64 encoding scheme is defined in [RFC 4648](https://www.rfc-editor.org/rfc/rfc4648), which provides a detailed specification of the encoding and decoding process.

## How Base64 Encoding Works
The Base64 encoding process involves dividing the binary data into blocks of 3 bytes, and then converting each block into a series of 4 characters using the 64-character alphabet. This process is done by first converting each block of 3 bytes into a 24-bit integer, and then dividing the integer into 4 groups of 6 bits each. Each group of 6 bits is then used to index into the 64-character alphabet, resulting in a series of 4 characters that represent the original 3 bytes of data. The following example shows how this process works:
```javascript
function encodeBase64(data) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const encodedData = [];
  for (let i = 0; i < data.length; i += 3) {
    const block = data.slice(i, i + 3);
    const integer = (block[0] << 16) + (block[1] << 8) + block[2];
    const char1 = alphabet[(integer >> 18) & 63];
    const char2 = alphabet[(integer >> 12) & 63];
    const char3 = alphabet[(integer >> 6) & 63];
    const char4 = alphabet[integer & 63];
    encodedData.push(char1, char2, char3, char4);
  }
  return encodedData.join('');
}
```
### Padding Rules
One important aspect of the Base64 encoding scheme is the use of padding characters to ensure that the encoded data is always a multiple of 4 characters in length. The padding characters are used to fill out the last block of data, which may not be a full 3 bytes in length. The padding characters are the = character, which is used to indicate that the preceding character is a padding character. For example, if the last block of data is only 1 byte in length, the encoded data would be padded with 2 = characters to make it a total of 4 characters in length.

## URL-Safe Variants
There are several URL-safe variants of the Base64 alphabet that can be used in web applications. These variants replace the + and / characters with other characters that are safe to use in URLs. One common variant is the URL-safe Base64 alphabet defined in [RFC 4648](https://www.rfc-editor.org/rfc/rfc4648), which replaces the + and / characters with the - and _ characters. This variant is useful when encoding data that will be used in URLs, such as when embedding images directly into HTML files.

## Using Data URIs
Data URIs are a convenient way to embed encoded data directly into web pages. A data URI is a URL that begins with the data: scheme, followed by a MIME type and the encoded data. For example, the following data URI embeds a small image directly into an HTML file:
```html
<img src="data:image/png;base64,iVBORw0KGg...">
```
To create a data URI, you can use a Base64 encoder to convert the binary data into a string, and then paste it into our [Base64 encoder](/tools/base64-encode-decode) to ensure that it is properly encoded. You can also use a URL encoder, such as the one found at [/tools/url-encode-decode](/tools/url-encode-decode), to ensure that the data URI is properly formatted.

## Common mistakes
* Using Base64 encoding as a form of encryption, when in fact it is only an encoding scheme
* Failing to use padding characters correctly, resulting in corrupted data
* Using the wrong variant of the Base64 alphabet, resulting in data that is not compatible with the intended application
* Failing to properly encode the data URI, resulting in a URL that is not valid
* Using Base64 encoding to encode large amounts of data, resulting in a significant increase in size
* Failing to consider the 33% size overhead of Base64 encoding when designing applications

## FAQ
### Is Base64 encryption?
No, Base64 is an encoding scheme, not an encryption scheme. It is used to convert binary data into a text format, but it does not provide any security benefits.
### What is the 64-character alphabet used in Base64 encoding?
The 64-character alphabet used in Base64 encoding consists of the uppercase and lowercase letters A-Z and a-z, the digits 0-9, and the special characters + and /.
### How much larger is the encoded data compared to the original data?
The encoded data is typically 33% larger than the original data, due to the use of padding characters and the fact that each block of 3 bytes is encoded as 4 characters.
### Can I use Base64 encoding to embed images directly into HTML files?
Yes, you can use Base64 encoding to embed images directly into HTML files using data URIs. This can be convenient for small images, but it can also result in a significant increase in the size of the HTML file.
### What is the difference between Base64 encoding and URL-safe Base64 encoding?
The main difference between Base64 encoding and URL-safe Base64 encoding is the use of different characters in the alphabet. URL-safe Base64 encoding replaces the + and / characters with the - and _ characters, making it safe to use in URLs.

## Wrapping up
In conclusion, Base64 encoding is a widely used encoding scheme that converts binary data into a text format using a 64-character alphabet. It is commonly used in web applications to embed images and other binary data directly into HTML files, and it is also used in other applications where binary data needs to be transmitted over the internet. By understanding how Base64 encoding works and how to use it correctly, developers can create more efficient and effective applications. For more information on Base64 encoding, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Glossary/Base64).
