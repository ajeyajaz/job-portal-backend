import mongoose from 'mongoose';
import dotenv from 'dotenv/config';
import runServer from './app.js';


// connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> runServer())
    .catch(ex => console.log('failed to connected to DB or establish http server: ', ex));
