import { Router } from "express";
import { myDataSource } from "../app-data.ts";
import { Student } from "../entity/student.entity.ts";

const studentRouter = Router();

studentRouter.get("/", async (req, res) => {
  const students = await myDataSource.getRepository(Student).find();
  res.setHeader("content-type", "application/json");
  res.json(students);
});

studentRouter.get("/:id", async (req, res) => {
  const student = await myDataSource.getRepository(Student).findOneBy({
    id: +req.params.id,
  });

  res.setHeader("content-type", "application/json").json({ data: student });
});

studentRouter.post("/", async (req, res) => {
  const newStudent = await myDataSource.getRepository(Student).create(req.body);
  await myDataSource.getRepository(Student).save(newStudent);

  console.log("new user created --", newStudent);

  res.status(200);
  res.setHeader("content-type", "application/json").json({ data: newStudent });
});

studentRouter.put("/:id", async (req, res) => {
  const updatedStudent = await myDataSource.getRepository(Student).findOneBy({
    id: +req.params.id,
  });
  myDataSource.getRepository(Student).merge(updatedStudent, req.body);
  await myDataSource.getRepository(Student).save(updatedStudent);
  res
    .setHeader("content-type", "application/json")
    .json({ data: updatedStudent });
});

studentRouter.delete("/:id", async (req, res) => {
  const result = await myDataSource
    .getRepository(Student)
    .delete(req.params.id);

  res.setHeader("content-type", "application/json").json({ data: result });
});

export default studentRouter;
