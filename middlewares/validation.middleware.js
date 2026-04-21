const ApiError = require('../utils/ApiError');

const validateStudent = (req, res, next) => {
    const { name, age, grade } = req.body;
    
    if (!name || !age || !grade) {
        return next(new ApiError(400, 'Name, age, and grade are required fields'));
    }

    if (typeof age !== 'number' || age < 0) {
        return next(new ApiError(400, 'Age must be a positive number'));
    }

    next();
};

module.exports = {
    validateStudent
};
