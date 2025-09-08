import express from "express";
import { getAllPocoes, getPocaoById  } from "../controllers/pocoesControllers.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllPocoes);
router.get("/:id",getPocaoById);

export default router;