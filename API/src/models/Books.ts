import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Authors } from "./Authors";
import { Categories } from "./Categories";

@Index("authorId", ["authorId"], {})
@Index("categoryId", ["categoryId"], {})
@Entity("books", { schema: "bibliotec" })
export class Books {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 250 })
  title: string;

  @Column("varchar", { name: "image", length: 500 })
  image: string;

  @Column("int", { name: "authorId" })
  authorId: number;

  @Column("varchar", { name: "releadeDate", length: 15 })
  releadeDate: string;

  @Column("int", { name: "categoryId" })
  categoryId: number;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Authors, (authors) => authors.books, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "authorId", referencedColumnName: "id" }])
  author: Authors;

  @ManyToOne(() => Categories, (categories) => categories.books, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "categoryId", referencedColumnName: "id" }])
  category: Categories;
}
