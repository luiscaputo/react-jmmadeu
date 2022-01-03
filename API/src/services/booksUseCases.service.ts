import { Repository, getRepository } from "typeorm";
import { Books } from "@models/Books";
import { IBooksDTO } from "./IBooks";
import { Authors } from "@models/Authors";
import { Categories } from "@models/Categories";

class CreateBookUseCases {
  async execute(book: IBooksDTO) {
    try {
      const booksRepository = getRepository(Books);
      const authorRepository = getRepository(Authors);
      const categoryRepository = getRepository(Categories);

      const verifyTitle = await booksRepository.findOne(book.title);
      if (verifyTitle) {
        throw new Error("This book already Exist");
      }

      const verifyAuthor = await authorRepository.findOne(book.authorId);
      if (!verifyAuthor) {
        throw new Error("Invalid author id");
      }

      const verifyCategory = await categoryRepository.findOne(book.categoryId);
      if (!verifyCategory) {
        throw new Error("Invalid Categorie");
      }
      const newBook = new Books();

      newBook.title = book.title;
      newBook.authorId = book.authorId;
      newBook.categoryId = book.categoryId;
      newBook.image = book.image;
      newBook.releadeDate = book.releaseDate;

      return booksRepository.save(newBook);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export { CreateBookUseCases };
