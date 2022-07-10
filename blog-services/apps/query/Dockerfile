FROM node:18-alpine as dev

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build query

FROM node:alpine as prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=dev /app/dist ./dist
CMD node dist/apps/query/main