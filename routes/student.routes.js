const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student.controller');
const { validateStudent } = require('../middlewares/validation.middleware');

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
router.post('/', validateStudent, StudentController.createStudent);
router.put('/:id', validateStudent, StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
