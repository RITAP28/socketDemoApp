import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:5173"
    }
});

const PORT = process.env.PORT || 3000;

app.use(cors());

io.on('connection', (socket: any) => {
    console.log(`A user with ${socket.id} has connected`);
    socket.on('disconnect', () => {
        console.log(`A user with ${socket.id} disconnected`);
    });
});

app.get('/', (req, res) => {
    res.json({
        msg: "Hello There"
    })
});

http.listen(3000, () => {
    console.log(`Server is listening on ${PORT}`);
});



