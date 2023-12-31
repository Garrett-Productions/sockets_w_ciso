Discussion

* ImageKit.io, it works with URL imputs 
1. Imagekit includes 'image transformations' within the url.
Ex) /demo/tr:w-300,h-300/medium.jpg
2. Water marking can be used in the url as well

Server Side - Video 1 Notes(45 min)

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
    * dotenv.config(); -- this enables all variables, then create your port variable in this file
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

    * notes on io.on('conenction', ()=> {})
        now we have an instance setup, so what do we do with it?
        attach it to an event listener and then have it respond accordingly!
        pass it the name of the event we are listening for
        there is a built in one called 'connection', whenever a client connects to our socket server,
        thats the event, then we 'll attach a call back for when its heard
        the callback will tak a paramter, that we get, from our connection event, (socket)
        everytime a new user connects to our socketserver, an ID will be generated, and thats what we are capturing here

    * notes on the callback in io.on
        * when a user hits submit, its going to be a chat message event
        .on takes in a string event, and a listener function
        when a user hits a submit is when socket.on('chat-message') is triggered
        io.on('connection',(socket) => {
            console.log(chalk.greenBright(`New User connected: ${socket.id}`))
            socket.on('chat-message', (message) => {
            console.log(message);
            }); 
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

io.on('connection',(socket) => {
    console.log(chalk.greenBright(`New User connected: ${socket.id}`))
    socket.on('chat-message', (message) => {
        console.log(message);
    }); 
});
--------------------------------------------

Now we create our client, server is setup

MKDIR client
cd client
-- install vite
npm create vite@latest . // this creates our app in our client folder, create it in the current directory
npm i  && npm run dev
npm i bootstrap in client
delete all unneccesary files from client 
bring in imports into Main.jsx
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
