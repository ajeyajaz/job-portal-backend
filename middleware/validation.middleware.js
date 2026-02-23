
export const validate = (schema) => (req, res, next) => {
    const {value, error} = schema.validate(req.body || {}, {
        abortEarly: false
    });

    if(error)
        return res.status(400).json({
            errors: error.details.map(e => ({field: e.path[0], message: e.message}))
    });

    req.validatedData = value; // validated & cleaned data
    next();
}

