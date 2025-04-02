# Use an official Node.js runtime as the base image
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project for production
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine

# Copy the Vite build output to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]