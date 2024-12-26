const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SignIn = async (req,res)=>{
    const {name,email,password} = req.body
    try {
        const hachedPass = await bcrypt.hash(password,10)
        const user  = await User.create({name,email,password:hachedPass})
        res.status(201).json(user)
        
    } catch (error) {
         res.status(404).json({msg:error.message})
    }

}

const SignUp = async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email : email})
    if (!user){
        return res.status(400).json({message : "email Invalid "})
    }
    
    bcrypt.compare(password , user.password).then(
        (isMatch)=>{
            if(isMatch==false){//false
                return res.status(400).json({message : "Wrong Password"})

            }else{//true
              //gen token

              const token = jwt.sign(
                { data : {id:user._id , role : user.role}},
                process.env.CLE,
                 {expiresIn :'1h'}

                )
                return res.status(200).json({message : "Success Password",token :token,user:user})

            }
        }
    )



}

module.exports = {SignIn,SignUp}