const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
console.log("Server running on ws://localhost:8080");

wss.on('connection', (socket) => {
  console.log('New client connected to me');

  socket.on('message', (message) => {
    console.log('Received from client:', message.toString());
    socket.send("Server received: " + message);
  });

  socket.on('close', () => {
    console.log('The Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('WebSocket error:', err);
  });
});
