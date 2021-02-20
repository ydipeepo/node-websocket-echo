FROM node:latest
ENV NODE_ENV=production
ENV PORT=8000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "dist/index.js"]
