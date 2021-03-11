const User = require('../models/User');

const login = (req,res,next) => {
    res.status(200).json({ success:true,data:req.authToken});
}

module.exports = {
    login
}