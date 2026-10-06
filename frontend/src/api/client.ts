import createClient from 'openapi-fetch'
import type { paths } from './schema'

/**
 * The only place HTTP is configured. Features call `api.GET/POST/...` with
 * paths and bodies typed from the backend's OpenAPI spec.
 *
 * Phase 1 adds CSRF header injection and 401 handling here (one wrapper, no
 * raw fetch() anywhere else).
 */
export const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? window.location.origin,
  credentials: 'include',
  // Resolve fetch at call time so tests can stub it.
  fetch: (request) => globalThis.fetch(request),
})
