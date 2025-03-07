// src/routes/searchRoutes.js
import express from "express";
import { getPizzaShops, getJuiceShops, getComboShops } from "../controllers/searchController.js";

const router = express.Router();

router.get("/pizza", getPizzaShops);
router.get("/juice", getJuiceShops);
router.get("/combo", getComboShops);

export default router;