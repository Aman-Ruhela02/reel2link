export const extractVideoUrl = ($) => {
  // 1️⃣ Try og:video
  let videoUrl =
    $("meta[property='og:video']").attr("content") ||
    $("meta[property='og:video:secure_url']").attr("content");

  if (videoUrl) {
    return videoUrl;
  }

  // 2️⃣ Fallback: search inside script tags
  let foundUrl = null;

  $("script").each((_, el) => {
    const scriptContent = el.children?.[0]?.data;
    if (!scriptContent) return;

    const match = scriptContent.match(
      /"video_url":"(https:[^"]+\.mp4)"/
    );

    if (match && match[1]) {
      foundUrl = match[1].replace(/\\u0026/g, "&");
      return false; // break loop
    }
  });

  return foundUrl;
};
