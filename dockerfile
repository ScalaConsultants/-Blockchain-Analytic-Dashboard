FROM ubuntu:18.04 as builder
WORKDIR /app
COPY . .
RUN apt-get update -yq
RUN apt-get install nodejs npm git libusb-1.0-0-dev libudev-dev -yq
RUN npm install yarn -g
RUN yarn install --network-timeout 600000
RUN yarn run build

FROM node:12.13.1
RUN yarn global add serve
WORKDIR /app
COPY --from=builder --chown=node /app/build .
COPY --chown=node .env /app/.env
USER node
CMD ["serve", "-s", "."]
