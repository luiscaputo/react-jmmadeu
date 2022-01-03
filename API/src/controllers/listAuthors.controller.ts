import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { ListBooksUseCase } from "@services/listBooksUseCase.service";
import { IBooksDTO } from "@services/IBooks";
import { Books } from "@models/Books";
import { Authors } from "@models/Authors";
import { getRepository } from "typeorm";

class ListAuthorsController {
  async handle(req: Request<any>, res: Response<AppResponse<Authors[]>>) {
    try {
      const authors = getRepository(Authors);

      return res.status(200).json({
        success: true,
        message: "All Authors",
        data: await authors.find(),
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { ListAuthorsController };
