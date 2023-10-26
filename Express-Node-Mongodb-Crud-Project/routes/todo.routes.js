
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
router.get('/', (req,res) => {
    res.send('Todo Management!!');
});

// http://localhost:3000/todo/all

// query { products {name, price} }
router.get('/all', (req,res) => {
   Todo.find({})
    .then((data) => res.json(data))
    .catch((error) => console.log(error))
});

// http://localhost:3000/todo/create
router.post("/create", (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    });
    Todo.create(todo)
    .then(() => res.send("Todo Created Successfully."))
    .catch((error) => console.log(error))
});
module.exports = router;