const marvelRoutes = require("./routes/marvelRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 3001;

app.use(express.json());

app.use("/api", marvelRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
