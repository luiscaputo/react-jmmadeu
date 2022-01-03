import { Router } from "express";
import { CreateBooksController } from "../controllers/createBooksController";
import { ListBooksController } from "@controllers/listBooksController";
import { ListBooksOrderByReleaseDateController } from "@controllers/listBooksOrderByReleaseDate.controller";
import { ListBooksOrderByNameController } from "@controllers/listBooksOrderByName.controller";
import { ListBooksOrderByAscController } from "@controllers/listBooksOrderAsc.controller";
import { ListBooksOrderByDescController } from "@controllers/listBooksOrderByDesc.controller";
import { DeleteBookController } from "@controllers/deleteBook.controller";

import { books } from "@middlewares/books.middleware";

const router = Router();

router.get("/books-all", new ListBooksController().handle);
router.post("/book-new", books, new CreateBooksController().handle);

router.get("/books-byName", new ListBooksOrderByNameController().handle);
router.get(
  "/books-byReleaseDate",
  new ListBooksOrderByReleaseDateController().handle
);
router.get("/books-asc", new ListBooksOrderByAscController().handle);
router.get("/books-desc", new ListBooksOrderByDescController().handle);

router.delete("/books-delete/:id", new DeleteBookController().handle);

export default router;
