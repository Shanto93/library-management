import mongoose from "mongoose";
import type { IBook } from "../interfaces/book.interfaces";

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: [true, "Genre is required"],
      trim: true,
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: [true, "ISBN must be unique"],
      trim: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

bookSchema.post("findOneAndDelete", function (doc, next) {
  if (doc) {
    console.log(`Book with ID ${doc._id} was deleted`);
  } else {
    console.log("No book found to delete.");
  }
  next();
});

export const Book = mongoose.model<IBook>("Book", bookSchema);
