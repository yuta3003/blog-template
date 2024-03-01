# Stage to install the package
FROM node:20.11.1 as deps-stage
WORKDIR /app

COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install --production

# Stage to execute build
FROM node:20.11.1 as build-stage
WORKDIR /app

COPY ./frontend /app
RUN yarn install

RUN yarn build

# Stage to be executed
FROM node:20.11.1 as runtime-stage
WORKDIR /app

COPY ./frontend/package.json ./frontend/yarn.lock ./
COPY --from=deps-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public

ENTRYPOINT ["yarn"]
CMD ["start"]
