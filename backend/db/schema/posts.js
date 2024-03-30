const mongoose =require('mongoose');


const postSchema = new mongoose.Schema({
    post:{
        type:String
    },
    userId:String,
    username:String
},{timestamps:true});


module.exports=mongoose.model("posts",postSchema);