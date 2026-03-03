import userService from '../service/user.service.js'


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
        message: 'Invalid email or password'
    });

    // password validation
    const isValid = await userService.checkPassword(user, password)
    if(!isValid) return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
    });
    
    // token generation
    const token = userService.generateAccessToken(user);
  
    return res.status(200).json({
        success: true,
        token
    });
}

export async function me(req, res) {

    const user = await userService.get({_id: req.user.id});
     if(!user) return res.status(404).json({
        success: false,
        message: 'User not found.'
    });

    console.log('user', user)

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