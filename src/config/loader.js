import fs from "fs";
import path from "path";
import defaultConfig from "./defaultConfig.js";

export function loadConfig() {
  const configPath = path.resolve(process.cwd(), ".commitrules.json");
  if (!fs.existsSync(configPath)) return defaultConfig;

  try {
    const userConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
    return { ...defaultConfig, ...userConfig };
  } catch (e) {
    console.error("❌ Error loading config:", e.message);
    return defaultConfig;
  }
}
