import { Repository, getRepository } from "typeorm";
import { Books } from "@models/Books";

class ListBooksUseCase {
  async execute() {
    try {
      const booksRepository = getRepository(Books);
      const books = await booksRepository.find({
        relations: ["author", "category"],
        take: 8,
      });
      if (books.length == 0) {
        throw new Error("Table Books is Void");
      }

      return books;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export { ListBooksUseCase };
