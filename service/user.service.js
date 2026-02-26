import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';
import AppError from '../utils/AppError.js'


class UserService{

    async get(filter){
        const user =  await User.findOne(filter);
        if(!user) throw new AppError(404, 'User not found.')
        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            role: user.role,
            skills: user.skills,
            preferedLocation: user.preferedLocation
        }
    }

    async create(data){
        try{
            const user = new User(data);
            await  user.save();

            return {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            };
        }
        catch(ex){
            if(ex.code === 11000 && ex.keyPattern.email)
                throw new AppError(409, 'email already registered.');

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
