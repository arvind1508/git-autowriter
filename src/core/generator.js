import { applyEmoji } from "./emoji.js";

export function generateMessage(parts, config) {
  const emoji = applyEmoji(parts.type, config);
  let msg = parts.type;
  if (parts.scope) msg += `(${parts.scope})`;
  msg += `: ${parts.description.trim()}`;
  if (emoji) msg += ` ${emoji}`;
  if (parts.ticket) msg += ` (${parts.ticket})`;
  return msg;
}
