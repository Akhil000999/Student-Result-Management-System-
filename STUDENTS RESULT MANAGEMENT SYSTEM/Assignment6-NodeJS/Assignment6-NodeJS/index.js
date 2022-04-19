const express = require('express');
const studentRouter = require('./controller/StudentController')
const teacherRouter = require('./controller/TeacherController')
const cors = require('cors')

require('./database/connection');

const app = express();
var corsOption ={
    origin :"http://localhost:4200"
}
app.use(cors(corsOption))

const host = 'localhost';
const port = 8085;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

app.listen(port, host, () => console.log(`Webserver is running on http://${host}:${port}`));