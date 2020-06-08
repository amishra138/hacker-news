import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3003;

const app = express();

app.get("/*", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.log("Something went wrong:", err);
      return res.status(500).send("Something went wrong!");
    }
    // To render our app to a static HTML string
    const app = ReactDOMServer.renderToString(<App />);
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

// serve contents from the build directory as static files
app.use(express.static(path.resolve(__dirname, "..", "/build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
