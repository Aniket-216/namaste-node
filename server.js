const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/getSecreteData") {
        res.end("Three is not secret data.");
    }
    res.end("Hello World");
});

server.listen(9999, () => {
    console.log("Server running on port 9999");
});
