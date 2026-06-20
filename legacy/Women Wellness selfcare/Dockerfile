FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the application
RUN npm run build

FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Clean the directory before copying
RUN rm -rf ./*

# Copy built files to the subfolder only to keep paths clean
COPY --from=builder /app/out /usr/share/nginx/html/women_wellness_selfcare

# Copy the custom nginx config
COPY next-nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
