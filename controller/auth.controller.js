import userService from '../service/user.service.js'
import {  AUTH_ERRORS } from '../constants.js'

export async function register(req, res) {
    //receives - validated
        //firstName, lastName, email, password, role

    const user = await userService.create(req.validatedData);
    return res.status(201).json({
        success:true,
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    });


}


export async function login(req, res) {
    /*
    receives - validated
        email, password
    */
    const {email, password} = req.validatedData;
    
    const user = await userService.get({ email })
    if(!user) return res.status(404).json({
        success: false,
        message: AUTH_ERRORS.INVALID_CREDENTIALS.message,
        code: AUTH_ERRORS.INVALID_CREDENTIALS.code
    });

    // password validation
    const isValid = await userService.checkPassword(user, password)
    if(!isValid) return res.status(400).json({
        success: false,
        message: AUTH_ERRORS.INVALID_CREDENTIALS.message,
        code: AUTH_ERRORS.INVALID_CREDENTIALS.code
    });
    
    // token generation
    const token = userService.generateAccessToken(user);
  
    return res.status(200).json({
        success: true,
        token
    });
}