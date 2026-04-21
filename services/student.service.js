const StudentModel = require('../models/student.model');
const ApiError = require('../utils/ApiError');

class StudentService {
    static async getAllStudents() {
        return await StudentModel.getAll();
    }

    static async getStudentById(id) {
        const student = await StudentModel.getById(id);
        if (!student) {
            throw new ApiError(404, 'Student not found');
        }
        return student;
    }

    static async createStudent(studentData) {
        return await StudentModel.create(studentData);
    }

    static async updateStudent(id, studentData) {
        const updatedStudent = await StudentModel.update(id, studentData);
        if (!updatedStudent) {
            throw new ApiError(404, 'Student not found');
        }
        return updatedStudent;
    }

    static async deleteStudent(id) {
        const deleted = await StudentModel.delete(id);
        if (!deleted) {
            throw new ApiError(404, 'Student not found');
        }
        return { message: 'Student deleted successfully' };
    }
}

module.exports = StudentService;
