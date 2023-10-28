import { Document } from "mongoose";

interface IUser extends Document {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    contact_number: string;
    gender: string;
    email: string;
    username: string;
    password: string;
    role: string;
    status: string;
    createdTime: Date;
    modifiedTime: Date;
}

export default IUser;