const Student = require('../models/Student')

const errorHandler = (err) => {
    console.error(err)
}

module.exports.findAll = async () => {
    const students = await Student.findAll().catch(errorHandler);
    return students;
}

module.exports.find = async (rollNo) => {
    const student = await Student.findOne({where: {rollNo: rollNo}}).catch(errorHandler);
    return student;
}

//---------------------------------------------------------------------------------------------
module.exports.findbyRollandDob = async (rollNo,dob) => {
    const student = await Student.findOne({where: {rollNo: rollNo,dob:dob}}).catch(errorHandler);
    return student;
}

module.exports.insert = async (student) => {
    const savedStudent = await Student.create(student).catch(errorHandler);
    return savedStudent;
}

module.exports.update = async (student) => {
    const updateStudent = {
        name: student.name,
        dob: student.dob,
        score: student.score
    }
    const temp = await Student.update(updateStudent, { where: { rollNo: student.rollNo } });
    return temp;
}

module.exports.delete = async (rollNo) => {
    const status = await Student.destroy({where: {rollNo: rollNo}}).catch(errorHandler);
    return status;
}