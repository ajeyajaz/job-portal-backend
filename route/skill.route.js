import { Router } from "express";
import { skillSchema } from '../validation/skill.validation.js'
import { adminOnly } from '../middleware/adminOnly.middleware.js'
import { addSkill, getSkills } from '../controller/skill.controller.js'
import { auth } from "../middleware/auth.middleware.js";
import { asychHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validation.middleware.js";



const router = Router();

router.get('/', [auth], asychHandler(getSkills));
router.post('/', [validate(skillSchema), auth, adminOnly], asychHandler(addSkill));


export default router;