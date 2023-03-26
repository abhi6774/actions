const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(2000, () => {
  console.log("App is Listening on http://localhost:2000");
});
