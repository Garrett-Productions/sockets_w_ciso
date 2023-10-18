import express from 'express' ; // common JS import syntax
import chalk from 'chalk'; // enabling easy backend syntax with type: module in package.json
import dotenv from 'dotenv'; // .ENV PACKAGE
import cors from 'cors';
import { Server as SocketServer } from 'socket.io'; // rename with curly braces in {}

dotenv.config();

const app = express();
const port = process.env.PORT;
// const print = console.log

app.use(cors());

const httpServer = app.listen(port, () => 
console.log(chalk.cyan(`Listening on PORT: ${port}`)));

// io is our socket server
const io = new SocketServer(httpServer, { // this is a class taking in a server as a variable!
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
})
// whenever a client connects to our socket server, 
//its an event our server listens for, our callback specifies what needs to happen
//our call back is below!

io.on('connection', (socket) => { // io.on, like an onChange, or onSubmit
    console.log(chalk.greenBright(`New user connected: ${socket.id}`));
    socket.on('chat-message', (message) => {
        console.log(message);
    })

}) 
