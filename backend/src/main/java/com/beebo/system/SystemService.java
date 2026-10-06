package com.beebo.system;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class SystemService {

    private static final Logger log = LoggerFactory.getLogger(SystemService.class);

    private final JdbcTemplate jdbc;
    private final String version;

    public SystemService(JdbcTemplate jdbc,
                         @Value("${beebo.version:unknown}") String version) {
        this.jdbc = jdbc;
        this.version = version;
    }

    public SystemStatus status() {
        try {
            List<String> versions = jdbc.queryForList(
                    "SELECT version FROM flyway_schema_history "
                            + "WHERE success = 1 AND version IS NOT NULL "
                            + "ORDER BY installed_rank DESC LIMIT 1",
                    String.class);
            String schemaVersion = versions.isEmpty() ? "none" : versions.get(0);
            return new SystemStatus("UP", "UP", schemaVersion, version);
        } catch (Exception ex) {
            log.warn("Database status check failed: {}", ex.getMessage());
            return new SystemStatus("DEGRADED", "DOWN", "unknown", version);
        }
    }
}
