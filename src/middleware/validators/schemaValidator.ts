import Joi from "joi";
import { appConstant } from "../../config/constant";

export default class validators {

    signUpValidator = Joi.object({
        // first_name: Joi.string().required(),
        // last_name: Joi.string().required(),
        // date_of_birth: Joi.string().required(),
        // contact_number:Joi.string().required(),
        // gender: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().default(appConstant.role[0]),
    }).options({
        abortEarly: false,
    });

    loginValidator = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }).options({
        abortEarly: false,
    });
}