import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { validate } from "parameter-validator";

import logger from "@/utils/logger";
import { getReportbyYear } from "@/repository/salesRepo";

class SalesController {
  getReport = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const { startDate, endDate } = validate(_req?.query, [
        "startDate",
        "endDate",
      ]);
      logger.info(
        `Proceed the report Data with startDate:endDate = "${startDate}:${endDate}".`
      );

      //   Reponse the Error when the filter's not fulfill.
      if (startDate == null || endDate == null) {
        return res.status(HttpStatus.BAD_REQUEST).end();
      }

      const intStartDate = parseInt(startDate, 10);
      const intEndDate = parseInt(endDate, 10);

      const response = getReportbyYear({
        startYear: intStartDate,
        endYear: intEndDate,
      });

      return res.status(HttpStatus.OK).send({ results: response }).end();
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}
export default SalesController;
