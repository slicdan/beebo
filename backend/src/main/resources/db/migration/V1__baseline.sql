-- V1: baseline. No domain tables yet (Phase 1 starts with users).
-- app_meta proves Flyway wiring and gives later phases a place for schema-level facts.
CREATE TABLE app_meta (
    meta_key   VARCHAR(64)  NOT NULL,
    meta_value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (meta_key)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO app_meta (meta_key, meta_value) VALUES ('origin', 'beebo-rebuild');
