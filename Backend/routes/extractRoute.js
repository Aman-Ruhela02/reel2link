import express from "express";
import { extractCaption } from "../controllers/extractController.js";
import { requestDelay } from "../middleware/requestDelay.js";

const router = express.Router();

router.post("/extract", requestDelay, extractCaption);

export default router;
