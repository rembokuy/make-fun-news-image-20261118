import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.png";
const outPath = outDir.endsWith("entry.png")
  ? outDir
  : join(outDir, "entry.png");

mkdirSync(dirname(outPath), { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), outPath);
