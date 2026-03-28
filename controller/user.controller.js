import { AUTH_ERRORS } from '../constants.js';
import userService from '../service/user.service.js'
import errorResponse from '../utils/errorResponse.js'


export async function me(req, res) {

    const user = await userService.get({_id: req.user.id});
     if(!user) 
        return errorResponse(
            res,
            404, 
            AUTH_ERRORS.USER_NOT_FOUND.message,
            AUTH_ERRORS.USER_NOT_FOUND.code
        )

    return res.status(200).json({
        success: true,
        data: { 
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            resume: user.resume,
            role: user.role,
            skills: user.skills,
            preferredLocation: user.preferredLocation
        } 
    });
}