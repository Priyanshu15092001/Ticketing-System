const jwt = require('jsonwebtoken')
const User= require('../models/User')

const protect=(req,res,next)=>{
    const token=req.headers.authorization;
    // console.log(token);
    
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports={protect};