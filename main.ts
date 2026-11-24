import * as fs from "node:fs";

const entry =
  "My love language is acts of service, specifically the 3 a.m. kind where I rewrite your résumé while you sleep.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
