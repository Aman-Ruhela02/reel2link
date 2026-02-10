import axios from "axios";
import { getRandomUA } from "../utils/userAgents.js";

export const downloadReel = async (req, res) => {
  const { url } = req.query;

  // 1️⃣ Validate input
  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Video URL is required"
    });
  }

  // 2️⃣ Basic security check (allow only Instagram CDN)
  if (!url.includes("fbcdn.net")) {
    return res.status(403).json({
      success: false,
      message: "Invalid video source"
    });
  }

  try {
    // 3️⃣ Fetch video as stream
    const response = await axios.get(url, {
      responseType: "stream",
      headers: {
        "User-Agent": getRandomUA(),
        "Referer": "https://www.instagram.com/"
      }
    });

    // 4️⃣ Set download headers
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=reel2link-video.mp4"
    );
    res.setHeader("Content-Type", "video/mp4");

    // 5️⃣ Pipe video stream to user
    response.data.pipe(res);

  } catch (error) {
    console.error("Download error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to download video"
    });
  }
};
