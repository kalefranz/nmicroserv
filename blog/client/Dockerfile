# docker image build -t kalefranz/client:0.1.0 .
FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
