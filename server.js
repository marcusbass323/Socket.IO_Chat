const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
users = [];
connections = [];

PORT = 3000

server.listen(process.env.PORT || 3000);
console.log(`Server running on ${PORT}`)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
