import express from 'express';
import cors from 'cors';

import {Server} from 'socket.io';
import http from 'http';

const app = express();
const port = 3000;
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected',socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});