import assert from "node:assert/strict";
import test from "node:test";
import { healthPayload } from "./health";

test("health payload identifies the infrastructure service", () => {
  assert.deepEqual(healthPayload(), { status: "ok", service: "skycoin-infrastructure" });
});
