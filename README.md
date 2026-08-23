# Skycoin Infrastructure

Infrastructure and DevOps support component for the SKYCOIN4444 ecosystem.

## Current repository evidence

- Public TypeScript repository on `main`.
- Docker, Docker Compose, and GitHub Actions configuration are present.
- A real HTTP `/healthz` service contract is now implemented in `src/health.ts`.
- A unit test for the health payload is present in `tests/health.test.ts`.
- Build/typecheck/test scripts now invoke real tooling rather than printing success or suppressing TypeScript failures.

## Ecosystem role

**Infrastructure / Deployment → Health & Service Operations**

This repository provides a small operational foundation that can be reused by canonical SKYCOIN4444 services. It should not become a second deployment platform or orchestration system.

## Gap filled in this pass

The repository previously contained infrastructure metadata but no verified application-level health implementation and used placeholder validation scripts. This pass added a minimal dependency-light `/healthz` endpoint and a real unit test, then replaced placeholder package scripts with TypeScript build/typecheck/test commands.

## Truthful status

- Health implementation: **present**
- Unit test: **present**
- Real build/typecheck commands: **configured**
- Canonical infrastructure integration: **pending runtime/CI verification**
- Deployment: **not verified**
- Production readiness: **not claimed**

## Consolidation approach

Preserve useful Docker, CI, and operational configuration. Compare this repository with the larger infrastructure/deployment repositories and canonical production stack. Promote the strongest verified health, deployment, observability, and operational patterns into the canonical infrastructure boundary rather than maintaining parallel systems.

For missing infrastructure capabilities, prefer mature public open-source foundations (for example established reverse proxies, orchestrators, observability systems, or IaC tooling) after reviewing maintenance, security, compatibility, and licenses. Do not copy large external codebases merely to increase repository size.

## Verification required before production

Run `npm ci`, `npm run build`, `npm run typecheck`, and `npm test` in CI; verify the `/healthz` endpoint in a deployed environment; then add authenticated service checks, observability, secrets management, backups, rollback procedures, TLS, and deployment evidence appropriate to the canonical platform.

## License

MIT, subject to the checked-in license and applicable third-party dependency licenses.
