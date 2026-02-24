import { User } from '../model/user.model.js';


export async function register(req, res, next) {
    /*
    receives - validated
        firstName, lastName, email, password, role
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

export async function login(req, res, next) {

    /*
    receives - validated
        email, password
    returns 
        jwt- token
    */
    const data = req.validatedData;

    const user = await User.findOne({email: data.email});
    if(!user) return res.status(404).send('user not found.');

    // password validation
    const password = await user.checkPassword(data.password);
    if(!password) return res.status(400).send('invalid email or password');

    // token generation
    const token = user.generateAccessToken();
    return res.status(200).json(token);
}

