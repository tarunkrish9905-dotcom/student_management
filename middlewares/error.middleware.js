const errorMiddleware = (err, req, res, next) => {
    const { statusCode = 500, message = 'Internal Server Error' } = err;

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

module.exports = errorMiddleware;
