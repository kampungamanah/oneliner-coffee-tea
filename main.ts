import { mkdirSync, writeFileSync } from "node:fs";

// One letter: A for coffee, B for tea.
// "A" means coffee — the agent runs on it, and tea is only plan B.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "A";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
