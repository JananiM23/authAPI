import { ApiServiceResponse } from "../@types/ApiServiceResponse";

export const returnSuccess = (statusCode: number, message: string, data?: [] | object) => {
    const response : ApiServiceResponse = {
        statusCode,
        response : {
            status: true,
            message,
            data
        }
    }
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
    return response;
}