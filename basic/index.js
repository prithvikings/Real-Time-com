import express from 'express';
const app = express();
import { Server } from 'socket.io';
import http from 'http';

const server=http.createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log('Message received: ' + msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  }); 
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});