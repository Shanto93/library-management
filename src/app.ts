import express, { Application, type Request, type Response } from "express";
import { bookRoutes } from "./app/controllers/book.controller";

const app: Application = express();
export default app;

app.use(express.json());
app.use("/api/books", bookRoutes);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});



