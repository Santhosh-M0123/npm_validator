Here’s the `README.md` content formatted properly for GitHub or any platform that supports Markdown:

```md
# Validation Utilities

A collection of validation functions for passwords, emails, URLs, and phone numbers. This lightweight utility library helps you ensure that user inputs meet your application's validation requirements.

## Features

- **Password Validation**: Checks for length, the inclusion of uppercase letters, lowercase letters, numbers, symbols, and avoids common weak passwords.
- **Email Validation**: Ensures a valid email format and prevents the use of disposable email addresses.
- **URL Validation**: Confirms if a string is a valid URL.

## Installation

To install this package, use npm:

```bash
npm install pe-validator
```

## Usage

### Importing the Validators

You can import and use the validators as follows:

```javascript
const { v_url, v_password, v_url } = require('pe-validator');
```

### Password Validation

The password validator checks for a minimum length of 6 characters, ensures at least one uppercase letter, one lowercase letter, one number, and one special symbol. It also avoids weak passwords like `password` and `123456`.

```javascript
const passwordResult = v_password('StrongP@ssword123');
console.log(passwordResult); // { validate: true, info: "Password is good to go. Strength: strong." }
```

### Email Validation

This function checks if the email address is properly formatted and prevents the use of disposable email domains like `tempmail.com`.

```javascript
const emailResult = v_email('example@domain.com');
console.log(emailResult); // { validate: true, info: "Email is valid." }
```

### URL Validation

The URL validator ensures that the provided string is a valid URL.

```javascript
const urlResult = v_url('https://www.example.com');
console.log(urlResult); // { validate: true, info: "URL is valid." }
```


## Example

Here’s an example combining all the validators:

```javascript
const { v_email, v_password, v_url } = require('validation-utilities');

const passwordResult = v_password('StrongP@ssword123');
console.log(passwordResult);

const emailResult = v_email('example@domain.com');
console.log(emailResult);

const urlResult = v_url('https://www.example.com');
console.log(urlResult);

```