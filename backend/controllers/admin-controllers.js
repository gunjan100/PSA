const User = require('../models/User');
const Client = require('../models/client');
const Contact = require('../models/contact-models')



//   =========================================================== logic FOR USER  ===============================

const getAllData = async(req, resp)=>{
    try {
        const users = await User.find({}).select({
            password:0
        })
        console.log(users);
        if (users.length === 0) {
            resp.status(404).json({ success: false, msg: "User data not found" });
        } else {
            resp.status(200).json({ success: true, users: users });
        }
    } catch (error) {
        resp.send({success:false, msg:error})
        console.log(error)
        
    }

}

const getUserById = async(req, resp)=>{
    
    try {
        const id = req.params.id
         let data = await User.findOne({_id:id},{password:0})
         console.log(data);
         if(!data){
            resp.send({success:false, msg:"record not found"})
         }
         
         return resp.send({success:true, data})
        
    } catch (error) {
        resp.send({success:false, msg:"Internal server error"})
        console.log(error);
    }


}

const updatetUserById = async(req, resp) =>{
    try {
        const id  = req.params.id
        const updatedData = req.body
        
        const updateUser = await User.updateOne({_id:id}, {
            $set:updatedData
        })
        return resp.status(200).json(updateUser)
        
    } catch (error) {
        console.log(error)
        
    }
}


const deleteuser =async (req, resp)=>{
    const id = req.params.ids
    try {
       await User.deleteOne({_id:id})
       resp.status(200).json({success:true, msg:"User Deleted Successfully.."})
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({ msg: "Error deleting user" });
        
    }

}

//   =========================================================== logic FOR CONTACT PAGE  ===============================

const contact = async(req, resp)=>{
    try {
        const contactDetails = await Contact.find()
        console.log(contactDetails);
        if(!contactDetails){
            resp.send({success:false, msg:"User data not Found"})
        }
        resp.send({success:true, contactDetails})
    } catch (error) {
        resp.send({success:false, msg:error})
        console.log(error)
        
    }

}

const deleteContactById =async (req, resp)=>{
    const id = req.params.ids
    try {
       await Contact.deleteOne({_id:id})
       resp.status(200).json({success:true, msg:"User Deleted Successfully.."})
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({ msg: "Error deleting user" });
        
    }

}


module.exports = {getAllData, contact, deleteuser, getUserById, updatetUserById, deleteContactById};