const Joi = require('joi');
const express = require('express'); // store and load 
const app = express(); // represent our application

app.use(express.json()); // adding the piece of middle ware

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
]

// this method takes two arguments, first arg is url, second is callback function-
// has two arguments request, response, and this goes to code block,
app.get('/', (req, res) => { //this is how we define route
    res.send('Hello World')   
});

app.get('/api/courses', (req, res) =>{
    res.send(courses)
});

// POST Request
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    //push it in array
    courses.push(course);
    res.send(course); // return to the body of courses
})
