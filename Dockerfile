FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install typescript

RUN npm run build

CMD ["npm", "run", "start"]