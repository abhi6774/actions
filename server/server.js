const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(2000, () => {
  console.log("App is Listening on http://localhost:2000");
});
