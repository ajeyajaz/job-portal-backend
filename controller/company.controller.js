import userService from '../service/user.service.js'
import companyService from '../service/company.service.js';


export async function createCompany(req, res) {
    
    // receives - validated
    // name, webiste, about

    const user = await userService.get();
    if(!user) return res.status(404).json({
        success: false,
        message: 'user not found.'
    });

    const company = await companyService.create({
        ...req.validatedData, recruiter: user._id
    });
    
    return res.status(201).json({
        success: true,
        data: company
    });

}