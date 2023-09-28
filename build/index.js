"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const dbConnection_1 = __importDefault(require("./dbConnection"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Welcome to the website");
});
dbConnection_1.default.once("open", () => {
    try {
        console.log(`Database connected`);
    }
    catch (error) {
        console.log(`something went wrong`);
    }
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`, `http://localhost:${port}`);
});
app.use('/app', user_router_1.default);
