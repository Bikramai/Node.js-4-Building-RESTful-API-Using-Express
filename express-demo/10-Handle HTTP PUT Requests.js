// How to handle HTTP PUT Request?

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
    const { error } = validateCourse(req.body);  // result.error - object distructure
    if (error) {
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

// PUT Request
app.put('/api/courses/:id', (req, res) =>{
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not  found.');

    // Validate
    // if invalid, return 400 - Bad request
    const { error } = validateCourse(req.body);  // result.error - object distructure
    if (error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

   
    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
    
})


// GET Request
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not  found.');
    res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }...`));


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.Validate(course, schema);
}
