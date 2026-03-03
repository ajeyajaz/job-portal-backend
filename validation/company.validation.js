import Joi from "joi";


export const companySchema = Joi.object({
    name: Joi
        .string()
        .trim()
        .min(1)
        .max(255)
        .required()
        .messages({
        "string.empty": "name is required",
        "string.min": "name must be at least 3 characters",
        "string.max": "name must not exceed 255 characters",
    }),
    website: Joi
        .string()
        .max(255)
        .required(),
    about:Joi
        .string()
        .trim()
        .min(50)
        .max(255)
        .required()
});