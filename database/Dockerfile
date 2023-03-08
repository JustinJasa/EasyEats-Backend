# Use an official MySQL 8.0 runtime as a parent image
FROM mysql:8.0

# Copy the SQL script to initialize the database to the container
COPY ./database.sql /docker-entrypoint-initdb.d/

# Expose port 3306 for MySQL connections
EXPOSE 3333