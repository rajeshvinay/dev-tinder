const express = require("express");

const app = express();

app.use((req,res)=>{
    res.send(" hello fron test route")
})

app.use('*',(req,res)=>{
    res.send(" all gibberish requests")
})

app.listen(3000,(err,res)=>{
    if(err) console.log(" error occured ",err)
    else console.log("server is listening on port 3000")
});