const StudentService = require('../services/student.service');

class StudentController {
    static async getAllStudents(req, res, next) {
        try {
            const students = await StudentService.getAllStudents();
            res.status(200).json({
                success: true,
                data: students
            });
        } catch (error) {
            next(error);
        }
    }

    static async getStudentById(req, res, next) {
        try {
            const student = await StudentService.getStudentById(req.params.id);
            res.status(200).json({
                success: true,
                data: student
            });
        } catch (error) {
            next(error);
        }
    }

    static async createStudent(req, res, next) {
        try {
            const student = await StudentService.createStudent(req.body);
            res.status(201).json({
                success: true,
                data: student
            });
        } catch (error) {
            next(error);
        }
    }

    static async updateStudent(req, res, next) {
        try {
            const student = await StudentService.updateStudent(req.params.id, req.body);
            res.status(200).json({
                success: true,
                data: student
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteStudent(req, res, next) {
        try {
            const result = await StudentService.deleteStudent(req.params.id);
            res.status(200).json({
                success: true,
                ...result
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = StudentController;
