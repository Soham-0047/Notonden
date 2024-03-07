const router = require("express").Router();

const User = require("../models/User")


//For encryption and decryption of passowrds

const Cryptojs = require("crypto-js")

const jwt = require("jsonwebtoken")


router.post("/register",async(req,res) =>{

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:Cryptojs.AES.encrypt(req.body.password, process.env.PASS).toString(),
    })


    try {
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    } catch (error) {
       res.status(500).json(error)
       console.log(error) 
    }
})



router.post("/login",async(req,res)=>{
    try {

      const user = await  User.findOne({username:req.body.username})

      if(!user){
        res.status(401).json("Wrong Credentials")
       return;} 



      const hashedPassword = Cryptojs.AES.decrypt(user.password,process.env.PASS)

      const orginalpassword = hashedPassword.toString(Cryptojs.enc.Utf8)

      if(orginalpassword !== req.body.password){
        res.status(401).json("Wrong Credentials")
        return;
      }


      //If everything is ok then we will use JWT token 

      const accesstoken = jwt.sign({
        id:user._id,
        isadmin:user.isadmin,

      },
      process.env.JWT_KEY,
      {expiresIn:"50d"}
      )


      //We want to sent user the all information but not the password, it'll be secret credential that's why we use spread operator 
       
      const {password,...others} = user._doc


      res.status(200).json({...others,accesstoken})


    } catch (err) {
        res.status(500).json(err)
    }

})

router.get("/signout",(req,res)=>{
  res.clearCookie('access_token').status(200).json("Signout Success");
})




module.exports = router;