"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstString = (0, readline_sync_1.question)('Enter first number:/n');
    console.log(firstString);
}
main();
