import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js'
import { User } from '../model/user.model.js'
import { AUTH_ERRORS } from '../constants.js'


class UserService{

    async get(filter){
        return await User.findOne(filter);
    }


    async create(data){
        try{
            const user = new User(data);
            return await user.save();
        }
        catch(ex){
            if(ex.code === 11000 && ex.keyPattern.email)
                throw new AppError(409, AUTH_ERRORS.EMAIL_EXISTS.message, AUTH_ERRORS.EMAIL_EXISTS.code);

            throw new AppError();
        }
    }


    async checkPassword(user, password){
        return await bcrypt.compare(password, user.password)
    }

    
    generateAccessToken(user){
        return jwt.sign({id: user._id,
                email: user.email,
                role: user.role
        },
        process.env.JWT_SECRET_KEY, {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
    }
}

export default new UserService();
