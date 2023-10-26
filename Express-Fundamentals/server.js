
const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Java Fundamentals'},
    {id: 2, name: 'NodeJS Big Picture'},
    {id: 3, name: 'Master React'}
]

// http://localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// http://localhost:3000/courses
app.get('/courses', (req, res) => {
    res.send(courses);
});

// http://localhost:3000/courses/101
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post('/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if(result.error) {
        res.status(400).send(result.error);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found.');
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if(result.error) {
        res.status(400).send(result.error);
        return;
    };
    course.name = req.body.name;
    res.send(course);
})

app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found.');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

app.listen(3000, () => {
    console.log('The server is running at port 3000!')
})