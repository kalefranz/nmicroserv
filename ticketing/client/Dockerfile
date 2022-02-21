# docker build -t kalefranz/client:0.0.1 .
FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "dev"]
