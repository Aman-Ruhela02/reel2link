import rateLimit from "express-rate-limit";

export const reelLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25, // reduced from 60
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});
