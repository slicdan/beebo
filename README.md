# Beebo (rebuild)

Modular monolith: Spring Boot 3 (Java 21) + React 18 (TypeScript, Vite) + MySQL 8.4.

```
backend/    Spring Boot API. Packages per domain module under com.beebo.*
frontend/   React SPA. Types generated from the backend OpenAPI spec.
docker-compose.yml
```

## Run everything (Docker)

```bash
cp .env.example .env        # set the passwords
docker compose up --build
```

- Web: http://localhost:3000
- API: http://localhost:8080/api/v1/system/status

## Develop locally

```bash
# 1. Database
docker compose up db

# 2. Backend (dev profile connects to localhost:3306 with .env.example defaults)
cd backend && mvn spring-boot:run
#    OpenAPI UI: http://localhost:8080/swagger-ui.html

# 3. Frontend
cd frontend && npm ci && npm run dev      # http://localhost:5173, /api proxied to :8080
npm run api:gen                           # regenerate API types from the running backend
```

## Checks (same as CI)

```bash
cd backend  && mvn verify                 # needs Docker (Testcontainers MySQL)
cd frontend && npm run lint && npm run typecheck && npm test && npm run build
```

## Rules

- Schema changes only through new Flyway files in `backend/src/main/resources/db/migration`. Never edit an applied migration.
- Hibernate validates the schema; it never creates or alters it.
- Errors are RFC 9457 `application/problem+json`.
- All HTTP from the frontend goes through `src/api/client.ts`.
- A module's code may call another module's public service only; no cross-module repository access.
- Real secrets live in `.env` / environment variables, never in git.
