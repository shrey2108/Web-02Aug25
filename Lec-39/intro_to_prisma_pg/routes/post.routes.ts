import { Router } from "express";
import * as controller from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", controller.getAllPost)
postRouter.post("/", controller.createPost)

export default postRouter;