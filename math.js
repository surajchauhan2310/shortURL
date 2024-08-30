// const randomString = (len, arr) => {
//   let ans = "";
//   for (let i = len; i > 0; i--) {
//     ans += arr[Math.floor(Math.random() * arr.length)];
//   }
//   console.log(ans);
// };

// randomString(6, "www.url.com");
// const url = "https://www.michaelburrows.xyz/blog?search=hello&world";
// let domain = new URL(url);
// console.log(domain.hostname.replace("www.", ""));

// const domain = "www.youtube.xyz";
// const parts = domain.split(".");
// const middleValue = parts[0] === "www" ? parts[1] : parts[3];
// const randomDomain = (len, arr) => {
//   let ans = "";
//   for (let i = len; i > 0; i--) {
//     ans += arr[Math.floor(Math.random() * arr.length)];
//   }
//   console.log(ans);
// };
// randomDomain(7, middleValue);

// Function to generate a random string of length 7
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
const shortString = generateRandomString(1);
console.log(shortString);
// Generate and log the random string
// const randomString = generateRandomString();
// console.log(randomString); // Example output: "aBcDeFg"

// const x = Math.floor((Math.random() < 0.5) * 26) + 65;
// console.log(x);
// let a = String.fromCharCode(x);
// console.log(a);
