import { ApiServiceResponse, loggerResponse } from "../@types/ApiServiceResponse";
import logger from "./logger";

export const returnSuccess = (statusCode: number, message: string, data?: [] | object) => {
    const response : ApiServiceResponse = {
        statusCode,
        response : {
            status: true,
            message,
            data
        }
    }

    const loggerResponse = {
        statusCode,
        status: true,
        message
    };

    logger.info(loggerResponse);
    return response;
}

export const returnError = (statusCode: number, message: string) => {
    const response : ApiServiceResponse = {
        statusCode,
        response: {
            status: false,
            message
        }
    }

    const loggerResponse = {
        statusCode,
        status: false,
        message
    }

    logger.error(loggerResponse);
    return response;
}