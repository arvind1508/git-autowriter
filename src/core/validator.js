export function validateMessage(parts, config) {
  if (!config.types.includes(parts.type)) {
    return { ok: false, error: `Invalid type: ${parts.type}` };
  }
  if (!parts.description || parts.description.trim().length < 3) {
    return { ok: false, error: "Description too short" };
  }
  if (parts.description.length > config.maxLength) {
    return { ok: false, error: `Description exceeds ${config.maxLength} chars` };
  }
  return { ok: true };
}
