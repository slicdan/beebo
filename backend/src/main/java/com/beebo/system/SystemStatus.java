package com.beebo.system;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Runtime status of the API and its database.")
public record SystemStatus(
        @Schema(example = "UP") String status,
        @Schema(example = "UP") String database,
        @Schema(description = "Latest successfully applied Flyway migration.", example = "1")
        String schemaVersion,
        @Schema(example = "0.0.1-SNAPSHOT") String version) {
}
