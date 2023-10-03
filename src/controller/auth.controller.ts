import { Request, Response } from "express";
import UserService from "../service/user.service";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

const userService = new UserService();

export default class controller {
    login = async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            const data = { username, password };

            const checkUser = data.username;
            const checkLogin = data;

           const findUser = await userService.getUser(checkLogin).then((data) => {
            res.send(returnSuccess(
                httpStatusCode.OK,
                "You are successfully Logined",
                checkLogin
            ));
            return data;
           });

           if (!findUser) {
            res.json(returnError(
                httpStatusCode.BAD_REQUEST, 
                "Invalid user"
                ))
           }
        }
        catch(error) {
            res.send(returnError(
                httpStatusCode.BAD_REQUEST,
                "Please check your username and password"
            ));
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
                    "you are successfully signed Up!",
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