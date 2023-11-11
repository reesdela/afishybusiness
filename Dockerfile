FROM node:18.16.0 AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json .

RUN npm install

VOLUME [ "/app/src" ]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]