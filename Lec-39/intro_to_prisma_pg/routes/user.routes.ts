import { Router } from "express";
// import { getAllUser } from "../controllers/user.controller.js";
import * as controller from "../controllers/user.controller.js"

const userRouter = Router();

userRouter.get("/", controller.getAllUser);
userRouter.post("/", controller.createUser);

export default userRouter;