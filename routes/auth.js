const router = require('express').Router();
const AuthController = require('../http/controllers/AuthController');
const jwt = require('../http/middlewares/jwt');

router.post('/login', jwt.encode,AuthController.login);

module.exports = router;