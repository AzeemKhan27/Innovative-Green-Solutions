# Use Node.js 18 as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]


## Other Solution

# # Use the official Node.js image as a base
# FROM node:16

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of your application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "start"]