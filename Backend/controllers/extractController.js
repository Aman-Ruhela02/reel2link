import axios from "axios";
import * as cheerio from "cheerio";
import { extractLinks } from "../utils/linkExtractor.js";
import { cleanCaption } from "../utils/captionCleaner.js";
import { isRecentlyFetched, markFetched } from "../utils/requestCache.js";
import { isValidInstagramReel } from "../utils/validateReelUrl.js";
import { getRandomUA } from "../utils/userAgents.js";
import { extractVideoUrl } from "../utils/videoExtractor.js";


export const extractCaption = async (req, res) => {
  const { url } = req.body;

  // 1️⃣ Basic validation
  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Reel URL is required"
    });
  }

  // 2️⃣ Validate Instagram reel URL
  if (!isValidInstagramReel(url)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Instagram reel URL"
    });
  }

  // 3️⃣ Cache protection
  if (isRecentlyFetched(url)) {
    return res.json({
      success: true,
      cached: true,
      message: "Recently fetched. Try again later."
    });
  }

  try {
    // 4️⃣ Fetch Instagram HTML
   const { data: html } = await axios.get(url, {
  headers: {
    "User-Agent": getRandomUA(),
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.instagram.com/"
  }
});


    const $ = cheerio.load(html);

    // 5️⃣ Extract caption
    const rawCaption = $("meta[property='og:description']").attr("content");
    const caption = cleanCaption(rawCaption);

    if (!caption) {
      return res.status(404).json({
        success: false,
        message: "Caption not found"
      });
    }

    // 6️⃣ Extract links
    const links = extractLinks(caption);

    // 7️⃣ Extract video URL
    const videoUrl = extractVideoUrl($);
    
    if (!videoUrl) {
  return res.json({
    success: true,
    caption,
    links,
    videoUrl: null,
    message: videoUrl
  ? "Video available for download"
  : "Instagram restricted video download for this reel"
  });
}


    // 8️⃣ Mark as fetched (AFTER success)
    markFetched(url);

    return res.json({
      success: true,
      caption,
      links,
      videoUrl
    });

  } catch (error) {
    console.error("Instagram fetch error:", error.message);

    return res.status(503).json({
      success: false,
      message: "Failed to fetch reel data"
    });
  }
};
