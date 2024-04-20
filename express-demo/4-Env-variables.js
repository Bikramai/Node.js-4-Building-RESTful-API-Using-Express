// Environment variables:-
// An Environment variables is basically a variable that is part of the environment in which a process run.
// It value is set outside this application. 
// =>So, In this application, we need to read the value of this port environment variable.
//   and the way we do that is by using the process object. so we have this global object 
//   called Process.

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

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }...`));

// How to set or export the environment variable?
// 1. export PORT=5000
// 2. nodemon 4-Env-variables.js

