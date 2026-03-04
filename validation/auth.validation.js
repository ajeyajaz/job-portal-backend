import Joi from "joi";
import { USER_ROLES } from '../constants.js'


const emailRule = Joi
    .string()
    .trim()
    .email()
    .required()
    .messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required",
});

const passwordRule = Joi
    .string()
    .trim()
    .min(8)
    .max(255)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).+$/)
    .required()
    .messages({
        "string.min": "Password must be at least 8 characters",
        "string.max": "Password must not exceed 255 characters",
        "string.pattern.base":
          "Password must include at least one letter, one number, and one special character",
        "string.empty": "Password is required",
})


export const registerSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(3)
      .max(255)
      .required()
      .messages({
        "string.empty": "First name is required",
        "string.min": "First name must be at least 3 characters",
        "string.max": "First name must not exceed 255 characters",
      }),

    lastName: Joi.string()
      .trim()
      .min(1)
      .max(255)
      .required()
      .messages({
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 1 character",
        "string.max": "Last name must not exceed 255 characters",
      }),
    email: emailRule,
    password: passwordRule,
    role: Joi.
      string()
      .trim()
      .custom((value, helpers)=>{
        const role = value.toUpperCase();

        if(![USER_ROLES.USER, USER_ROLES.RECRUITER].includes(role))
          return helpers.error('string.invalidRole');
        
        return role;
      })
      .required()
       .messages({
          "string.invalidRole": "invalid role",
    }),
});


export const loginSchema = Joi.object({
    email: emailRule,
    password: passwordRule
})