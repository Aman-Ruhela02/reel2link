export const extractLinks = (text) => {
  if (!text) return [];

  const regex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;

  const matches = text.match(regex) || [];

  // Normalize links (add https if missing)
  const normalized = matches.map(link =>
    link.startsWith("http") ? link : `https://${link}`
  );

  // Remove duplicates
  return [...new Set(normalized)];
};
