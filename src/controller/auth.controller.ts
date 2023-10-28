import { Request, Response } from "express";
import UserService from "../service/user.service";
import AuthService from "../service/auth.service";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";
import user from "../dbConnection/model/user.model";
import generateToken from "../service/token.service";
import { stat } from "fs";

const userService = new UserService();
const authService = new AuthService();
const jwtToken = new generateToken();

export default class controller {
  signIn = async (req: Request, res: Response) => {
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
      const data = req.body;
      const userEmail = data.username;

      const findUser: any = await userService.getUser(userEmail).then((data) => {
        return data;
      });

      if (findUser) {
        const statusCode = httpStatusCode.FORBIDDEN;
        const message = "Already user exist....So login please";
        res.json(returnError(statusCode, message));
      } else {
        const userData: any = await userService.create(data).then((data) => {
          const response = data;
          if (!response){
            return `Something went wrong in user accout creation`;
          } else {
            return response;
          }
        });

        const message = "User signUp successfull";
        const statusCode = httpStatusCode.OK;
        const resData = userData;
        res.json(returnSuccess(statusCode, message, resData));
      }
    }
    catch(error) {
      const message = "User signUp failed";
      const statusCode = httpStatusCode.BAD_REQUEST;
      res.json(returnError(statusCode, message));
    }
  }
}
  // signUp = async (req: Request, res: Response) => {
  //   try {
  //     const { username, password, email } = req.body;
  //     const data = { username, password, email };
  //     const isExists = await authService.isEmailExists(req.body.email);
  //     console.log(isExists);
  //     if (isExists.response.status) {
  //       try {
  //       const userDetails = await userService.getUser(data).then((data) => {
  //       res.send(
  //         returnSuccess(
  //           httpStatusCode.OK,
  //           "you are successfully created a account"
  //         )
  //       );
  //     });
  //     } catch (error) {
  //         res.send(
  //           returnError(
  //             httpStatusCode.BAD_REQUEST,
  //             "something went wrong"
  //           )
  //         );
  //       }
  //     } else {
  //       try {
  //         const userDetails = await userService.create(data).then((data) => {
  //           res.send(
  //             returnSuccess(
  //               httpStatusCode.OK,
  //               "you are successfully created a account",
  //               data
  //             )
  //         )})
  //       } catch {
  //         res.send(
  //           returnError(
  //             httpStatusCode.BAD_REQUEST,
  //             "something went wrong"
  //           )
  //         );
  //       }
  //     }
  //   } catch (error) {
  //     res.send(
  //       returnError(
  //         httpStatusCode.BAD_REQUEST,
  //         "Kindly check the username and password!"
  //       )
  //     );
  //   }
  // };
// }
