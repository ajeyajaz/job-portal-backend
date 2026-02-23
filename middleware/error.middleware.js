export const  error = (err, req, res, next) => {
    console.log('error: ', err);
    res.status(500).send('something went wrong...');
};

