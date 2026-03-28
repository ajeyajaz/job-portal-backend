import { Job } from '../model/job.model.js'
import jobService from '../service/job.service.js';
import userService from '../service/user.service.js';
import companyService from '../service/company.service.js';
import { AUTH_ERRORS, USER_ROLES } from '../constants.js'
import errorResponse from '../utils/errorResponse.js';
import skillService from '../service/skill.service.js'


export async function postJob(req, res) {
    const data = req.validatedData;

    // check user
    const user = await userService.get({ _id: req.user.id });
    if (!user) {
        return errorResponse(
            res,
            404, 
            AUTH_ERRORS.USER_NOT_FOUND.message,
            AUTH_ERRORS.USER_NOT_FOUND.code
        );
    }

    if(user.role !== USER_ROLES.RECRUITER){
        return errorResponse(
            res,
            404,
            AUTH_ERRORS.UNAUTHORIZED.message,
            AUTH_ERRORS.UNAUTHORIZED.code
        )
    }

    //check company
    const company = await companyService.get({ _id: data.company, recruiter: req.user.id });
    if (!company) {
        return errorResponse( res, 404, "Company not found.","COMPANY_NOT_FOUND");
    }

    // create a job
    const job = await jobService.post(data, user._id);
    return res.status(201).json({
        success: true,
        data: job
    });

}


export async function getJobs(req, res) {
    const jobs = await Job.find();
    return res.send({
        data: jobs
    })
}