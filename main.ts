// The Funniest Honest Appliance Error — entry for make.fun bounty
// u-xvader-the-funniest-honest-appliance-error-adec4450
// SPDX-License-Identifier: MIT
//
// A washing machine confesses, in one honest line. No dependencies,
// fully deterministic: no randomness, no time, no network, no environment,
// no files read outside this repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, 1-200 characters, the appliance telling the truth.
// A washing machine owns up to the missing sock — with an error code.
const ENTRY =
  "ERROR E-404: Clean socks not found. I washed them, ate one, and I am not sorry. Remove the lint and pretend this never happened.";

const OUTPUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate the entry line: exactly one line, 1-200 characters,
// not blank, and with no embedded line breaks.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  fail(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line with no newline characters");
}

// Write exactly the entry, with no trailing newline.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Read it back and confirm it is byte-identical.
const roundTrip = readFileSync(OUTPUT_PATH, "utf8");
if (roundTrip !== ENTRY) {
  fail("round-trip check failed: file contents differ from entry");
}

// Print the entry to stdout.
console.log(ENTRY);
