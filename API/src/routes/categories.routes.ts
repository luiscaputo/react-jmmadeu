import { Router } from "express";
import { ListCategoriesController } from "@controllers/listCategories.controller";

const router = Router();

router.get("/categories-all", new ListCategoriesController().handle);

export default router;
