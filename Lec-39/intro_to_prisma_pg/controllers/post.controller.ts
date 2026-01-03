import { Request, Response } from "express"
import { prisma } from "../lib/prisma.js"

export const getAllPost = async (req:Request, res: Response) => {
  try {
    const authorId = 1; // req.user.id;
    const posts = await prisma.post.findMany({
      where: { authorId },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all posts"
    })
  }
}

export const createPost = async (req:Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const authorId = 1; // use auth here, req.user.id

    const post = await prisma.post.create({
      data: { title, content, authorId }
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all posts"
    })
  }
}