import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

const app = express();

// connection
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> app.listen(PORT, ()=> console.log('sever running at', { PORT })))
    .catch(ex => console.log('failed to connected to DB or establish http server: ', ex));

