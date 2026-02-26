import express from 'express';
import users from './route/user.routes.js';
import { error } from './middleware/error.middleware.js'

const app = express();

app.use(express.json());
app.use('/api/users', users);
app.use(error); // error middleware



// Establish http connection
export default () => {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, ()=> console.log('sever running at', { PORT }))
}