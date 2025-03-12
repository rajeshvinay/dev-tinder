const express = require("express");

const app = express();

const {adminAuth,userAuth} = require('./middlewares/auth')

app.use('/admin',adminAuth)

app.get('/admin',(req,res)=>{
    res.send(" generic admin ")
})

app.get('/admin/getAllData',(req,res)=>{
    res.send(" Admin all get data ")
})

app.get('/admin/deleteUser',(req,res)=>{
    res.send(" Deleted a User ")
})

app.get('/user/getUser',userAuth,(req,res)=>{
    const userName = req.query.userdetails.userName
    res.send(" User data fetched ",userName)
})

//catch all unhandled errors
app.use('/',(err,req,res,next)=>{
    if(err){
        console.log(err)
        res.status(500).send("An unexpected error happened. Please contact the support team.")
    }
})

app.listen(3000,(err,res)=>{
    if(err) console.log(" error occured ",err)
    else console.log("server is listening on port 3000")
});