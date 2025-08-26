const express = require("express");
const getComics = require("../controllers/marvelController");

const router = express.Router();

router.get("/comics", getComics);
router.get("/ping", (req, res) => {
  res.status(200).send("ping");
});

module.exports = router;
