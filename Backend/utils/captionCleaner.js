export const cleanCaption = (text) => {
  if (!text) return "";

  return text.replace(/^.*?:\s*/, "").trim();
};
