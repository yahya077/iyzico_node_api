const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
        .then(()=>console.log('connected to the database'))
        .catch(e => console.log(e));