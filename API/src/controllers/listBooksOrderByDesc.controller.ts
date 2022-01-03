import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { getRepository } from "typeorm";
import { Books } from "@models/Books";

class ListBooksOrderByDescController {
  async handle(req: Request<any>, res: Response<AppResponse<Books[]>>) {
    try {
      const books = getRepository(Books);

      return res.status(200).json({
        success: true,
        message: "All Books",
        data: await books.find({ order: { id: "DESC" } }),
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { ListBooksOrderByDescController };
