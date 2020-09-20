#!/usr/bin/env node

const { argv } = require("yargs");
const example = require("../lib/example");

console.log("Executing command: " + example.goodbye());

if (argv.goodbye) {
  console.log("Goodbye argument: " + example.goodbye());
} else {
  console.log("Don't you say goodbye?");
}
