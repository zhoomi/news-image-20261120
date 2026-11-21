// news-image-20261120 entry.
//
// This program has one job: put the finished front-page image (entry.png,
// sitting next to this file) into the grader's output directory as
// /output/entry.png. The image is a 1024x1024 PNG under 1 MiB, so it fits
// the gate as-is. The program makes no network requests and reads nothing
// else, so running it twice always writes the same bytes.
//
// Outside the grader, point it at a scratch folder instead:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outDir, 'entry.png'));
