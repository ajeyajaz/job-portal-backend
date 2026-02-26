import express from 'express';
import { register, login, me } from '../controller/user.controller.js'
import { validate } from '../middleware/validation.middleware.js'
import { registerSchema, loginSchema } from '../validation/user.validation.js'
import { asychHandler } from '../utils/asyncHandler.js'
import { auth } from '../middleware/auth.middleware.js'


const router = express.Router();

router.post('/register', validate(registerSchema), asychHandler(register));
router.post('/login', validate(loginSchema), asychHandler(login));
router.get('/me', auth, asychHandler(me));


export default router;