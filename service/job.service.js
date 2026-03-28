import { Job } from '../model/job.model.js'
import AppError from '../utils/AppError.js';
import skillService from './skill.service.js';

class JobService{

    async post(data, recruiter){

        // i get ids -> 

        const skillsRequired = await skillService.getAll({_id: {$in : data.skillsRequired} }, '_id name');

        if(skillsRequired.length !== data.skillsRequired.length){
            throw new AppError(400, 'some skill IDs are invalid', 'INVALID_SKILL_ID')
        }

        return await new Job({...data, skillsRequired, postedBy: recruiter }).save();
    }

}

export default new JobService();
