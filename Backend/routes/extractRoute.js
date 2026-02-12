import express from "express";
import { extractCaption } from "../controllers/extractController.js";


const router = express.Router();

router.post("/extract", extractCaption);

export default router;
