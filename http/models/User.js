const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type:String,
        required:true,
        trim:true
    },
    lastName: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true,
        unique:[true,'Email address is taken.'],
        lowercase:true,
    },
    password: {
        type:String,
        required:true,
        trim:true
    }
}, {collection:'users', timestamps:true});

const User = mongoose.model('User', UserSchema);

module.exports = User;