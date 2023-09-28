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
const user_model_1 = __importDefault(require("../dbConnection/model/user.model"));
const ApiResponseHandler_1 = require("../middleware/ApiResponseHandler");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class userService {
    constructor() {
        this.create = (userData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_model_1.default.create(userData);
                return (0, ApiResponseHandler_1.returnSuccess)(http_status_codes_1.default.OK, "User details created successfully", userData);
            }
            catch (error) {
                return (0, ApiResponseHandler_1.returnError)(http_status_codes_1.default.BAD_REQUEST, "Something went wrong");
            }
        });
        this.getAllUser = (userData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_model_1.default.find(userData);
                return (0, ApiResponseHandler_1.returnSuccess)(http_status_codes_1.default.OK, "User details finded sucessfully", data);
            }
            catch (error) {
                return (0, ApiResponseHandler_1.returnError)(http_status_codes_1.default.BAD_REQUEST, "Something went wrong");
            }
        });
        this.deleteUser = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.updateUser = () => __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = userService;
