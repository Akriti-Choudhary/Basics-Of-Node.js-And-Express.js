const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'akriti'){
        req.user = {name: 'akriti', id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize