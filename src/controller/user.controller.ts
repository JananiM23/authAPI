import { Request, Response, request } from "express";
// import Service from "../service/auth.service";
// import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
// import httpStatusCode from "http-status-codes";

// const userService = new Service();

export default class controller {
    welcome = async (req: Request, res: Response) => {
        try {
            res.send("Welcome to the website!!")
            console.log("Your request is done");
        } 
        catch(error) {
            res.send(error);
            console.log("Something went wrong");
        }
    }
}