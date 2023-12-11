import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { ParameterValidationError } from "parameter-validator";
import { DataError, DatabaseError } from "node-json-db";

import Exception from "./exception";
import ErrorCode from "./errorCode";
import logger from "../utils/logger";

interface IException {
  errorCode: string;
  errorDescription: string;
  params: any;
}

export function HandleHttpError(
  error: Error | IException | any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (
    error.errorCode === ErrorCode.DATABASE_ERROR ||
    error instanceof DataError ||
    error instanceof DatabaseError
  ) {
    logger.error(
      JSON.stringify({
        severity: "ERROR",
        message: error.message,
        serverDetails: {
          method: request.method,
          url: request.url,
          headers: request.headers,
          params: request.params,
        },
        errorCode: error.errorCode,
        errorMessage: error.errorDescription,
        errorDefault: error,
      })
    );
    const exception = new Exception(
      ErrorCode.DATABASE_ERROR,
      "An internal(DB) error occur please see the backend log for more detail."
    );
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(exception);
  } else if (error instanceof ParameterValidationError) {
    logger.error(
      JSON.stringify({
        severity: "ERROR",
        message: error,
        serverDetails: {
          method: request.method,
          url: request.url,
          headers: request.headers,
          params: request.params,
        },
        errorMessage: error.message,
      })
    );

    const exception = new Exception(ErrorCode.MISSING_FIELD, error.message);
    return response.status(HttpStatus.BAD_REQUEST).send(exception);
  } else if (error) {
    logger.error(
      JSON.stringify({
        severity: "ERROR",
        message: error,
        serverDetails: {
          method: request.method,
          url: request.url,
          headers: request.headers,
          params: request.params,
        },
        errorMessage: error.message,
      })
    );

    const exception = new Exception(
      ErrorCode.INTERNAL_SERVIER_ERROR,
      "An internal error occur please see the backend log for more detail."
    );
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(exception);
  } else {
    next();
  }
}

export default HandleHttpError;
