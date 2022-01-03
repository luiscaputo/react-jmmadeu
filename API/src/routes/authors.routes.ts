import { Router } from "express";
import { ListAuthorsController } from "@controllers/listAuthors.controller";

const router = Router();

router.get("/authors-all", new ListAuthorsController().handle);

export default router;
