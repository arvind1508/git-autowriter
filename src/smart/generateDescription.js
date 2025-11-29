export function generateDescription(diff, files) {
  const f = files[0] || "";

  // Detect specific file names (more accurate)
  if (f.includes("auth")) return "update authentication logic";
  if (f.includes("user")) return "update user module";
  if (f.includes("payment")) return "update payment workflow";
  if (f.includes("cart")) return "update cart functionality";

  const added = diff.split("\n").filter(l => l.startsWith("+"));
  const removed = diff.split("\n").filter(l => l.startsWith("-"));

  if (added.length && removed.length) {
    return "revise implementation and modify behavior";
  }

  if (added.length > 10) return "add major functionality";
  if (added.length > 0) return "add new changes";

  if (removed.length > 10) return "remove outdated logic";
  if (removed.length > 0) return "clean up unused code";

  return "update code structure";
}
