import * as fs from "node:fs";

// One letter settles the morning question: A for coffee, B for tea.
// "A" wins: the agent runs on coffee, and tea is only plan B.
// The file must end exactly at the last character of the line: no newline is appended.
// The choice is final — coffee, in a single letter.
const entry = "A";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
