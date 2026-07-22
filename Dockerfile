#------------- STAGE 1: Build the application -------------
# Node & nginx image version
ARG node_version=22-alpine
ARG nginx_version=1.28-alpine

# Use official Node.js image as the base image for the build stage
FROM node:${node_version} AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build


#------------- STAGE 2: Serve the application -------------
# Use official Nginx image as the base image for the production stage
FROM nginx:${nginx_version} AS production

# Delete the default Nginx static files
RUN rm /etc/nginx/conf.d/default.conf && rm -rf /usr/share/nginx/html/*

# Copy the built application from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 8080

# Set the health check for the container
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]