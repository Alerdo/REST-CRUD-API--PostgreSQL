const { Router } = require('express');
const controller = require('./controller');

const {
    getStudents,
    addStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} = controller;

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
