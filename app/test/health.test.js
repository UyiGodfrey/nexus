const test = require("node:test");
const assert = require("node:assert");
const app = require("../src/server");

let server;

test.before(() => {
  server = app.listen(0);
});

test.after(() => {
  server.close();
});

test("health endpoint should report healthy status", async () => {
  const port = server.address().port;

  const response = await fetch(`http://localhost:${port}/health`);

  assert.strictEqual(response.status, 200);

  const body = await response.json();

  assert.strictEqual(body.status, "healthy");
});