export const isValidInstagramUrl = (url) => {
  try {
    const parsed = new URL(url);

    if (!parsed.hostname.includes("instagram.com")) {
      return false;
    }

    // Allow reel, post, tv
    const validPaths = [
      "/reel/",
      "/p/",
      "/tv/"
    ];

    return validPaths.some(path => parsed.pathname.startsWith(path));

  } catch {
    return false;
  }
};
