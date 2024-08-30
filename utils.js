// Creating the tiny URL's
const generateRandomString = (len) => {
  let result = "";
  for (let i = 0; i < len; i++) {
    // Generate a random character code for either uppercase (65-90) or lowercase (97-122)
    const randomCharCode =
      Math.random() < 0.5
        ? Math.floor(Math.random() * 26) + 65 // Uppercase letters A-Z
        : Math.floor(Math.random() * 26) + 97; // Lowercase letters a-z
    result += String.fromCharCode(randomCharCode);
  }
  return result;
};

module.exports = { generateRandomString };
