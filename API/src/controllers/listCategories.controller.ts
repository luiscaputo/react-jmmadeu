import { Request, Response } from "express";
import { AppResponse } from "../@types/";
import { getRepository } from "typeorm";
import { Categories } from "@models/Categories";

class ListCategoriesController {
  async handle(req: Request<any>, res: Response<AppResponse<Categories[]>>) {
    try {
      const categories = getRepository(Categories);

      return res.status(200).json({
        success: true,
        message: "All Categories",
        data: await categories.find(),
      });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message });
    }
  }
}

export { ListCategoriesController };
