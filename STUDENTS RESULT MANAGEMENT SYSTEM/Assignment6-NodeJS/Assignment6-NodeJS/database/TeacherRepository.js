const Teacher = require('../models/Teacher')

const errorHandler = (err) => {
    console.error(err)
}

module.exports.find = async (username, password) => {
    const teacher = await Teacher.findOne({where: {username: username, password: password}}).catch(errorHandler);
    return teacher;
}

module.exports.findByUsername = async (username) => {
    const teacher = await Teacher.findOne({where: {username: username}}).catch(errorHandler);
    return teacher;
}
module.exports.insert = async (teacher) => {
    const savedTeacher = await Teacher.create(teacher).catch(errorHandler);
    return savedTeacher;
}