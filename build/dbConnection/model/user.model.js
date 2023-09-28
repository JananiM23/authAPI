"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    role: {
        type: String,
        required: true,
        default: "Admin"
    },
    status: {
        type: String,
        required: true,
        default: "Active"
    },
    createdTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    modifiedTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
}, {
    timestamps: true,
});
const user = (0, mongoose_1.model)("user", userSchema);
exports.default = user;
