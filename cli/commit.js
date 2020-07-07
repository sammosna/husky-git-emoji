#! /usr/bin/env node

const fs = require("fs");

let message = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, "utf8");

console.log("> husky-git-emoji parse")

message = message.replace("revert:", "⏳");
message = message.replace("build:", "📦");
message = message.replace("ci:", "🤖");
message = message.replace("docs:", "📖");
message = message.replace("feat:", "🌟");
message = message.replace("fix:", "🚑");
message = message.replace("perf:", "⚡");
message = message.replace("refactor:", "🚧");
message = message.replace("style:", "💄");
message = message.replace("test:", "✅");
message = message.replace("tada:", "🎉");

fs.writeFileSync(process.env.HUSKY_GIT_PARAMS, message)