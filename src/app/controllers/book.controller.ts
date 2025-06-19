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
bookRoutes.get("/", async (req: Request, res: Response) => {
  const filter = req.query.filter as string | undefined;
  console.log(filter);
  const sortBy = req.query.sortBy as string | undefined;
  const sort = req.query.sort as string | undefined;
  const limit = parseInt(req.query.limit as string) || 10;
  console.log(sort, sortBy, filter, limit);

  try {
    const book = await Book.find(filter ? { genre: filter } : {})
      .sort(sortBy ? { [sortBy]: sort === "desc" ? -1 : 1 } : {})
      .limit(limit);
    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      book: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Error fetching books",
      error: error.message,
    });
  }
});
