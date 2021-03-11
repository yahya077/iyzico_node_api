const router = require('express').Router();
const PaymentController = require('../http/controllers/PaymentController');

const jwt = require('../http/middlewares/jwt');

router.post('/iyzico', jwt.decode, PaymentController.iyzico);

module.exports = router;