import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { CreateBookUseCases } from "@services/booksUseCases.service";
import { IBooksDTO } from "@services/IBooks";
import { Books } from "@models/Books";

class CreateBooksController {
  async handle(req: Request<IBooksDTO>, res: Response<AppResponse<Books[]>>) {
    try {
      const createBooksUseCases = new CreateBookUseCases();
      const newBook = await createBooksUseCases.execute(req.body);

      return res.status(200).json({
        success: true,
        message: "Book Created with success",
        data: newBook,
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { CreateBooksController };
