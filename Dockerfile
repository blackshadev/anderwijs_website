FROM node:20

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn global add gatsby-cli

RUN yarn install

COPY gatsby-config.js .

# Optionally, copy your .env file to the container filesystem
COPY .env.development .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
