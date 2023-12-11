#!/bin/bash
# Use an official Node runtime as the parent image
FROM --platform=linux/amd64 node:20-alpine3.17

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json /app/
RUN npm install

COPY . /app
RUN npm run build
# about foreign language filenames
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# ENV PORT=8088
ENV CONTAINER=true
ENV VERSION=local

# default cmd when the container launches
CMD ["npm", "start"]
