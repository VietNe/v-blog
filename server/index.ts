// Config env
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { connectDB } from './config/database';


// Middleware
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cors())
app.use(morgan('dev')); // write log, check data, show to console
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'Hello, world!' });
})

//  Database
connectDB();

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
