import express  from "express";
import { getGenero } from "../controllers/legacy.js"
const router = express.Router();
router.get("/:id", getGenero);

export default router;