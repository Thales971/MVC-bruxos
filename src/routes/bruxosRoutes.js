import express from "express";
import {
  getAllBruxos,
  getBruxoById,
} from "../controllers/bruxoscontrollers.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllBruxos);
router.get("/:id", getBruxoById);

export default router;
