import express from "express";
import getComics from "../controllers/marvelController.js";

const router = express.Router();

router.get("/comics", getComics);
router.get("/ping", (req, res) => {
  res.status(200).send("ping");
});

export default router;
