import Joi from "joi";


const emailRule = Joi.string()
    .email()
    .required()
    .messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required",
});

const passwordRule = Joi.string()
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
      .min(3)
      .max(255)
      .required()
      .messages({
        "string.empty": "First name is required",
        "string.min": "First name must be at least 3 characters",
        "string.max": "First name must not exceed 255 characters",
      }),

    lastName: Joi.string()
      .min(1)
      .max(255)
      .required()
      .messages({
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 1 character",
        "string.max": "Last name must not exceed 255 characters",
      }),
    email: emailRule,
    password: passwordRule
});


export const loginSchema = Joi.object({
    email: emailRule,
    password: passwordRule
})