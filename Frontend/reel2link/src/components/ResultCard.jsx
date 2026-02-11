import { API_URL } from "../config/api";
import { useState } from "react";


export default function ResultCard({ result }) {
   const [copied, setCopied] = useState(false);
  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(result.caption);
      setCopied(true);

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
    copied
      ? "bg-green-600"
      : "bg-green-500 hover:bg-green-600"
  }`}
>
  {copied ? "Copied ✓" : "Copy Caption"}
</button>


      {/* INLINE AD (FUTURE) */}
      {/* <div className="mt-6 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 text-center text-sm text-gray-500">
        Sponsored content
      </div> */}

     {result.links.map((link, i) => {
  const cleanLink = link.replace(/[\"'\)\]\.,]+$/g, "");

  return (
    <li key={i}>
      <a
  href={cleanLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (window.umami) {
window.umami.track("external-link-click", {
  url: cleanLink,
});
    }
  }}
  className="text-blue-600 underline break-all"
>
  {cleanLink}
</a>

    </li>
  );
})}


      {result.videoUrl ? (
       <a
  href={`${API_URL}/api/download?url=${encodeURIComponent(result.videoUrl)}`}
  className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
  Download Reel
</a>
      ) : (
        <p className="mt-4 text-sm text-red-500">{result.message}</p>
      )}
    </div>
  );
}
