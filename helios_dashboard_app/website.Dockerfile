FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node/node_modules/.bin:$PATH

COPY package-docker.json ./package.json

COPY package-lock.json ./

RUN npm install

RUN npm install react-scripts@4.0.3

RUN npm install node --reinstall-packages-from=node

COPY . .

COPY package-docker.json ./package.json

CMD ["npm", "start"]
