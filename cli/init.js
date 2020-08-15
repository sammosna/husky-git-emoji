#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const child = require("child_process");

if (fs.existsSync(path.join(process.cwd(), "./package.json"))) {
    console.log("> package.json found!")
    console.log("> Installing husky")
    child.exec('npm install husky --save-dev', {}, () => {
        console.log("> Add husky config ton package.json")
        let package_json = JSON.parse(fs.readFileSync(path.join(process.cwd(), "./package.json"), "utf8"));
    
        package_json.husky = {}
        package_json.husky.hooks = {}
        package_json.husky.hooks["commit-msg"] = "npx hge-commit";
    
        console.log("> Save package.json")
        fs.writeFileSync(path.join(process.cwd(), "./package.json"), JSON.stringify(package_json, null, 4));
    
        console.log("> Installation OK!")
    });
} else {
    console.log("> package.json not found, please init your project with npm init");
}