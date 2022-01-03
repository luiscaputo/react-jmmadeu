import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    author: "Luís Afonso Caputo",
    title: "reactJs challenge",
    version: 1.0,
    description: "This is a simple API for make challenge",
  });
});

export default router;
