function validateURL(url) {
    try {
        const parsedUrl = new URL(url);
        return { validate: true, info: "URL is valid." };
    } catch (e) {
        return { validate: false, info: "Invalid URL." };
    }
}

module.exports = validateURL;