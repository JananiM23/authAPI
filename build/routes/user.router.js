"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const router = (0, express_1.Router)();
const controller = new user_controller_1.default();
router.get('/login', controller.login);
router.post('/signUp', controller.signUp);
exports.default = router;
