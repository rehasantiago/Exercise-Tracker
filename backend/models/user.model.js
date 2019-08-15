const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,//if someone types in some white spaces then trim it
        minlength:3
    },
},
{ 
    timestamps:true//automatically creates timestamps of when it was created or modified
});

const User = mongoose.model('User',userSchema);

module.exports = User;



