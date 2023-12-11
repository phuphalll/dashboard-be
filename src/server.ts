/* tslint:disable no-console */

import express from "express";
import cors from "cors";
import helmet from "helmet";

import HandleHttpError from "./exceptions/handlerHttpError";
import { Routes } from "./interfaces/routeInterface";
import swaggerUi from "swagger-ui-express";
import logger from "./utils/logger";
import routeLogger from "./middlewares/routeLogger";

const bodyParser = require("body-parser");

class Server {
  app: express.Application;
  port = process.env.PORT || 8080;
  routes: Routes[] = [];
  constructor(routes: Routes[]) {
    this.app = express();
    this.app.use(bodyParser.json({ limit: "30mb" }));
    this.app.use(
      bodyParser.urlencoded({
        limit: "30mb",
        extended: true,
        parameterLimit: 50000,
      })
    );
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(helmet());
    this.app.use(routeLogger);

    this.routes = routes;
    if (process.env?.ENV_CONFIG !== "production") {
      const swaggerAp = require("./config/swaggerDoc.json");
      this.app.use(
        "/docs",
        swaggerUi.serveFiles(swaggerAp, {}),
        swaggerUi.setup(swaggerAp)
      );
    }

    this.initializeRoutes(routes);
    this.app.use(HandleHttpError);
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(
        `${process.env.API_PREFIX || ""}${route.path}`,
        route.router
      );
    });
  }

  getServer() {
    return this.app;
  }
  listen() {
    this.app.listen(this.port, async () => {
      logger.info(`=================================`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info("Routes");
      this.routes.forEach((r) => {
        logger.info(r.path);
      });
      logger.info(`=================================`);
    });
  }
}

export default Server;
