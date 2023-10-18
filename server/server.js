import express from 'express' ; // common JS import syntax
import chalk from 'chalk'; // enabling easy backend syntax with type: module
import dotenv from 'dotenv'; // .ENV PACKAGE
import cors from cors

dotenv.config();

const app = express();
const port = process.env.PORT;
// const print = console.log

app.use(cors());

app.listen(port, ()=> console.log(chalk.cyan(`Listening on PORT: ${port}`)));