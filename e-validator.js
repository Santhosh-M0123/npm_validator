function validateEmail(email) {
    // Check if email is not empty
    if (!email) {
        return { validate: false, info: "Email cannot be empty." };
    }

    // Regular expression for validating an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        return { validate: false, info: "Invalid email format." };
    }

    // Optional: Check for common disposable email domains
    const disposableDomains = [
        "tempmail.com", "10minutemail.com", "mailinator.com", "guerrillamail.com", "yopmail.com"
    ];

    // Extract the domain from the email
    const domain = email.split('@')[1];

    // Check if the email domain is from a disposable list
    if (disposableDomains.includes(domain)) {
        return { validate: false, info: "Disposable email addresses are not allowed." };
    }

    // Return success if all checks are passed
    return { validate: true, info: "Email is valid." };
}

module.exports = validateEmail;
