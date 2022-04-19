const router = require('express').Router();
const repository = require('../database/TeacherRepository');

router.post('/insert', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const teacher = {
        username: username,
        password: password
    }

    const temp = await repository.findByUsername(username);
    if(temp == undefined || temp == null) {
        const savedTeacher = await repository.insert(teacher);
        res.status(201);
        res.send(savedTeacher);
        return;
    }
    res.status(409);
    res.send(temp)
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const teacher = await repository.find(username, password);
    if(teacher) {
        res.send(teacher);
        return;
    }
    res.status(401);
    res.send();
});

module.exports = router;