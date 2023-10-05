import authModel from "../dbConnection/model/user.model";
import httpStatusCode from "http-status-codes";
import { returnError } from "../middleware/ApiResponseHandler";
import userService from "./user.service";

export default class AuthService {
  checkPassword = async (data: any) => {
    try {
      const password = data.password;
      const user = await authModel
        .findOne({ username: data.username })
        .then((data) => {
          return data;
        });
      const userData = user;
      console.log("userDB data" + user);
      const checkPassword = userData?.password;
      console.log("check password : " + checkPassword);
      console.log("user entered password : " + password);
      if (password === checkPassword) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return returnError(httpStatusCode.BAD_REQUEST, "Internal error");
    }
  };
}
