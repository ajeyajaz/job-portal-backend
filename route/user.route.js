import { Router } from 'express';
import { me } from '../controller/user.controller.js'
import { asychHandler } from '../utils/asyncHandler.js'
import { auth } from '../middleware/auth.middleware.js'


const router = Router();


router.get('/me', auth, asychHandler(me));


export default router;