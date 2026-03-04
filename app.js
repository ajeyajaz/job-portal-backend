import express from 'express';
import users from './route/user.route.js';
import companies from './route/company.route.js'
import auth from './route/auth.route.js'
import { error } from './middleware/error.middleware.js'

const app = express();

app.use(express.json());
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/companies', companies);
app.use(error); // error middleware



// Establish http connection
export default () => {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, ()=> console.log('sever running at', { PORT }))
}