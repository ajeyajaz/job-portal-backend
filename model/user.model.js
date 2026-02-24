import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { USER_ROLES } from "../constants.js";
import { roleSchema } from './role.model.js'
import { SALT_ROUDS} from '../constants.js'



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
        default: USER_ROLES.USER
    },
    preferences: {
        type: [roleSchema],
        default: null
    }
}, { timestamps:true });


// middlewares

userSchema.pre('save', async function(){
    if(this.isModified('password'))
        this.password = await bcrypt.hash(this.password, SALT_ROUDS);
});

// methods

userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken  = function(){
    return jwt.sign({_id: this._id,
        email: this.email,
        role: this.role
    },
    'mySecret', {expiresIn: "10days"});
}

export const User = mongoose.model("User", userSchema);
