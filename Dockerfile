# Etapa 1: Build com Maven e JDK 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copia o POM e baixa dependências
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copia o código-fonte e compila o projeto
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Runtime leve (apenas para rodar o JAR)
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/lillin-0.0.1-SNAPSHOT.jar  app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
