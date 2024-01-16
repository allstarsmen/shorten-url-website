FROM node:20-alpine

WORKDIR /wepapp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]