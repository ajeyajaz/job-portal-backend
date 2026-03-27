import { Router } from 'express';
import { validate } from '../middleware/validation.middleware.js'
import { asychHandler } from '../utils/asyncHandler.js'
import { auth } from '../middleware/auth.middleware.js'
import { recruiterOnly } from '../middleware/recruiterOnly.middleware.js'
import { JobSchema } from '../validation/job.validator.js'
import { postJob, getJobs} from '../controller/job.controller.js'

const router = Router();

router.post('/', [validate(JobSchema), auth, recruiterOnly], asychHandler(postJob));
router.get('/', asychHandler(getJobs));

export default router;