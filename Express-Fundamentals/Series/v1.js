
const express = require('express');
const app = express();

// http://localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!!');
})

// http://localhost:3000/courses
app.get('/courses', (req, res) => {
    res.send('List of Coruses');
})

app.post('/courses', (req, res) => {
    res.send('Adding New Courses');
})

app.put('/courses', (req, res) => {
    res.send('Update Existing Course');
})

app.delete('/courses', (req, res) => {
    res.send('Delete Existing Course');
})

app.listen(3000, () => {
    console.log('The server is running at port 3000!')
})