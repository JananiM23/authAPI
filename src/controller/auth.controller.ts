import { Request, Response } from "express";
import UserService from "../service/user.service";
import AuthService from "../service/auth.service";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";
import user from "../dbConnection/model/user.model";
import generateToken from "../service/token.service";

const userService = new UserService();
const authService = new AuthService();
const jwtToken = new generateToken();

export default class controller {
  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };

      const checkUser = data.username;
      const checkLogin = data;

      const findUser = await userService.getUser(checkUser).then((data) => {
        return data;
      });

      const userResponse = findUser;
      console.log(`user:`,userResponse);

      const findPassword = await authService.checkPassword(checkLogin).then((data) => {
            return data;
        });

        const userPassword = findPassword;
        console.log(`password:`, userPassword);

      if (!findUser) {
        res.json(returnError(httpStatusCode.BAD_REQUEST, "Invalid user"));
      }

      if (!findPassword) {
        res.json(returnError(httpStatusCode.BAD_REQUEST, "Invalid password"));
      }

      if (findUser === true && findPassword === true) {
        // const resData = await userService.getUser(checkUser).then((data) => {
        //   return data;
        // });

        const accessTokenGenerate = await jwtToken.accessToken(data).then((accessData) => {
          return accessData;
        });

        const refreshTokenGenerate = await jwtToken.refreshToken(data).then((refreshData) => {
          return refreshData;
        });

        const token = {
          accessTokenGenerate: accessTokenGenerate,
          refreshTokenGenerate: refreshTokenGenerate
        };

        const resData = token;
        res.json(returnSuccess(httpStatusCode.OK, "Login successfully", resData ));
      }
    } catch (error) {
      res.send(
        returnError(
          httpStatusCode.BAD_REQUEST,
          "Please check your username and password"
        )
      );
      return error;
    }
  };

  signUp = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const data = { username, password };
      const userDetails = await userService.create(data).then((data) => {
        res.send(
          returnSuccess(
            httpStatusCode.OK,
            "you are successfully created a account",
            data
          )
        );
      });
    } catch (error) {
      res.send(
        returnError(
          httpStatusCode.BAD_REQUEST,
          "Kindly check the username and password!"
        )
      );
    }
  };
}
