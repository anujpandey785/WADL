const mongoose=require('mongoose');

var User=mongoose.model('users',{
    name:{type:String},
    password:{type:String},
    number:{type:Number}

});

module.exports={
    User
};