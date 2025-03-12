const express = require("express");

const app = express();

app.use("/user",(req,res,next)=>{
    // res.send(" hello from middleware")
    next();
})

// Regex based route with expects the end point to have A
app.get(/A/,(req,res)=>{
    res.send("actual user resp")
})

// dynamic route with params
app.get("/user/:userId/:userName/:password",(req,res)=>{
    const userDetails = req.params
    console.log(userDetails)
    res.send(" dynamic route ")
})

app.post("/user",(req,res)=>{
    res.send("actual post user resp")
})

app.listen(3000,(err,res)=>{
    if(err) console.log(" error occured ",err)
    else console.log("server is listening on port 3000")
});