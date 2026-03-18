export const  error = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        code : err.errorCode
    });
    console.log(err)
};

