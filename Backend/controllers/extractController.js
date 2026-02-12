import axios from "axios";
import * as cheerio from "cheerio";
import { extractLinks } from "../utils/linkExtractor.js";
import { cleanCaption } from "../utils/captionCleaner.js";
import { isValidInstagramUrl } from "../utils/validateReelUrl.js";
import { getRandomUA } from "../utils/userAgents.js";
import { extractVideoUrl } from "../utils/videoExtractor.js";

/* ===============================
   Simple In-Memory Cache (1 hour)
================================= */
const reelCache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

/* ===============================
   Axios Instance (Optimized)
================================= */
const instagramClient = axios.create({
  timeout: 10000,
  maxRedirects: 5,
  headers: {
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.instagram.com/"
  }
});

export const extractCaption = async (req, res) => {
  try {
    const { url } = req.body;

    /* 1️⃣ Validate input */
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Reel URL is required"
      });
    }

    if (!isValidInstagramUrl(url)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Instagram reel URL"
      });
    }

    const normalizedUrl = url.split("?")[0];

    /* 2️⃣ Return from cache if available */
    if (reelCache.has(normalizedUrl)) {
      return res.json({
        ...reelCache.get(normalizedUrl),
        cached: true
      });
    }

    /* 3️⃣ Fetch Instagram HTML */
    const response = await instagramClient.get(normalizedUrl, {
      headers: {
        "User-Agent": getRandomUA()
      }
    });

    const html = response.data;
    const $ = cheerio.load(html);

    /* 4️⃣ Extract caption */
    const rawCaption =
      $("meta[property='og:description']").attr("content") || "";

    const caption = cleanCaption(rawCaption);

    if (!caption) {
      return res.status(404).json({
        success: false,
        message: "Caption not found"
      });
    }

    /* 5️⃣ Extract links */
    const links = extractLinks(caption);

    /* 6️⃣ Extract video URL (optional) */
    const videoUrl = extractVideoUrl($) || null;

    const result = {
      success: true,
      caption,
      links,
      videoUrl
    };

    /* 7️⃣ Store in cache */
    reelCache.set(normalizedUrl, result);

    setTimeout(() => {
      reelCache.delete(normalizedUrl);
    }, CACHE_TTL);

    return res.json(result);

  } catch (error) {
    console.error("Instagram fetch error:", error.message);

    return res.status(503).json({
      success: false,
      message: "Unable to fetch reel data. Try again later."
    });
  }
};
