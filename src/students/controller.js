const pool = require('../../db');
const queries = require('./queries');

const getStudents = async (req, res, next) => {
    try {
        const results = await pool.query(queries.getStudents);
        res.status(200).json({ status: 'success', data: results.rows });
    } catch (error) {
        next(error);
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const results = await pool.query(queries.getStudentById, [id]);
        
        if (results.rows.length === 0) {
            return res.status(404).json({ status: 'error', message: `Student with id = ${id} doesn't exist.` });
        }

        res.status(200).json({ status: 'success', data: results.rows });
    } catch (error) {
        next(error);
    }
}

const addStudent = async (req, res, next) => {
    try {
        const { name, email, age, dob } = req.body;

        const emailCheck = await pool.query(queries.checkEmailExists, [email]);
        if (emailCheck.rows.length) {
            return res.status(409).json({ status: 'error', message: 'Email already exists.' });
        }

        await pool.query(queries.addStudent, [name, email, age, dob]);
        res.status(201).json({ status: 'success', message: 'Student created successfully.' });
    } catch (error) {
        next(error);
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const studentCheck = await pool.query(queries.getStudentById, [id]);
        if (studentCheck.rows.length === 0) {
            return res.status(404).json({ status: 'error', message: `Student with id = ${id} doesn't exist.` });
        }

        await pool.query(queries.deleteStudent, [id]);
        res.status(204).send("Student deleted succesfully"); // 204 No Content response for successful delete
    } catch (error) {
        next(error);
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;

        const studentCheck = await pool.query(queries.getStudentById, [id]);
        if (studentCheck.rows.length === 0) {
            return res.status(404).json({ status: 'error', message: `Student with id = ${id} doesn't exist.` });
        }

        await pool.query(queries.updateStudent, [id, name]);
        res.status(200).json({ status: 'success', message: `Student with id = ${id} updated successfully.` });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent,
}
