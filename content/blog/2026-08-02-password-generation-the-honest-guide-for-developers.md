---
title: "Password generation: the honest guide for developers"
description: "I still remember the first time I had to implement a password generator for a web application. The requirements were simple: generate a random password of a given length. However,"
date: "2026-08-02"
author: "Shubham Singla"
tags: ["security", "passwords"]
---

I still remember the first time I had to implement a password generator for a web application. The requirements were simple: generate a random password of a given length. However, as I delved deeper into the world of password generation, I realized that it's not just about length, but also about entropy. A password can be long, but if it's not random enough, it's not secure. I started exploring different methods of generating passwords, including diceware and random number generators. One of the most useful tools I found was the password generator at https://converterhub.dev/tools/password-generator, which helped me understand the importance of entropy in password generation. 

## TL;DR
* Password generation is not just about length, but also about entropy
* Diceware is a method of generating passwords using a list of words
* Random number generators can be used to generate passwords, but they have their own set of pitfalls
* Server-side generation of passwords can lead to breaches if not done properly
* Password managers are a better option than memorization

## Introduction to Password Generation
Password generation is a crucial aspect of any web application. A good password generator should be able to generate passwords that are both long and random. However, most password generators focus only on length, ignoring the importance of entropy. Entropy refers to the randomness of a password. A password with high entropy is more secure than a password with low entropy, even if they are of the same length. 

## Understanding Entropy vs Length
Entropy and length are two different aspects of password security. While length refers to the number of characters in a password, entropy refers to the randomness of those characters. A password with high entropy is more secure than a password with low entropy, even if they are of the same length. For example, a password like "password123" has low entropy because it's a common word with a number appended to it. On the other hand, a password like "Giraffe#LemonTree" has high entropy because it's a combination of two random words with a special character. 

### Calculating Entropy
Calculating entropy is a complex task that involves understanding the probability of each character in a password. One way to calculate entropy is to use the formula: entropy = -SUM(p * log2(p)), where p is the probability of each character. However, this formula is not foolproof and should be used with caution. 

## Diceware vs Random
Diceware is a method of generating passwords using a list of words. The idea behind diceware is to generate a password that is both long and random. Diceware uses a list of words, each with a corresponding number. The user rolls a dice to select a word from the list, and the resulting password is a combination of the selected words. On the other hand, random number generators use algorithms to generate random numbers, which can be used to generate passwords. However, random number generators have their own set of pitfalls, including the risk of predictability. 

### Example of Diceware
Here's an example of how diceware can be used to generate a password:
```python
import random

# List of words
words = ["apple", "banana", "cherry", "date", "elderberry"]

# Roll a dice to select a word
word1 = random.choice(words)
word2 = random.choice(words)
word3 = random.choice(words)

# Generate the password
password = word1 + word2 + word3

print(password)
```
This code generates a password by selecting three random words from the list and combining them. 

## Server-Side Generation Pitfalls
Server-side generation of passwords can lead to breaches if not done properly. One of the biggest pitfalls is using a predictable algorithm to generate passwords. If an attacker can predict the algorithm, they can generate the same passwords as the server, giving them access to user accounts. Another pitfall is storing passwords in plaintext. If an attacker gains access to the server, they can steal all the passwords and use them to gain access to user accounts. 

### Secure Server-Side Generation
To generate passwords securely on the server-side, use a cryptographically secure pseudo-random number generator (CSPRNG). One example is the `getRandomValues` function provided by the Web Crypto API, which can be used to generate cryptographically secure random numbers. Here's an example:
```javascript
// Generate a cryptographically secure random number
crypto.getRandomValues(new Uint8Array(16)).then(buffer => {
  // Convert the buffer to a hexadecimal string
  const password = Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join('');

  console.log(password);
});
```
This code generates a cryptographically secure random number using the `getRandomValues` function and converts it to a hexadecimal string. 

## Using Password Managers
Password managers are a better option than memorization. They can generate and store unique, complex passwords for each account, making it easier to use strong passwords without having to remember them. Additionally, password managers can autofill passwords, making it easier to log in to accounts. 

### Example of a Password Manager
Here's an example of how a password manager can be used to generate and store passwords:
```python
import hashlib

# Generate a password
password = hashlib.sha256("mysecretpassword".encode()).hexdigest()

# Store the password in the password manager
password_manager = {}
password_manager["account1"] = password

print(password_manager)
```
This code generates a password using a hash function and stores it in a password manager. 

## Common mistakes
* Using a predictable algorithm to generate passwords
* Storing passwords in plaintext
* Not using a cryptographically secure pseudo-random number generator (CSPRNG)
* Not using a password manager
* Generating passwords that are too short or have low entropy
* Not using a sufficient work factor when generating passwords

## FAQ
### Is Base64 encryption?
Base64 is not encryption, but rather a method of encoding binary data using a character set. While it can be used to obscure data, it should not be relied upon for security. For example, you can use the [Base64 encode/decode tool](/tools/base64-encode-decode) to encode and decode data, but you should not use it as a substitute for proper encryption. 
### What is the recommended password length?
The recommended password length varies depending on the application, but a minimum of 12 characters is recommended. However, length is not the only factor, and entropy should also be taken into account. 
### Can I use a random number generator to generate passwords?
Yes, you can use a random number generator to generate passwords, but you should use a cryptographically secure pseudo-random number generator (CSPRNG) to ensure that the passwords are secure. 
### How do I store passwords securely?
You should store passwords securely by hashing and salting them. You can use a library like [Bcrypt](https://github.com/pyca/bcrypt/) to hash and salt passwords. 
### What is the difference between a password generator and a password manager?
A password generator is a tool that generates passwords, while a password manager is a tool that stores and manages passwords. While they are related, they are not the same thing. 
### Are there any external resources I can use to learn more about password generation?
Yes, there are several external resources you can use to learn more about password generation, including the [NIST guidelines for password generation](https://pages.nist.gov/800-63-3/), which provide a comprehensive overview of password generation and security. Additionally, you can use the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) to learn more about cryptographically secure pseudo-random number generators. 

## Wrapping up
In conclusion, password generation is a complex task that requires careful consideration of entropy, length, and security. While there are many tools and libraries available to help with password generation, it's essential to understand the underlying principles and pitfalls to ensure that passwords are generated securely. By following best practices and using the right tools, you can generate passwords that are both strong and unique, making it easier to protect user accounts and prevent breaches.
