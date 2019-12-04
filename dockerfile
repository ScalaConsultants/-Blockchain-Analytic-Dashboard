FROM ubuntu:18.04 as builder
WORKDIR /app
COPY . .
RUN apt-get update -yq
RUN apt-get install build-essential apt-transport-https lsb-release ca-certificates curl -yq
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs=12.13.1-1nodesource1 git libusb-1.0-0-dev libudev-dev -yq
RUN npm install yarn -g
RUN yarn install --network-timeout 900000
RUN yarn run build

FROM node:12.13.1
RUN yarn global add serve
WORKDIR /app
COPY --from=builder --chown=node /app/build .
COPY --chown=node .env /app/.env
USER node
CMD ["serve", "-s", "."]
