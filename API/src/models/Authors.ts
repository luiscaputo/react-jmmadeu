import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./Books";

@Entity("authors", { schema: "bibliotec" })
export class Authors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "author", length: 250 })
  author: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", {
    name: "updatedAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => Books, (books) => books.author)
  books: Books[];
}
