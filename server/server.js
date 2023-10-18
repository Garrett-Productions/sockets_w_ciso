import express from 'express' ; // common JS import syntax
import chalk from 'chalk'; // enabling easy backend syntax with type: module in package.json
import dotenv from 'dotenv'; // .ENV PACKAGE
import cors from 'cors';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const port = process.env.PORT;
// const print = console.log

app.use(cors());

const httpServer = app.listen(port, () => 
console.log(chalk.cyan(`Listening on PORT: ${port}`)));

// io is our socket server
const io =