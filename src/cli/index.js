#!/usr/bin/env node
import chalk from "chalk";
import minimist from "minimist";
import { loadConfig } from "../config/loader.js";
import { askQuestions } from "./prompts.js";
import { generateMessage } from "../core/generator.js";
import { validateMessage } from "../core/validator.js";
import { execSync } from "child_process";
import { generateSmartCommit } from "../smart/generateSmartMessage.js";

const args = minimist(process.argv.slice(2));
const config = loadConfig();

async function run() {
  // SMART MODE
  if (args.smart) {
    const msg = generateSmartCommit();

    console.log(chalk.green("\nSmart Commit Message:"));
    console.log(chalk.blue(msg), "\n");

    if (args.commit) {
      execSync(`git commit -m "${msg.replace(/"/g, '\\"')}"`, {
        stdio: "inherit"
      });
      console.log(chalk.green("✔ Commit successful"));
    }

    return;
  }

  // Normal interactive mode
  const parts = await askQuestions(config);
  const validation = validateMessage(parts, config);
  if (!validation.ok) {
    console.log(chalk.red("❌ Error:"), validation.error);
    process.exit(1);
  }
  const finalMsg = generateMessage(parts, config);
  console.log(chalk.blue("\n" + finalMsg));

  if (args.commit) {
    execSync(`git commit -m "${finalMsg.replace(/"/g, '\\"')}"`, {
      stdio: "inherit"
    });
  }
}

run();
