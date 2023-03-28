import { Router } from "express";

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  console.log("Profile Router");
  res.send("Profile Router");
});

export { profileRouter };
