import http from "node:http";

export type HealthStatus = "ok";

export function healthPayload(): { status: HealthStatus; service: string } {
  return { status: "ok", service: "skycoin-infrastructure" };
}

export function createHealthServer(): http.Server {
  return http.createServer((request, response) => {
    if (request.method !== "GET" || request.url !== "/healthz") {
      response.writeHead(404, { "content-type": "application/json" });
      response.end(JSON.stringify({ error: "not_found" }));
      return;
    }
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(healthPayload()));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT ?? 3000);
  createHealthServer().listen(port, () => console.log(`skycoin-infrastructure listening on ${port}`));
}
