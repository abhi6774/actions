import express from "express";
import path from "path";
import { authRouter, profileRouter } from "./routers";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/home", (req, res) => {
  res.send("Home Route");
})

app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.listen(2000, () => {
  console.log("App is Listening on http://localhost:2000");
});
