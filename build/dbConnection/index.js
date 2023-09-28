"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const mongodbURL = process.env.MONGO_DB_URL;
const mongodbName = process.env.MONGO_DB_NAME;
const databaseUrl = `${mongodbURL}/${mongodbName}`;
mongoose_1.default
    .connect(databaseUrl)
    .then(() => {
    console.log(`Mongo db connection successfull at host : ${databaseUrl} `);
})
    .catch((error) => {
    console.log(`db connection failed, somthing went wrong`);
});
const db = mongoose_1.default.connection;
db.on("disconnected", () => {
    console.log(`database disconnected from mongo db`);
});
exports.default = db;
