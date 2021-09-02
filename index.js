const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
require('dotenv').config() 

const PORT = process.env.PORT || 7000;
const server = express();

server.use(express.json());
server.use(cors());
// server.use(morgan());

server.get('/', (req, res) => {
    res.send('<h1>WEB 45 ROCKS</h1>')
})

server.get('/api', (req, res) => {
    res.json({message: 'WEB 45 ROCKS and IS awesome'})
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})