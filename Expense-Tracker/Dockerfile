# Step:1  use node image
FROM node:24.7.0

# Step:2  set working directory
WORKDIR /app

# Step:3  copy project files from local machin eto container
COPY . .

# Step:4  install dependencies
COPY package*.json ./
RUN npm install

# Step 5: Expose port (Vite or CRA dev server usually runs on 5173 or 3000)
EXPOSE 9000

# Step 6: Default command to run development server
CMD ["npm", "run", "dev"]