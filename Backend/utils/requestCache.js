const cache = new Map();

export const isRecentlyFetched = (url) => {
  const lastTime = cache.get(url);
  if (!lastTime) return false;

  return Date.now() - lastTime < 5 * 60 * 1000; // 5 minutes
};

export const markFetched = (url) => {
  cache.set(url, Date.now());
};
