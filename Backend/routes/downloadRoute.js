import express from "express";
import { downloadReel } from "../controllers/downloadController.js";
import { reelLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.get("/download", reelLimiter, downloadReel);

export default router;
