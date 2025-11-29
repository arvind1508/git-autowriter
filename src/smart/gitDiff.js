import { execSync } from "child_process";

export function getGitDiff() {
  try {
    // Read staged diff
    const diff = execSync("git diff --cached --unified=0", {
      encoding: "utf8"
    });
    return diff;
  } catch (err) {
    console.error("❌ Cannot read git diff:", err.message);
    return "";
  }
}

export function getChangedFiles() {
  try {
    const files = execSync("git diff --cached --name-only", {
      encoding: "utf8"
    })
      .split("\n")
      .filter(Boolean);

    return files;
  } catch (err) {
    console.log("❌ Cannot read changed files:", err.message);
    return [];
  }
}
