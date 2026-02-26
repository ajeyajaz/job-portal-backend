import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js'
import userRepository from '../repository/user.repository.js';


class UserService{

    async get(filter){
        const user = await userRepository.get(filter);
        if(!user) 
            throw new AppError(404, 'User not found.');
        return user;
    }


    async create(data){
        try{
            return await userRepository.create(data);
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
