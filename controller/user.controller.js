import { User } from '../model/user.model.js';


export async function register(req, res, next) {
    /*
    receives - validated
        firstName, lastName, email, password
    returns 
        firstName, lastName, email
    */
    try{
        const user = new User(req.validatedData);
        await user.save();

        return res.status(201).json({
            fistName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    }
    catch(ex){
        if(ex.code === 11000){
            // duplicate email
            if(ex.keyPattern.email)
                return res.status(400).json({
                    field:'email', message: 'email is use already.'
                });
        }
        next(ex);
    }

}