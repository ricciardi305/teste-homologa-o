FROM node:16

USER root

WORKDIR /app

COPY ["package.json", "yarnlock.json"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]