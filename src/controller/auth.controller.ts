import { Request, Response } from "express";
import UserService from "../service/auth.service";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

const userService = new UserService();

export default class controller {
    login = async (req: Request, res: Response) => {
        try {
            res.send("You are logined successfully!");
            console.log("Login sucessfully");
        }
        catch(error) {
            res.send("Something went wrong...");
            return error;
        }

    }

    signUp = async (req: Request, res: Response) => {
        try{
            const { username, password } = req.body;
            const data = { username, password };
            const userDetails = await userService.create(data).then((data) => {
                res.send(returnSuccess(
                    httpStatusCode.OK,
                    "you are successfully signup!",
                    data
                ));
            });
        }
        catch(error) {
            res.send(returnError(
                httpStatusCode.BAD_REQUEST,
                "Kindly check the username and password!"
            ));
        }
    }
}