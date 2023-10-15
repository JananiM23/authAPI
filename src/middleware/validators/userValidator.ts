import { NextFunction, Request, Response } from "express";
import validators from "./schemaValidator";
import httpStatusCode from "http-status-codes";
import { returnError } from "../ApiResponseHandler";

const validator = new validators();

export default class userValidator {
    userSignUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const payload = req.body;
            const { error } = validator.signUpValidator.validate(payload);
            if (error) {
                const statusCode = httpStatusCode.NOT_ACCEPTABLE;
                const message = `user validation error: ${error.message}`;
                return res.json(returnError(statusCode, message));
            } else {
                next();
            }
        } catch(error: any) {
            const statusCode = httpStatusCode.BAD_REQUEST;
            const message = `Something went wrong: ${error.message}`;
            res.json(returnError(statusCode, message));
        }
    }

    userSignIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const payload = req.body;
            const { error } = validator.loginValidator.validate(payload);
            if (error) {
                const statusCode = httpStatusCode.NOT_ACCEPTABLE;
                const message = `Something went wrong: ${error.message}`;
                res.json(returnError(statusCode, message));
            } else {
                next();
            }
        } catch(error: any) {
            const statusCode = httpStatusCode.BAD_REQUEST;
            const message = `Something went wrong: ${error.message}`;
            res.json(returnError(statusCode, message));
        }
    }
    
}

