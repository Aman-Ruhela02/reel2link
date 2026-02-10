export const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  "Mozilla/5.0 (Linux; Android 13)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
];

export const getRandomUA = () =>
  userAgents[Math.floor(Math.random() * userAgents.length)];
