//local requirements
const {Schema, model} = require('mongoose');
const bcrypt = require('.bcrypt');

const userSchema = new Schema({
    //todo define schema
});

//todo user authentication

const User = model('User', userSchema)