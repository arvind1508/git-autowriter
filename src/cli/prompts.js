import inquirer from "inquirer";

export async function askQuestions(config) {
  return inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "Select commit type:",
      choices: config.types
    },
    {
      type: "input",
      name: "scope",
      message: "Scope (optional):"
    },
    {
      type: "input",
      name: "description",
      message: "Description:"
    },
    {
      type: "input",
      name: "ticket",
      message: "Ticket ID (optional):"
    }
  ]);
}
