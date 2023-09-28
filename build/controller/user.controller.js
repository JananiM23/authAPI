"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../service/user.service"));
const ApiResponseHandler_1 = require("../middleware/ApiResponseHandler");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const userService = new user_service_1.default();
class sampleController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("You are logined successfully!");
                console.log("Login sucessfully");
            }
            catch (error) {
                res.send("Something went wrong...");
                return error;
            }
        });
        this.signUp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const data = { username, password };
                const userDetails = yield userService.create(data).then((data) => {
                    res.send((0, ApiResponseHandler_1.returnSuccess)(http_status_codes_1.default.OK, "you are successfully signup!", data));
                });
            }
            catch (error) {
                res.send((0, ApiResponseHandler_1.returnError)(http_status_codes_1.default.BAD_REQUEST, "Kindly check the username and password!"));
            }
        });
    }
}
exports.default = sampleController;
