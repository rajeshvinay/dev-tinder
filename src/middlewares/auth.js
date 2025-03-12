const adminAuth = (req,res,next)=>{
    const adminCheck = req.query?.isAdmin
    console.log(" admin middle ware is called ")
    if(adminCheck){
        next();
    }else{
        res.status(401).send({status:"Failed",message:"You are not authorised to perform this operation"})
    }
}

const userAuth = (req,res,next)=>{
    const userCheck = req.query?.isUser;
    if(userCheck){
        next();
    }else{
        res.status(401).send({status:"Failed",message:"You are not authorised to perform this operation"})
    }
}

module.exports = {adminAuth,userAuth}