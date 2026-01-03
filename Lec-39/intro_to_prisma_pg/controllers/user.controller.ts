import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true 
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all users"
    })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.create({
      data: { email, name }
    });
    res.status(201).json(user);
  } catch (error) {
    console.log("error in createUser", error)
    res.status(500).json({
      message: "Failed to create user"
    })
  }
}