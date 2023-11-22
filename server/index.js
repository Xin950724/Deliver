const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  // Handle messages from clients
  socket.on('location', (location) => {
    console.log('Received location:', location);
    // Broadcast the location to all clients except the sender
    socket.broadcast.emit('location', location);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});