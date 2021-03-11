const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());

// dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//db connection
require('./config/database');


//including routers
const userAuthRouter = require('./routes/auth');
const paymentRouter = require('./routes/payment');

app.get('/api', (req,res) => res.json({message:"This is a basic payment integration with iyzico api"})); // base url

app.use('/api/user',userAuthRouter);
app.use('/api/payment',paymentRouter);

/* starting to listen server */
app.listen(process.env.PORT, () => console.log('Server is active'));
/* end of starting to listen server */
