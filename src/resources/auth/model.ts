import { Schema, model } from "mongoose";
import { IUser } from "./interface";



const userSchema = new Schema<IUser> ({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    initials: {
        type: String
    },
    password: {
        type: String,
        required: true,
    }
})

export default model('User', userSchema)