## Étape 1 — Build React
FROM node:20-alpine AS build-front
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm install
COPY . .
RUN npm run build

## Étape 2 — Image finale : nginx uniquement (pas d'API)
FROM nginx:alpine
COPY --from=build-front /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
