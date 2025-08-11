const express = require("express");
const getComics = require("../controllers/marvelController");

const router = express.Router();

router.get("/comics", getComics);

module.exports = router;
