const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TodoRouter = require('./routes/todo.routes');

// Connecting to Database
const MONGO_URL = 'mongodb+srv://sudikshakapoor001:eA8C0hry5oKYhXOn@cluster0.ehn1r31.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('Connected to DB!!');})
    .catch((error) => {console.log(error);})

app.use(express.json());    
// Configure Routes Middleware
app.use('/todo', TodoRouter);

app.listen(3001, () => {
    console.log('The server is running at port 3001!!');
})