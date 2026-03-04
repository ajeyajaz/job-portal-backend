import { Router } from 'express';
import { register, login } from '../controller/auth.controller.js'
import { validate } from '../middleware/validation.middleware.js'
import { registerSchema, loginSchema } from '../validation/auth.validation.js'
import { asychHandler } from '../utils/asyncHandler.js'


const router = Router();

router.post('/register', validate(registerSchema), asychHandler(register));
router.post('/login', validate(loginSchema), asychHandler(login));


export default router;