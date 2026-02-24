import express from 'express';
import { register, login } from '../controller/user.controller.js'
import { validate } from '../middleware/validation.middleware.js'
import { registerSchema, loginSchema } from '../validations/user.validation.js'
import { asychHandler } from '../utils/asyncHandler.js'


const router = express.Router();

router.post('/register', validate(registerSchema), asychHandler(register));
router.post('/login', validate(loginSchema), asychHandler(login));



export default router;