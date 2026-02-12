import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import extractRoute from "./routes/extractRoute.js";
import { reelLimiter } from "./middleware/rateLimiter.js";
import downloadRoute from "./routes/downloadRoute.js";
import helmet from "helmet";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",          // dev frontend
  "https://reel2link.site",   // prod frontend (update later)
];

// Middlewares
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use("/api", extractRoute);
app.use("/api/reel", reelLimiter);
app.use("/api", downloadRoute);

app.get("/", (req, res) => {
  res.send("Reel2Link Backend is running 🚀");
});

//cron hack logic
app.get("/ping", (req, res) => {
  res.status(200).send("Server is awake");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
