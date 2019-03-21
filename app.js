const express = require('express');
const handlebars = require('express-handlebars');  // TODO: template engine
const bodyParser = require('body-parser');
const path = require('path');

// Connect to database
const db = require('./config/database');

// Initialize express
const app = express();

// Choose port
const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Employee Record Routes/endpoints
app.use('/records', require('./routes/employeerecords'));

// localhost:port/ will direct to unfinished index.html code
app.get('/', (req, res) => res.send('index'));

// Listen on port for http
app.listen(PORT, console.log('Server listening on port ' + PORT + '...'));
