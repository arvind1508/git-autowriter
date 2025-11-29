export function applyEmoji(type, config) {
  if (!config.enableEmoji) return "";
  return config.emojiMap?.[type] || "";
}
