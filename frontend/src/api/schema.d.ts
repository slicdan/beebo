/**
 * Hand-written seed matching the Phase 0 backend contract.
 * Overwritten by `npm run api:gen` (openapi-typescript against the running backend).
 */
export interface paths {
  "/api/v1/system/status": {
    parameters: { query?: never; header?: never; path?: never; cookie?: never };
    /** API and database status */
    get: operations["getSystemStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @description Runtime status of the API and its database. */
    SystemStatus: {
      /** @example UP */
      status?: string;
      /** @example UP */
      database?: string;
      /**
       * @description Latest successfully applied Flyway migration.
       * @example 1
       */
      schemaVersion?: string;
      /** @example 0.0.1-SNAPSHOT */
      version?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getSystemStatus: {
    parameters: { query?: never; header?: never; path?: never; cookie?: never };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: { [name: string]: unknown };
        content: { "application/json": components["schemas"]["SystemStatus"] };
      };
    };
  };
}
