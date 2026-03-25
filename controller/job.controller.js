import { Job } from '../model/job.model.js'


export function postJob(req, res){ 
}


export async function getJobs(req, res){
    const jobs = await Job.find();
    return res.send({
        data: jobs
    })
}