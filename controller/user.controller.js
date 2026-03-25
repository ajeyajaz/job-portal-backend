import { AUTH_ERRORS } from '../constants.js';
import userService from '../service/user.service.js'


export async function me(req, res) {

    const user = await userService.get({_id: req.user.id});
     if(!user) return res.status(404).json({
        success: false,
        message: AUTH_ERRORS.USER_NOT_FOUND.message,
        code: AUTH_ERRORS.USER_NOT_FOUND.code
    });

    return res.status(200).json({
        success: true,
        data: { 
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            resume: user.resume,
            role: user.role,
            skills: user.skills,
            preferredLocation: user.preferedLocation
        } 
    });
}