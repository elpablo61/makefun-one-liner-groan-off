// The One-Liner Groan-Off — make.fun entry.
// Writes one original dad joke (91 characters, gate is 1-140) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dad opens the microwave at one second left every night. He says, 'I like to beat the beep.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: entry.txt must be 1-140 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, gate needs 1-140`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
