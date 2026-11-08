// Keeps the shared parts (head, header, footer, dialog, partner form) identical on every page.
// Edit a file in /partials, then run:  node tools/sync.mjs
// Each page holds an empty marker pair, for example:  <!--@header--><!--@/header-->
// The script fills (or refreshes) whatever sits between a marker pair that has a matching partial.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const partialsDir = path.join(root, "partials");

const parts = {};
for (const f of fs.readdirSync(partialsDir)) {
  if (f.endsWith(".html")) parts[f.slice(0, -5)] = fs.readFileSync(path.join(partialsDir, f), "utf8").trim();
}
// One level of {{include}} inside partials (the dialog embeds the partner form).
for (const k of Object.keys(parts)) {
  parts[k] = parts[k].replace(/\{\{([\w-]+)\}\}/g, (_, n) => parts[n] ?? "");
}

let changed = 0;
for (const page of fs.readdirSync(root).filter((f) => f.endsWith(".html"))) {
  const file = path.join(root, page);
  const src = fs.readFileSync(file, "utf8");
  const out = src.replace(/<!--@([\w-]+)-->[\s\S]*?<!--@\/\1-->/g, (m, name) =>
    parts[name] === undefined ? m : `<!--@${name}-->\n${parts[name]}\n<!--@/${name}-->`
  );
  if (out !== src) {
    fs.writeFileSync(file, out);
    changed++;
    console.log("synced", page);
  }
}
console.log(changed ? `Done. ${changed} page(s) updated.` : "Everything already in sync.");
