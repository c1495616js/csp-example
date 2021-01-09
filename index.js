const express = require("express");
const path = require("path");
const app = express();

app.get("/index.html", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, ".") });
});

app.get("/frame.html", (req, res) => {
  // Header
  res.setHeader("X-Frame-Options", "DENY");
  //   res.setHeader("X-Frame-Options", "SAMEORIGIN");
  //   res.setHeader("Content-Security-Policy", `frame-ancestors 'none'`);
  //   res.setHeader("Content-Security-Policy", `frame-ancestors 'self'`);
  res.setHeader(
    "Content-Security-Policy",
    `frame-ancestors 'self' http://localhost:8888`
  );

  res.sendFile("frame.html", {
    root: path.join(__dirname, "."),
  });
});

app.listen(8888, () => console.log("server listening 8888!"));
