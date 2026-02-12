export const extractVideoUrl = ($) => {
  try {
    let videoUrl =
      $("meta[property='og:video']").attr("content") ||
      $("meta[property='og:video:secure_url']").attr("content");

    if (videoUrl) return videoUrl;

    let foundUrl = null;

    $("script").each((_, el) => {
      const content = el.children?.[0]?.data;
      if (!content) return;

      const match = content.match(/"video_url":"(https:[^"]+\.mp4)"/);

      if (match?.[1]) {
        foundUrl = match[1].replace(/\\u0026/g, "&");
        return false;
      }
    });

    return foundUrl;

  } catch {
    return null;
  }
};
