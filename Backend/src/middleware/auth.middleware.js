

const auth = (req, res, next) => {
    if(!req.session.username){
        res.status(401).json({
            message : "Unauthorized. Please log in to access this resource."
        })
    }
    next();
}

module.exports = auth;