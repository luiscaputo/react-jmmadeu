import Router from "express";
// Routes
import baseRoute from "./base.routes";
import booksRoutes from "./books.routes";
import authorsRoutes from "./authors.routes";
import categoriesRoutes from "./categories.routes";

const router = Router();

router.use(baseRoute);
router.use(booksRoutes);
router.use(authorsRoutes);
router.use(categoriesRoutes);

export default router;
