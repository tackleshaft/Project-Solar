const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json())

const router = express.Router();

//intial testing route - simple object response
app.get('/testing', solarController.test, (req, res) => res.status(200).json(res.locals.test))

// Unknown route handler
app.use((req, res) => res.sendStatus(404))