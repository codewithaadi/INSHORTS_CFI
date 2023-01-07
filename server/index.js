import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());    
app.use('/',Route);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`!!! Server is running at ${PORT}`);
})

DefaultData();