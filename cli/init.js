#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const child = require("child_process");
const pm = require("../inc/pm")();
const version = require("../package.json").version;

console.log(`> using ${pm} to install dependencies`);

if (fs.existsSync(path.join(process.cwd(), "./package.json"))) {
    console.log("> package.json found!")
    console.log("> Installing husky")
    child.exec(`${pm} install husky --save-dev`, {}, () => {
        let package_json = JSON.parse(fs.readFileSync(path.join(process.cwd(), "./package.json"), "utf8"));
        if (!package_json["husky-git-emoji-version"] || package_json["husky-git-emoji-version"] !== version) {
            
            child.execSync(`${pm} husky install`);
            child.execSync(`${pm} husky add .husky/commit-msg "npx hge-commit"`);
            
            
            
            package_json["husky-git-emoji-version"] = version;
            console.log("> Save package.json")
            fs.writeFileSync(path.join(process.cwd(), "./package.json"), JSON.stringify(package_json, null, 4));

            console.log("> Installation OK!")
        }
    });
} else {
    console.log("> package.json not found, please init your project with npm init");
}