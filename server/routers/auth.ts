import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  console.log("Auth Router")
})


export { authRouter };
