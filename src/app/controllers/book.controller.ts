import express, { type Request, type Response } from "express";
import { Book } from "../models/book.model";

export const bookRoutes = express.Router();

bookRoutes.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  // Assuming you have a Book model imported
  try {
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Error creating book",
      error: error.message,
    });
  }
});
