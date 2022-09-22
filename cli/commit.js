#!/usr/bin/env node

const fs = require("fs");

let message = fs.readFileSync(process.argv[2], "utf8");

console.log("> husky-git-emoji parse")

message = message.replace("revert:", "⏳  revert: ");
message = message.replace("build:", "📦  build: ");
message = message.replace("ci:", "🤖  ci: ");
message = message.replace("docs:", "📖  docs: ");
message = message.replace("feat:", "🌟  eat: ");
message = message.replace("fix:", "🚑  fix: ");
message = message.replace("perf:", "⚡  perf: ");
message = message.replace("refactor:", "🚧  refactor: ");
message = message.replace("style:", "💄  style: ");
message = message.replace("test:", "✅  test: ");
message = message.replace("tada:", "🎉  tada: ");

fs.writeFileSync(process.argv[2], message)