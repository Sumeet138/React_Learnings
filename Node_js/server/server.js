const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  //to find the filepath
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  //to support the filepath with extension
  const extname = String(path.extname(filePath).toLowerCase());
  const mimeType = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
  };
  const contentType = mimeType[extname] || "application/octet-stream";

  //to read from the file and serve
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found Bruh");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
server.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
