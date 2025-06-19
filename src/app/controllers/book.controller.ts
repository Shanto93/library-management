import express, { type Request, type Response } from "express";
import { Book } from "../models/book.model";

export const bookRoutes = express.Router();

// Create a new book
bookRoutes.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Error creating book",
      error: error.message,
    });
  }
});

// GET all books
bookRoutes.get("/", async (req: Request, res: Response) => {
  const filter = req.query.filter as string | undefined;
  console.log(filter);
  const sortBy = req.query.sortBy as string | undefined;
  const sort = req.query.sort as string | undefined;
  const limit = parseInt(req.query.limit as string) || 10;

  try {
    const book = await Book.find(filter ? { genre: filter } : {})
      .sort(sortBy ? { [sortBy]: sort === "desc" ? -1 : 1 } : {})
      .limit(limit);
    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Error fetching books",
      error: error.message,
    });
  }
});
// GET a sngle book
bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    const book = await Book.findById(bookId);
    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Error fetching book",
      error: error.message,
    });
  }
});
