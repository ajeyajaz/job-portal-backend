export const asychHandler = (requestHadler) =>{
    return (req, res, next) => {
        Promise.resolve(requestHadler(req, res, next)).catch(next)
    }
}