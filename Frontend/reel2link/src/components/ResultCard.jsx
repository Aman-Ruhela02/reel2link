import { API_URL } from "../config/api";
import { useState } from "react";
import { trackEvent } from "../utils/analytics";

export default function ResultCard({ result }) {
  const [copied, setCopied] = useState(false);

  if (!result.success) {
    return (
      <div className="w-full max-w-2xl bg-white mt-8 p-5 sm:p-6 rounded-2xl shadow-lg text-center">
        <p className="text-red-500">
          {result.message ||
            "Unable to fetch reel/post caption. Please refresh or try again later."}
        </p>
      </div>
    );
  }

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(result.caption);
      setCopied(true);
      trackEvent("caption_copied");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white mt-8 p-5 sm:p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Caption</h2>

      <div className="bg-gray-100 p-4 rounded-xl whitespace-pre-wrap text-gray-800 text-sm sm:text-base">
        {result.caption}
      </div>

      <button
        onClick={copyCaption}
        className={`mt-4 px-4 py-2 rounded-lg text-white transition ${
          copied ? "bg-green-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {copied ? "Copied ✓" : "Copy Caption"}
      </button>

      {/* Links */}
      {result.links?.map((link, i) => {
        const cleanLink = link.replace(/[\"'\)\]\.,]+$/g, "");

        return (
          <li key={i} className="mt-3">
            <a
              href={cleanLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("external_link_click", { url: cleanLink })
              }
              className="text-blue-600 underline break-all"
            >
              {cleanLink}
            </a>
          </li>
        );
      })}

      {/* Download */}
      {result.videoUrl && (
        <a
          href={`${API_URL}/api/download?url=${encodeURIComponent(
            result.videoUrl
          )}`}
          onClick={() => trackEvent("download_reel_click")}
          className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Download Reel
        </a>
      )}
    </div>
  );
}
