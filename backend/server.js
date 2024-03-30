const express = require("express");
const app = express();
require("./db/config");

//cors used to fix backend issues or erros thats why its important 
const cors = require('cors');
app.use(cors())

//models
const User = require("./db/schema/user.js")
const Post=require("./db/schema/posts.js")


app.use(express.json())


app.post('/signup', async (req, res) => {
    console.log(req.body)
    let user = new User(req.body);

    let result = await user.save();
    result = result.toObject();// toObject convert data into the object
    // delete result.pass;//'delete function' delete the pass while responseing the data;
    res.send(result)

})

app.post('/login', async (req, res) => {

    if (req.body.username && req.body.password) {
        let user = await User.findOne(req.body);    //.select("-pass");
        if (user) {
            res.send(user)
        } else{
            console.log("no user found")
        }
    } else {
        console.log("no user found")
    }

})

app.post("/post",async(req,res)=>{
    let post = new Post(req.body);

    let result = await post.save();
    result = result.toObject();// toObject convert data into the object
    res.send(result)
})

app.get("/posts",async(req,res)=>{
    // const userId=req.params
    let mypost=await Post.find()
    if(mypost.length>0){
        res.send(mypost)
    }else{
        res.send("No users found...")
    }

})

app.delete("/posts/:id",async(req,res)=>{
    const id = req.params.id; // Access id from request parameters
    console.log(id);

    const result = await Post.deleteOne({_id: req.params.id});
    res.send(req.params.id);

})





app.get("/mypost/:id", async (req, res) => {
    const id = req.params.id; // Access id from request parameters
    console.log(id);
    let mypost = await Post.find({userId: id });
    if (mypost.length > 0) {
        res.send(mypost);
    } else {
        res.send("No posts found...");
    }
});


app.delete("/mypost/:id", async (req, res) => {
    const id = req.params.id; // Access id from request parameters
    console.log(id);

    const result = await Post.deleteOne({_id: req.params.id});
    res.send(req.params.id);
})


app.put("/mypostupdate/:id", async(req,res)=>{
    let result = await Post.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )

    res.send(result)
})

app.get("/getSinglePost/:id",async(req,res)=>{
    let result=await Post.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "No Record Found" })
    }
})





app.listen(5000, () => {
    console.log("server is running on port 5000...")
})