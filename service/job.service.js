import { Job } from '../model/job.model.js'
import AppError from '../utils/AppError.js';
import skillService from './skill.service.js';

class JobService {

    async post(data, recruiter) {

        const skillsRequired = await skillService.getAll({ _id: { $in: data.skillsRequired } }, '_id name');

        if (skillsRequired.length !== data.skillsRequired.length) {
            throw new AppError(400, 'some skill IDs are invalid', 'INVALID_SKILL_ID')
        }

        return await new Job({ ...data, skillsRequired, postedBy: recruiter }).save();
    }

    async getAll(query = {}, projection = '') {
        return await Job.find(query, projection).populate('skillsRequired', 'name');
    }

}

export default new JobService();
