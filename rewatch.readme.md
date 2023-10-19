ImageKit.io, it works with URL imputs 

1. Imagekit includes 'image transformations' within the url.
Ex) /demo/tr:w-300,h-300/medium.jpg
2. Water marking can be used in the url as well


Server Sides- Video 1 Notes

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
- Create server.js
- npm init -y
- npm i express dotenv socket.io chalk
- npm i cors
- npm i -D nodemon (even if its installed globally, this installs it as a dev dependency )

- make a new script, scripts: {"dev":" nodemon server.js}

Side Note
    in Package.Json
    {"type":"module"} so that we can have english looking imports instead of const express=require('express')
--
Server.js
import chalk from 'chalk'
import dotenv from 'dotenv'
import express from 'express'

const app = express();

