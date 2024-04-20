// How to build the endpoints?

const express = require('express'); // store and load 
const app = express(); // represent our application

// this method takes two arguments, first arg is url, second is callback function-
// has two arguments request, response, and this goes to code block,
app.get('/', (req, res) => { //this is how we define route
    res.send('Hello World')   
});

app.get('/api/courses', (req, res) =>{
    res.send([1, 2, 3])
})

app.listen(3000, () => console.log('Listening on port 3000...'));

// Note: In this implementation we don't have those if(?) blocks.
// we define new route by calling applget, and in this structure 
// as our applications grows, we can move some of these routes to 
// different files. For metaphor, we can move all the routes related
// to courses to a separate file like courses.js.

// So Express gives our application a skeleton, a structure.
