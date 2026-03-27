import { Job } from '../model/job.model.js'
import { User } from '../model/user.model.js'

class JobService{

    // validatedData -> check-user - check-company - post-job

    async post(data, recruiter){
        return await new Job({...data, recruiter}).save();
    }

}

export default new JobService();
