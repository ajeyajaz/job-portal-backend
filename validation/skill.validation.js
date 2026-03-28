import Joi from "joi";

export const skillSchema = Joi.object({
    name: Joi
        .string()
        .trim()
        .min(1)
        .max(50)
        .required()
});





