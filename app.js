import express from 'express'
import users from './route/user.route.js'
import companies from './route/company.route.js'
import jobs from './route/job.route.js'
import auth from './route/auth.route.js'
import skills from './route/skill.route.js'
import { error } from './middleware/error.middleware.js'
import { BASE_URL } from './constants.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use(`${BASE_URL}/auth`, auth);
app.use(`${BASE_URL}/users`, users);
app.use(`${BASE_URL}/companies`, companies);
app.use(`${BASE_URL}/jobs`, jobs);
app.use(`${BASE_URL}/skills`, skills);
app.use(error); // error middleware



// Establish http connection
export default () => {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, ()=> console.log('sever running at', { PORT }))
}