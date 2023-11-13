const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user connected');

  // Ask for user's name
  socket.on('join', (userName) => {
    // Broadcast a system message when a user joins
    io.emit('chat message', {
      name: 'System',
      timestamp: getCurrentTime(),
      text: `${userName} joined the chat.`,
      system: true,
    });
  });

  // Listen for chat message events
  socket.on('chat message', (msg) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', {
      name: msg.name,
      timestamp: getCurrentTime(),
      text: msg.text,
    });
  });

  // Listen for disconnect events
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to get the current time in HH:mm format
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
