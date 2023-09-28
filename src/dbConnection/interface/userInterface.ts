import { Document } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;
    role: string;
    status: string;
    createdTime: Date;
    modifiedTime: Date;
}

export default IUser;