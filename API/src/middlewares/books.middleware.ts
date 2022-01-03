import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { NextFunction, Request, Response } from "express";
import { Books } from "@models/Books";
import { IBooksDTO } from "@services/IBooks";

export const books = async (
  req: Request<IBooksDTO>,
  res: Response<AppResponse<Books[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    title: Yup.string().required("Please can you inform book title"),
    authorId: Yup.string().required("Please can you inform book author"),
    categoryId: Yup.string().required("Please can you inform book catefory"),
    releaseDate: Yup.string().required(
      "Please can you inform book release Date"
    ),
  });
  await showError(req, res, next, schema);
};
