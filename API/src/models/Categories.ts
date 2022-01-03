import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./Books";

@Entity("categories", { schema: "bibliotec" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "category", length: 250 })
  category: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", {
    name: "updatedAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => Books, (books) => books.category)
  books: Books[];
}
