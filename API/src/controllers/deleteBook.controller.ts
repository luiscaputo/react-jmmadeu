import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { Books } from "@models/Books";
import { getRepository } from "typeorm";

type IDelete = {
  id: number;
};

class DeleteBookController {
  async handle(req: Request<IDelete>, res: Response<AppResponse<string>>) {
    const booksRepository = getRepository(Books);
    try {
      const { id } = req.params;
      const remove = await booksRepository
        .createQueryBuilder()
        .delete()
        .where({
          id,
        })
        .execute();
      return res.status(200).json({
        success: true,
        message: "Deleted with Success",
        data: remove,
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { DeleteBookController };
