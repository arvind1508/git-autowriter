import { getGitDiff, getChangedFiles } from "./gitDiff.js";
import { detectType } from "./detectType.js";
import { detectScope } from "./detectScope.js";
import { generateDescription } from "./generateDescription.js";
import { generateMessage } from "../core/generator.js";
import { loadConfig } from "../config/loader.js";

export function generateSmartCommit() {
  const config = loadConfig();

  const diff = getGitDiff();
  const files = getChangedFiles();

const type = detectType(diff, files);
const scope = detectScope(files);
const description = generateDescription(diff, files);


  return generateMessage({ type, scope, description }, config);
}
