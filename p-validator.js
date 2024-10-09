function validatePassword(password, length = 6) {
    // Check if password length is at least 6 characters
    if (password.length < length) {
        return { validate: false, info: "Password must be at least 6 characters long." };
    }

    // Define regex patterns for checking the presence of characters
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if all required character types are present
    if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSymbols)) {
        return { validate: false, info: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol." };
    }

    // Check for easily guessable passwords
    const weakPasswords = ["password", "123456", "123456789", "12345678", "12345", "1234567", "qwerty", "abc123"];
    if (weakPasswords.includes(password.toLowerCase())) {
        return { validate: false, info: "Password is too weak and easily guessable." };
    }

    // Determine the strength of the password
    let strength;
    if (password.length < 8) {
        strength = "weak";
    } else if (password.length < 12) {
        strength = "medium";
    } else {
        strength = "strong";
    }

    // Return success with strength information
    return { validate: true, info: `Password is good to go. Strength: ${strength}.` };
}

module.exports = validatePassword;