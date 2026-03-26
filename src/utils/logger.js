/**
 * Logs
 *
 * 
 */
import pkg from "../../package.json" with { type: "json" };

export function sayLog(message) {
  console.log("\x1b[36m[Emerson BOT | TALK]\x1b[0m", message);
}

export function inputLog(message) {
  console.log("\x1b[30m[Emerson BOT | INPUT]\x1b[0m", message);
}

export function infoLog(message) {
  console.log("\x1b[34m[Emerson BOT | INFO]\x1b[0m", message);
}

export function successLog(message) {
  console.log("\x1b[32m[Emerson BOT | SUCCESS]\x1b[0m", message);
}

export function errorLog(message) {
  console.log("\x1b[31m[Emerson BOT | ERROR]\x1b[0m", message);
}

export function warningLog(message) {
  console.log("\x1b[33m[Emerson BOT | WARNING]\x1b[0m", message);
}

export function bannerLog() {
  console.log(`\x1b[36m\x1b[0m`);
  console.log(`EMERSON BOT`);
  console.log(`\x1b[36m\x1b[0m`);
  console.log(`\x1b[36m Versão: \x1b[0m${pkg.version}\n`);
}
