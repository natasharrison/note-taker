const express = require('express');
const { db } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;
// initiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());
// // middleware for front-end resources
// app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// makes the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});