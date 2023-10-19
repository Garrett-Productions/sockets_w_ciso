Discussion

* ImageKit.io, it works with URL imputs 
1. Imagekit includes 'image transformations' within the url.
Ex) /demo/tr:w-300,h-300/medium.jpg
2. Water marking can be used in the url as well

Server Sides - Video 1 Notes(45 min)

* What is a Socket?

- Pushing content out to the clients, 
- 2 way communication, game development, updates in real time
- We cant do this with a typical http request, sockets
- HTTP doesn't do real time chat or games.
- The req-res cycle, as soon at that request, responds, the socket closes.
- This means that we can not have a conversation because as soon as this response is done the socket closes.
- HTTP FORGETS ABOUT EVERYTHING OCNE YOU SEND THAT RESPONSE.
-Sockets give us the ability to listen for events, we're not sending request every minute to check, its always open, and listening 
-Socket says "hey lemme know when you get a message, I'll receive it automatically."


OPENING UP VS
Installs(setup)
- create server folder
- Create server.js
- npm init -y
- npm i express dotenv socket.io chalk
- npm i cors
- npm i -D nodemon (even if its installed globally, this installs it as a dev dependency )
- make a new script, scripts: {"dev":" nodemon server.js}

Side Notes

    * in Package.Json {"type":"module"} so that we can have english looking imports instead of const express=require('express')
    * Create .env with PORT variable (PORT = 8000)
    * Whenever you hover over an HTML element, whatever is after the colon is what it's returning,
        so for sockets, lets catch whatever app.listen is returning in a variable! (const httpServer)
    * npm run dev or nodemon server.js to run the backend
    * make an instance of socket.io server through a var, and import it, so we'll have an http server var and a socket.io var
    * const io = this object allows each client to listen for events, and allows the server to listen for events coming from     the client, so we set io = to an instance of a socket server, we already have an httpserver var above.. and then import it from socket.io
    * this is a whole instance setup of a socket server, taking 2 arguements
        const io = new SocketServer(httpServer, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            allowedHeaders: ['*'],
            credentials: true
        },
    });
------------------------------------------------------------------------

Server.js

import chalk from 'chalk'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Server as SocketServer } from 'socket.io'

dotenv.config(); // this enables all variables, then create your port variable in this file

const app = express();
const port = process.env.PORT;

app.use(cors())

const httpServer = app.listen(port, () => console.log(chalk.cyan(`Listening on port ${port}`)))

const io = new SocketServer(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    },
});
// now we have an instance setup, so what do we do with it?
// attach it to an event listener and then have it respond accordingly!
// pass it the name of the event we are listening for

io.on()
--------------------------------------------

