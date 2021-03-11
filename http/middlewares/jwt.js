const jwt = require('jsonwebtoken');
// models
const User = require('../models/User');


const SECRET_KEY = process.env.SECRET_KEY;

const encode = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user || user.password != req.body.password) return res.status(400).json({success:false,data:'No such user found'})
    const payload = {
      userId: user._id
    };
    const authToken = jwt.sign(payload, SECRET_KEY);
    console.log('Auth', authToken);
    req.authToken = authToken;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.error });
  }
}

const decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    return next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
}

module.exports = {
    encode,
    decode
}