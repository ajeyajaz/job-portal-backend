import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { USER_ROLES } from "../constants.js";
import { SALT_ROUDS } from '../constants.js'



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 255,
        required: true
    },
    lastName: {
        type: String,
        maxLength: 255,
        default: null
    },
    email: {
        type: String,
        maxLength: 255,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 1024,
        required: true
    },
    resume: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: USER_ROLES.USER
    },
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill",
        }
    ],

    preferredLocation: {
        type: String,
        lowercase: true,
        default: null,
    }

}, { timestamps: true });


// middlewares
userSchema.pre('save', async function () {
    if (this.isModified('password'))
        this.password = await bcrypt.hash(this.password, SALT_ROUDS);
});

// methods
userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role
    },
        process.env.JWT_SECRET_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}

export const User = mongoose.model("User", userSchema);
