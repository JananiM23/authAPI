"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sample_controller_1 = __importDefault(require("../controller/sample.controller"));
const router = (0, express_1.Router)();
const controller = new sample_controller_1.default();
router.get('/login', controller.samplefunction);
exports.default = router;
