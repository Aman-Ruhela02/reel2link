export const isValidInstagramReel = (url) => {
  return /^https?:\/\/(www\.)?instagram\.com\/reel\//.test(url);
};
