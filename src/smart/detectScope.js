export function detectScope(files) {
  if (!files.length) return null;

  // Try folder name
  const first = files[0];

  if (first.includes("/")) {
    return first.split("/")[0]; // folder name
  }

  // Try filename without extension
  const name = first.split(".")[0];
  return name;
}
