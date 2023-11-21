const express = require('express');
const app = express();
const path = require('path')
const SolarController = require('./solarcontroller.js')

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json())

//inital get request to load the app
app.get('/', (req, res) => {
    console.log('inside the response object')
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
  });

//intial testing route - simple object response
app.get('/testing', SolarController.test, (req, res) => res.status(200).json(res.locals.test))

// Unknown route handler
app.use((req, res) => res.sendStatus(404))

//global error handler
// app.use((err, req, res, next) => {
//     const defaultErr = {
//         log: 'Express error handler caught unknown middleware error',
//         status: 500,
//         message: { err: 'An error occurred' },
//         };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
// })

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))