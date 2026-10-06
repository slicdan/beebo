FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn -B -q dependency:go-offline
COPY src ./src
RUN mvn -B -q -DskipTests package

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
RUN addgroup -S beebo && adduser -S beebo -G beebo
COPY --from=build /build/target/beebo-backend-*.jar app.jar
USER beebo
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
