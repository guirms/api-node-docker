const express = require('express');
const server = express();

server.get('/addUser', (req, res) => {
    return res.json({message: 'All works fine!'});
});

server.listen(3000, () => {
    console.log('Server works!');
});