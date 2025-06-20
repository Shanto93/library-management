import mongoose, { Schema } from "mongoose";
import type { IBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new mongoose.Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Book ID is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "At least one copy must be borrowed"],
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema);
