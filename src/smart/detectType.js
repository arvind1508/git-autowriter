export function detectType(diff, files) {
  const lower = diff.toLowerCase();

  // 1️⃣ Detect by file type
  for (const file of files) {
    if (file.match(/\.(css|scss|sass)$/)) return "style";
    if (file.match(/\.(md|txt)$/)) return "docs";
    if (file.match(/test|spec/)) return "test";
    if (file.includes("config")) return "chore";
  }

  // 2️⃣ Detect by folder
  for (const file of files) {
    if (file.includes("docs")) return "docs";
    if (file.includes("test")) return "test";
    if (file.includes("scripts")) return "chore";
  }

  // 3️⃣ Detect by diff changes
  const addedLines = diff.split("\n").filter(l => l.startsWith("+"));
  const removedLines = diff.split("\n").filter(l => l.startsWith("-"));

  // NEW FILE DETECTED
  if (addedLines.length > 15 && removedLines.length === 0) return "feat";

  // BIG LOGIC CHANGE → Re-write
  if (addedLines.length > 20 && removedLines.length > 20) return "refactor";

  // Mostly comments
  if (addedLines.every(l => l.trim().startsWith("+//"))) return "docs";

  // 4️⃣ Keyword-based classification (smarter)
  if (lower.includes("error") || lower.includes("fail") || lower.includes("bug"))
    return "fix";

  if (
    lower.includes("add") ||
    lower.includes("new") ||
    lower.includes("implement")
  )
    return "feat";

  if (
    lower.includes("clean") ||
    lower.includes("optimize") ||
    lower.includes("improve")
  )
    return "refactor";

  if (
    lower.includes("remove") ||
    lower.includes("delete") ||
    lower.includes("drop")
  )
    return "refactor";

  // fallback
  return "chore";
}
