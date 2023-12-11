import logger from "@/utils/logger";
import { NextFunction, Request, Response } from "express";

const routeLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Endpoint: ${req.url}, Method: ${req.method} called.`);
  next();
};

export default routeLogger;
