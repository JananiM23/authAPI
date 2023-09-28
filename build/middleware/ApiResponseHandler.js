"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnError = exports.returnSuccess = void 0;
const returnSuccess = (statusCode, message, data) => {
    const response = {
        statusCode,
        response: {
            status: true,
            message,
            data
        }
    };
    return response;
};
exports.returnSuccess = returnSuccess;
const returnError = (statusCode, message) => {
    const response = {
        statusCode,
        response: {
            status: false,
            message
        }
    };
    return response;
};
exports.returnError = returnError;
