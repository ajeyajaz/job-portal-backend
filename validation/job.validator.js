import Joi from "joi";
import { JOB_TYPE_LIST, JOB_STATUS_LIST, JOB_SALARY } from "../constants.js";

export const JobSchema = Joi.object({

  title: Joi.string()
    .max(50)
    .trim()
    .required(),

  description: Joi.string()
    .max(255)
    .trim()
    .required(),

  company: Joi.string()
    .hex()
    .length(24)
    .required(),

  location: Joi.string()
    .max(255)
    .trim()
    .required(),

  salaryMin: Joi.number()
    .min(JOB_SALARY.MIN_SALARY)
    .optional(),

  salaryMax: Joi.number()
    .min(JOB_SALARY.MAX_SALARY)
    .optional(),

  jobType: Joi.string()
    .valid(...JOB_TYPE_LIST)
    .required(),

  experienceRequired: Joi.number()
    .min(0)
    .optional(),

  skillsRequired: Joi.array().items(
    Joi.object({
      name: Joi.string()
        .hex()
        .length(24)
        .required()
    })
  ),

  postedBy: Joi.string()
    .hex()
    .length(24)
    .required(),

  status: Joi.string()
    .valid(...JOB_STATUS_LIST)
    .optional()

});