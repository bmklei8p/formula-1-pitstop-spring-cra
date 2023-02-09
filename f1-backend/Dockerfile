# Fetching latest version of Java
FROM openjdk:18.0-slim

# Create JAR_FILE variable using SNAPSHOT.jar from target directory
ARG JAR_FILE=./target/formula-pitstop-0.0.1-SNAPSHOT.jar

# Exposing port 8080
EXPOSE 8080

# Copy the jar file into our app
COPY ${JAR_FILE} formula-pitstop-0.0.1-SNAPSHOT.jar

# Starting the application
ENTRYPOINT ["java", "-jar", "formula-pitstop-0.0.1-SNAPSHOT.jar"]
