const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Pbkdf2 - Password-Based Key Derivation Function 2

// Synchronous function will block the main thread - Don't use it.
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("key is generated");
});

// Async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err) => {
    console.log("key is generated");
});

function multiplyFn(a, b) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is", c);
