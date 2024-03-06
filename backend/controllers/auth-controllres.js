const User = require("../models/User");
const bcrypt = require("bcryptjs");



// =========================================================== HOME PAGE SERVER ================================================

const home = async (req, resp) => {
  try {
    resp.send("Hello World");
  } catch (error) {
    console.log(error);
  }
};


// =========================================================== CREATE NEW USER ================================================
const createUser = async(req, resp)=>{
    let { name, email, password } = req.body; // Update field names here
  
    try {

         // Check if a user with the provided email already exists
         const existingUser = await User.findOne({ uemail: email });
         if (existingUser) {
             return resp.status(400).json({ success: false, message: 'User with this email already exists.' });
         }

       const userCrteated =  await User.create({
            uname: name, // Update field names here
            uemail: email, // Update field names here
            password:password // Update field names here
        });
     resp.send({success:true, authT: await userCrteated.generateToken(), useId:userCrteated._id.toString()})
        
    } catch (error) {
        console.log(error)
        resp.send({success:false})
        
    }
}


// =========================================================== LOGIN USER ================================================

const login = async (req, resp) => {
    let { emaill, pass } = req.body;
    try {
      const userD = await User.findOne({ uemail: emaill });
      if (!userD) {
        return resp.send("User Not Found");
      }
      const compPass = await bcrypt.compare(pass, userD.password);
      if (!compPass) {
        return resp.send({msg:"Enter wrong Password"});
      }
  
      return resp.send({
        success: true,
        msg: "Login Successfully",
        authT: await userD.generateToken(),
        useId: userD._id.toString(),
       
      });
    
    } catch (error) {
      return resp.json({ success: false, error: error });
    }
  };
  
  // =========================================================== Get user data from USER logic ===============================

  const user = async(req, resp)=>{

    try {
      const userData = req.user
      resp.send({success:true, msg:"getting data succesfully", userData})
    } catch (error) {
      console.log(error)
    }
  }

module.exports = { home, createUser, login, user };
