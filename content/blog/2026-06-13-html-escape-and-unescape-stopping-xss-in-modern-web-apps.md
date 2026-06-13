---
title: "HTML escape and unescape: stopping XSS in modern web apps"
description: "I've worked on numerous web applications, and one common issue that I've encountered is the risk of cross-site scripting (XSS) attacks. XSS occurs when an attacker injects maliciou"
date: "2026-06-13"
author: "Shubham Singla"
tags: ["xss", "security", "html"]
---

I've worked on numerous web applications, and one common issue that I've encountered is the risk of cross-site scripting (XSS) attacks. XSS occurs when an attacker injects malicious code into a website, which is then executed by the user's browser. This can happen when user input is not properly sanitized, allowing an attacker to inject HTML code that can steal user data or take control of the user's session. To prevent this, it's essential to use an HTML escape tool to escape any user input that is displayed on the website.

## TL;DR
* Use an HTML escape tool to escape user input and prevent XSS attacks
* Consider the context in which the input is being used, such as attribute, text, URL, or script
* Use a Content Security Policy (CSP) as a second layer of defense
* Choose a trusted library to handle HTML escaping and unescaping

## Introduction to HTML Escaping
HTML escaping is the process of converting special characters in HTML into their corresponding escape sequences. This is done to prevent the browser from interpreting the special characters as HTML code, which can lead to XSS attacks. For example, the `<` character is escaped as `&lt;`, and the `>` character is escaped as `&gt;`. When working with user input, it's essential to escape any special characters to prevent XSS attacks.

## HTML Entity Escaping
Each HTML entity escapes a specific special character. For example, `&quot;` escapes the double quote character, and `&#39;` escapes the single quote character. It's essential to understand which entity escapes which character to ensure that user input is properly sanitized. The following code example shows how to escape user input using HTML entities:
```html
<input type="text" value="&quot;Hello, World!&quot;">
```
In this example, the double quote characters are escaped using the `&quot;` entity.

### Context Matters
The context in which user input is being used is also crucial. For example, when displaying user input as text, it's essential to escape any HTML special characters to prevent XSS attacks. However, when displaying user input as an attribute, it's essential to escape any special characters that could be used to close the attribute and inject malicious code. The following code example shows how to escape user input when displaying it as an attribute:
```html
<div attr="&quot;Hello, World!&quot;"></div>
```
In this example, the double quote characters are escaped using the `&quot;` entity to prevent an attacker from closing the attribute and injecting malicious code.

## Using a Content Security Policy (CSP)
A CSP is a second layer of defense that can help prevent XSS attacks. A CSP defines which sources of content are allowed to be executed within a web page, making it more difficult for an attacker to inject malicious code. The following code example shows how to define a CSP:
```http
Content-Security-Policy: script-src 'self' https://example.com;
```
In this example, the CSP defines that only scripts from the same origin (`'self'`) and `https://example.com` are allowed to be executed.

## Choosing a Trusted Library
When working with HTML escaping and unescaping, it's essential to choose a trusted library to handle the process. A trusted library can ensure that user input is properly sanitized and that any special characters are escaped correctly. According to the [OWASP](https://owasp.org/www-community/attacks/xss/), choosing a trusted library is essential to prevent XSS attacks.

## HTML Escape Tool
To escape user input, you can paste it into our [HTML escape tool](/tools/html-escape-unescape). This tool can help you escape any special characters in user input and prevent XSS attacks. Additionally, you can use the [URL encode decode](/tools/url-encode-decode) tool to encode or decode URLs.

## Common mistakes
* Not escaping user input when displaying it as text or an attribute
* Not considering the context in which user input is being used
* Not using a CSP as a second layer of defense
* Choosing an untrusted library to handle HTML escaping and unescaping
* Not testing user input for XSS vulnerabilities

## FAQ
### What is HTML escaping?
HTML escaping is the process of converting special characters in HTML into their corresponding escape sequences. This is done to prevent the browser from interpreting the special characters as HTML code, which can lead to XSS attacks.
### What is the difference between HTML escaping and URL encoding?
HTML escaping is used to escape special characters in HTML, while URL encoding is used to encode special characters in URLs. According to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting), URL encoding is not a substitute for HTML escaping.
### How can I prevent XSS attacks?
To prevent XSS attacks, you should use an HTML escape tool to escape user input, consider the context in which user input is being used, and use a CSP as a second layer of defense.
### What is a Content Security Policy (CSP)?
A CSP is a second layer of defense that can help prevent XSS attacks. A CSP defines which sources of content are allowed to be executed within a web page, making it more difficult for an attacker to inject malicious code.
### Can I use a CSP to prevent all XSS attacks?
No, a CSP is not a substitute for proper HTML escaping and input validation. While a CSP can help prevent some XSS attacks, it is essential to use a combination of techniques to prevent all XSS attacks.

## Wrapping up
In conclusion, HTML escaping is an essential step in preventing XSS attacks. By using an HTML escape tool, considering the context in which user input is being used, and using a CSP as a second layer of defense, you can help prevent XSS attacks and protect your users' data. Remember to choose a trusted library to handle HTML escaping and unescaping, and always test user input for XSS vulnerabilities.
