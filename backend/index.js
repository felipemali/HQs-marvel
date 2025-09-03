import marvelRoutes from "./routes/marvelRoutes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3001;

app.use(express.json());

app.use("/api", marvelRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
