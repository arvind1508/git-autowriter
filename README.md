# git-autowriter

A small CLI that generates conventional-style git commit messages — use locally or install globally.

This README is focused on end users who install the package from npm.

Install via npm or run without installing using `npx`.

## Install

Globally (recommended for CLI usage):

```bash
npm install -g git-autowriter
```

Or install as a dev dependency in a project:

```bash
npm install --save-dev git-autowriter
```

Run temporarily with `npx` (no install required):

```bash
npx git-autowriter --smart
```

## Quick Usage

Show help and available flags:

```bash
git-autowriter --help
```

Run the interactive prompt (default):

```bash
git-autowriter
```

Auto-generate a commit message (smart mode):

```bash
git-autowriter --smart
```

Auto-generate and create a git commit using the generated message:

```bash
git-autowriter --smart --commit
```

Notes:
- `--smart` generates a message automatically using repository diff heuristics.
- `--commit` runs `git commit -m "<message>"` — ensure you are in a git repo and staged changes exist.

## Commands and Flags

- `--help` : show help and options
- `--smart` : auto-generate a commit message from staged/uncommitted changes
- `--commit` : run `git commit -m "<generated message>"`

## Examples

Print a generated message:

```bash
$ git-autowriter --smart
Smart Commit Message:
feat(parser): add support for emoji parsing
```

Generate and commit:

```bash
$ git-autowriter --smart --commit
✔ Commit successful
```

## Troubleshooting

- If `git-autowriter` is not found after global install, ensure your npm global bin is on `PATH`.
- If `--commit` fails, check that git is installed, you're in a repository, and changes are staged.

## License

MIT
