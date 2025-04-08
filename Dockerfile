From node:latest

WORKDIR api

COPY  . .

RUN rm -rf node_modules
RUN npm i
RUN npm install knex

CMD [ "node", "./index.js" ]

EXPOSE 3000