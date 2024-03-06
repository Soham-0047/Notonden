const jwt = require("jsonwebtoken")


const verifytoken = (req,res,next) =>{

    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_KEY, (err,user) =>{
            if(err)  return res.status(403).json("Token not valid")
                
            req.user = user;

            next();
        })
    }
    else{
        return res.status(401).json("Authenticate Not Completed")
    }
}

const verifyTokenAndAuth = (req,res,next) =>{
    verifytoken(req,res, ()=>{
        if(req.user.email === req.params.email  || req.user.username){
            next()
        }
        else{
            res.status(403).json("Not Allowed to change")
        }
    })
}


module.exports = {
    verifytoken,
    verifyTokenAndAuth
}
