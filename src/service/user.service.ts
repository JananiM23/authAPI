import user from "../dbConnection/model/user.model";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

export default class userService {
    create = async (userData: any) => {
        try {
            console.log(userData);
            const data = await user.create(userData);
            return returnSuccess(
                httpStatusCode.OK, 
                "User details created successfully",
                data
                );
        } catch (error) {
            return returnError(
                httpStatusCode.BAD_REQUEST,
                "Something went wrong"
                );
        }
    }

    getAllUser = async (userData: any) => {
        try {
            const data = await user.find(userData);
        return returnSuccess(
            httpStatusCode.OK,
            "User details finded sucessfully",
            data
        );
        } catch (error) {
            return returnError(
                httpStatusCode.BAD_REQUEST,
                "Something went wrong"
            );
        }
    }

    getUser = async (data: any) => {
        try {
            const userCheck = await user.findOne({
                username: data
            });
            if(!userCheck) {
                return false;
            }else{
                return true;
            }
        }catch(error) {
            return returnError(
                httpStatusCode.BAD_REQUEST,
                "Something went wrong"
            );
        }
    }
}
