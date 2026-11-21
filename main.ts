// The World receipt — Friday, 20 November 2026 (news-image-20261120).
// This program ships the receipt image drawn for the entry: it copies
// the entry.png beside this file into the grader's output directory.
// The source path is resolved from this file's own location, not from
// the working directory, so the copy works wherever the program is run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
