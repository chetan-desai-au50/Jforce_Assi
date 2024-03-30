const mongoose =require('mongoose');


const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    phone:Number,
    role:{
        type:String,
        enum:["admin","user"]
    }
});


module.exports=mongoose.model("users",userSchema);