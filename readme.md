# Dashboard API

## Overview

This is a REST API server aimed at providing Sales report services. It's developed using Node.js with TypeScript.

## API Specification via `<url>/docs`

- OpenAPI Version: 3.0.0
- Title: Dashboard api
- Version: 2.0.0
- Contact:
  - Name: phukao777@gmail.com
  - URL: https://github.com/phuphalll/dashboard-be

## Objectives

The goal is to develop a Sales application with a familiar technology stack, showcasing our capabilities in handling typical backend operations such as reading, filtering report.

## Features

- List yearly basis: Abiity to list the yearly data.
- Filter yearly report: Ability to search the report by year field.

## Setup and Installation

#### Prerequisites

- Node.js (Version 20 or later recommended)
- npm (usually comes with Node.js)
- Docker (optional, for containerization)

#### Getting Started

Clone the Repository

```
git clone https://github.com/phuphalll/dashboard-be
cd dashboard-be
```

#### Install Dependencies

```
npm install
```

### Environment Setup

Create a .env file in the root directory of the project then Add the following content to it.

```
ENV_CONFIG=development
TZ=Asia/Bangkok
PORT=8080
```

#### Running the Application

- development:

  ```
  npm run dev
  ```

  This will start the application with nodemon for hot reloading.

- To build a Docker image:
  ```
   docker build -t dashboard-app:beta .
  ```
- To run the Docker container:
  ```
  docker run -p 8080:8080 dashboard-app:beta
  ```

#### Accessing the API && SWAGGER

- The application will start on http://localhost:8080 by default.
- You can access the `Swagger` documentation at http://localhost:8080/docs.

#### Additional Development Scripts

- npm start: Starts the compiled application from the dist directory.
- npm run dev: Runs the application in development mode with hot reloading.
- npm run debug: Starts the application in debug mode.
- npm run build: Compiles TypeScript files to JavaScript.
- npm run build:docker: Builds a Docker image for the application.
- npm test: Runs the test suite with Jest.

# `BIG NOTE` : I am adding a delay (using a 'sleep' function) to the 'getReport' API. This gives the caller time to display a loading indicator

```
      await new Promise((r) => setTimeout(r, 500));
```
