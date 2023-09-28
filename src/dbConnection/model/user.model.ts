import { Schema, model } from "mongoose";
import IUser from "../interface/userInterface";

const userSchema = new Schema<IUser>(
    {
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
    },
    {
        timestamps: true,
    }
);

const user = model<IUser>("user", userSchema);

export default user;