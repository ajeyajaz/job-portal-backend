import jwt from 'jsonwebtoken';
import { AUTH_ERRORS } from '../constants.js';

export const auth = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(404).json({
        success: false,
        code: AUTH_ERRORS.NO_TOKEN.code,
        message: AUTH_ERRORS.NO_TOKEN.message
    });

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = payload;
        next();
    }
    catch(ex){
        return res.status(400).json({
            success: false,
            code: AUTH_ERRORS.TOKEN_EXPIRED.code,
            message: AUTH_ERRORS.TOKEN_EXPIRED.message
        });
    }
}