class AppError extends Error {
    constructor(statusCode, message, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;