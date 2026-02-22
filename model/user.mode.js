import mongoose from "mongoose";
import { ROLES } from "../constants";
import { roleSchema } from './role'


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 255,
        required: true
    },
    lastName: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required:true,
        maxLength: 255
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 1024,
        required: true
    },
    resume: {
        type:String,
        default: null
    },
    role:{
        type:String,
        default: ROLES.USER
    },
    preferences: {
        type: [roleSchema],
        default: null
    }
}, { timestamps:true });

export const User = mongoose.model("User", userSchema);