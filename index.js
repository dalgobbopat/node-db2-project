const express = require('express');
const carsRouter = require('./cars/carsRouter.js');

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

const port = 8000;
server.listen(port, () => console.log(`Server running on ${port}`));