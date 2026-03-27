const errorResponse = (res, status, message, errorCode) => {
    return res.status(status).json({
        success: false,
        error : {
            message,
            code: errorCode
        }
    })
}


export default errorResponse;