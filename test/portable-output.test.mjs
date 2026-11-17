import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

test("published output resolves dependencies outside the source checkout", () => {
  const isolated = mkdtempSync(path.join(tmpdir(), "laes-portable-"));
  try {
    cpSync(".output/server", path.join(isolated, "server"), { recursive: true });
    const target = pathToFileURL(path.join(isolated, "server/_libs/supabase__functions-js.mjs")).href;
    const result = spawnSync(process.execPath, ["--input-type=module", "-e", `await import(${JSON.stringify(target)});`], { cwd: isolated, encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
  } finally { rmSync(isolated, { recursive: true, force: true }); }
});
