import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import logger from "@/utils/logger";

class MainController {
  healthCheck = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(
        `healthcheck ${new Date().toISOString()} , ${new Date().toLocaleString()} `
      );
      return res
        .status(HttpStatus.OK)
        .send({ status: "Ok", Date: new Date().toISOString() });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}
export default MainController;
