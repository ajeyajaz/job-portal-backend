import { Job } from '../model/job.model.js'
import AppError from '../utils/AppError.js';
import skillService from './skill.service.js';

class JobService{

    async post(data, recruiter){

        const skillsRequired = await skillService.getAll({_id: {$in : data.skillsRequired} }, 'name');
        console.log('skillsRequired: ', skillsRequired)

        if(skillsRequired.length !== data.skillsRequired.length){
            throw new AppError(400, 'some skill IDs are invalid', 'INVALID_SKILL_ID')
        }

        console.log('data: ', {...data, skillsRequired, recruiter})
        
        return await new Job({...data, skillsRequired, recruiter}).save();
    }

}

export default new JobService();
