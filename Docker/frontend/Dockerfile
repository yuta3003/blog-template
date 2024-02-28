# Stage to install the package
FROM node:20.11.1 as desp-stage
WORKDIR /app

COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install --production

# Stage to execute build
FROM node:20.11.1 as build-stage
WORKDIR /app

COPY ./frontend ./
RUN yarn install

RUN yarn lint
RUN yarn format

RUN yarn build

# Stage to be executed
FROM node:20.11.1 as runtime-stage
WORKDIR /app

ENTRYPOINT ["yarn"]
CMD []
