import userService from '../service/user.service.js'


export async function register(req, res, next) {
    //receives - validated
        //firstName, lastName, email, password, role

    const {password, ...user} = await userService.create(req.validatedData);
    return res.status(201).json({
        success:true,
        data: user
    });


}

export async function login(req, res, next) {
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
    const valid = await userService.checkPassword(user, password)
    if(!valid) return res.status(400).json({
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

export async function me(req, res, next) {

    const user = await userService.get({_id: req.user._id});
    if(!user) return res.status(404).json({
        success: false,
        message: 'User not found.'
    })

    return res.status(200).json({
        success: true,
        data: user
    });
}