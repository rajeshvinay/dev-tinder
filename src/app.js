const {connectDB} = require('./config/database')
const express = require("express");

const app = express();

connectDB().then(()=>{
    app.listen(3000,(err,res)=>{
        if(err) console.log(" error occured ",err)
        else console.log("Database connection is established and the server is listening on port 3000")
    });
}).catch(()=>{
    console.log("Unable to start the server because the database connection is not established.")
})