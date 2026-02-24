import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(404).send('not token found.');

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = payload;
        next();
    }
    catch(ex){
        return res.status(400).send('invalid access token');
    }
}