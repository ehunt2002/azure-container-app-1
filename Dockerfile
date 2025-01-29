# Use Node.js official image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
