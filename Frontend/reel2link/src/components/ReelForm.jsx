import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { API_URL } from "../config/api.js";
import { trackEvent } from "../utils/analytics.js";

export default function ReelForm({ setResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!url) {
      trackEvent("invalid_url_submitted");
      return;
    }

    setLoading(true);
    setResult(null);

    trackEvent("extract_button_click");

    try {
      const res = await axios.post(`${API_URL}/api/extract`, { url });

      if (res.data.success) {
        trackEvent("caption_extracted_successfully");
      } else {
        trackEvent("caption_extraction_failed");
      }

      setResult(res.data);
    } catch {
      trackEvent("caption_extraction_error");

      setResult({
        success: false,
        message:
          "Unable to fetch reel/post caption. Please refresh the page or try again after some time.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-2xl flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="Paste Instagram reel or post URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? <Loader /> : "Extract"}
      </button>
    </form>
  );
}
