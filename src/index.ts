import express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./app-data.ts";
import studentRouter from "./routes/student.route.ts";

myDataSource
  .initialize()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/student", studentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server is listening on port 8080");
});
