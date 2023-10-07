import { Request, Response } from "express";
import generateToken from "../service/token.service";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

const token = new generateToken();

export default class tokenGenerator {
    accessToken = async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            const data = { username, password };
            const accessTokenGenerate = await token.accessToken(data).then((data) => {
                const token = { accessTokenGenerate: data};
                res.json(returnSuccess(
                    httpStatusCode.OK,
                    "Access token generated",
                    token
                ));
            })
        } catch (error) {
            console.log(error);
            res.json(returnError(
                httpStatusCode.BAD_REQUEST,
                "Token generation error"
            ));
        }
    }
}