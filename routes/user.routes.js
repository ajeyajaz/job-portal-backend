import express from 'express';
import { register } from '../controller/user.controller.js'
import { validate } from '../middleware/validation.middleware.js'
import { registerSchema } from '../validations/user.validation.js'
import { asychHandler } from '../utils/asyncHandler.js'


const router = express.Router();

router.post('/register', validate(registerSchema), asychHandler(register));



export default router;