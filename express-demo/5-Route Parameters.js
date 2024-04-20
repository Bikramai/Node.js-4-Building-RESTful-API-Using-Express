// How to create the route, to get a single course?
// => In order to get a single course, we should include the ID of the course in the url.

const express = require('express'); // store and load 
const app = express(); // represent our application

// this method takes two arguments, first arg is url, second is callback function-
// has two arguments request, response, and this goes to code block,
app.get('/', (req, res) => { //this is how we define route
    res.send('Hello World')   
});

app.get('/api/courses', (req, res) =>{
    res.send([1, 2, 3, 4, 5])
})

// 1. /api/courses/1 - 1 is the id of course - single paramater
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id); // read, and send to this to client 
})

// 2. With Multiple Parameter
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params); // read, and send to this to client 
})

// 3. To read With Query Parameters
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.Query); // read, and send to this to client 
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }...`));


// Note:-
// We use Route parameter for essential or requiired values where as 
// we use query string parameters for anything that is optional.
// Query parameters are stored in an object with a bunch of key value pairs.

