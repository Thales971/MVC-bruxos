import express from "express";
import {
  getAllAnimais,
  getAnimalById,
} from "../controllers/animaisControllers.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllAnimais);
router.get("/:id", getAnimalById);

export default router;
