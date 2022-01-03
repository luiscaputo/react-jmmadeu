import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { ListBooksUseCase } from "@services/listBooksUseCase.service";
import { IBooksDTO } from "@services/IBooks";
import { Books } from "@models/Books";

class ListBooksController {
  async handle(req: Request<IBooksDTO>, res: Response<AppResponse<Books[]>>) {
    try {
      const listBooksUseCases = new ListBooksUseCase();

      return res.status(200).json({
        success: true,
        message: "Book Created with success",
        data: await listBooksUseCases.execute(),
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { ListBooksController };
