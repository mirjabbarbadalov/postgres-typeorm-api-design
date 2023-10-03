import { DataSource } from "typeorm";
import { Student } from "./entity/student.entity.ts";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "typeorm",
  entities: [Student],
  logging: true,
  synchronize: true,
});
