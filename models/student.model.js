const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/students.json');

class StudentModel {
    static async getAll() {
        const data = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(data);
    }

    static async getById(id) {
        const students = await this.getAll();
        return students.find(s => s.id === id);
    }

    static async create(studentData) {
        const students = await this.getAll();
        const newStudent = {
            id: Date.now().toString(),
            ...studentData,
            createdAt: new Date().toISOString()
        };
        students.push(newStudent);
        await fs.writeFile(DATA_PATH, JSON.stringify(students, null, 2));
        return newStudent;
    }

    static async update(id, studentData) {
        const students = await this.getAll();
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return null;

        students[index] = {
            ...students[index],
            ...studentData,
            updatedAt: new Date().toISOString()
        };
        await fs.writeFile(DATA_PATH, JSON.stringify(students, null, 2));
        return students[index];
    }

    static async delete(id) {
        const students = await this.getAll();
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return false;

        students.splice(index, 1);
        await fs.writeFile(DATA_PATH, JSON.stringify(students, null, 2));
        return true;
    }
}

module.exports = StudentModel;
