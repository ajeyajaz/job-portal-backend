import { Router } from "express";
import { validate }  from '../middleware/validation.middleware.js'
import { auth } from '../middleware/auth.middleware.js'
import { recruiterOnly } from '../middleware/recruiterOnly.middleware.js'
import { companySchema } from '../validation/company.validation.js'
import { createCompany } from '../controller/company.controller.js'
import { asychHandler } from '../utils/asyncHandler.js'


const router = Router();

router.get('/id')
router.post('/', [validate(companySchema), auth, recruiterOnly], asychHandler(createCompany))
router.put('/id') // update
router.delete('/id') // delete


export default router;