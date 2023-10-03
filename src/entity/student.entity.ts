import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_name: string;

  @Column()
  student_lastname: string;
}
