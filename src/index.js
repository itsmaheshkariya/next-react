const express = require('express');
const path = require('path');
const port = process.env.port || 3001;
const morgan = require('morgan');
const database = require('./databse');
const app = express();


//settings
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.use('/api/tasks',require('./routes/task.routes'));






//static files




//starting server
app.listen(port,()=>{
    console.log('server running on'+port);
})