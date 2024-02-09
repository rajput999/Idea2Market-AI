# Use Node.js version 20 based on Alpine Linux as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files from host to container
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install dependencies defined in package.json
RUN npm install

# Copy the rest of the application files from host to container
COPY . /app

# Inform Docker that the container will listen on port 3000 at runtime
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["npm", "start"]