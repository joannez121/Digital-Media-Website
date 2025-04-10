FROM eclipse-temurin:21

WORKDIR /app

# Copy the Spring Boot application JAR file into the container
# Assuming your JAR file is built into the 'target' directory and you will
# copy it into the same directory as your Dockerfile before building the image.
COPY media-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot application runs on (default is 8080)
EXPOSE 8080

# Define the command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]