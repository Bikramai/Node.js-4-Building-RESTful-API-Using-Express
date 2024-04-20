// How to do input validation?
// Input validation:

// How to replace this validation logic with joi.
// 1. npm i joi


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
application.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.Validate(req.body, schema);
    // Validation Logic
    if (result.error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


// GET Request
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not  found.');
    res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }...`));
