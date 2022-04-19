const router = require('express').Router();
const repository = require('../database/StudentRepository');

router.get('/list', async (req, res) => {
    const students = await repository.findAll();
    res.send(students);
});

router.get('/list/:rollNo', async (req, res) => {
    const rollNo = req.params.rollNo;
    const student = await repository.find(rollNo);
    res.send(student);
});

router.post('/find', async (req, res) => {
    const rollNo = req.body.rollNo;
    const dob = req.body.dob;
    console.log("here is our request body")
    console.log(req.body)
    const student = await repository.findbyRollandDob(rollNo,dob);
    res.send(student);
});

router.post('/insert', async (req, res) => {
    const rollNo = req.body.rollNo;
    const name = req.body.name;
    const dob = req.body.dob;
    const score = req.body.score;
    console.log("here is our request body")
    console.log(req.body)
    const student = await repository.insert({
        rollNo: rollNo,
        name: name,
        dob: dob,
        score: score
    });
    res.send(student);
});

router.post('/update', async (req, res) => {
    const rollNo = req.body.rollNo;
    const name = req.body.name;
    const dob = req.body.dob;
    const score = req.body.score;

    const student = await repository.update({
        rollNo: rollNo,
        name: name,
        dob: dob,
        score: score
    });
    res.send(student);
});

router.get('/delete/:rollNo', async (req, res) => {
    const rollNo = req.params.rollNo;
    const status = await repository.delete(rollNo);
    if(status) {
        res.status(200);
        res.send({
            "deleted": true
        });
    } else {
        res.status(404);
        res.send({
            "deleted": false
        });
    }
});

module.exports = router;