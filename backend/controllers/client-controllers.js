const Application = require('../models/application');
const Client = require('../models/client');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const searchByCertNo =async (req, resp)=>{
    const {certificateNo} = req.body
    try {

        const clientData = await Client.findOne({cqNo:certificateNo})
        console.log(clientData);
        if(!clientData){
           return resp.status(401).json({msg:"Certificate No is not Valid"})
        }
      return  resp.status(200).json(clientData)
      
    } catch (error) {
        console.log(error);
    }

}

const registerClient = async(req, resp)=>{
    const {name, scope,issueDate,expdate,frtsurr,secsurr,standared ,cstatus,certno,address} = req.body
    try {
        const existComp = await Client.findOne({cqNo:certno})
        if(existComp){
            return resp.status(401).json({success: false, message: 'Certificate already exists.'})
        }
        else{
            await Client.create({
                cname:name,
                cAddress:address,
                activity:scope,
                cIssueDate:issueDate,
                cExpDate:expdate,
                surr1st:frtsurr,
                surr2nd:secsurr,
                certName:standared,
                certStatus:cstatus,
                cqNo:certno
            })
           return resp.status(200).json({success: true, message: 'Certificate updated Successfully..'})
        }
        
    } catch (error) {
        console.log(error)
    }    

}


const viewClient = async(req, resp)=>{
    try {
        const client  = await Client.find()
        if (client.length === 0) {
            resp.status(404).json({ success: false, msg: "User data not found" });
        } else {
            resp.status(200).json({ success: true, clientd:client });
        }
        
    } catch (error) {
        console.log(error);
        
    }
   

}

const deleteClient = async(req, resp)=>{
    try {
        const id = req.params.ide
    await Client.deleteOne({_id:id})
    resp.send({success:true, msg:"Client Deleted Succesfully..."})
    
    } catch (error) {
        console.log(error)
        resp.status(500).json({ msg: "Error deleting user" });
    }
    
}

const getClientByID = async(req, resp) =>{
      
    try {
        const id = req.params.id
        let data = await Client.findOne({_id:id})
        console.log(data);
       return resp.status(200).json(data)        
       
    } catch (error) {
        console.log(error);
    }

}

const updateClientByID = async(req, resp) =>{
    try {
        const id = req.params.id
        const updatedData = req.body
        console.log(updatedData);
        await Client.updateOne({_id:id},{
            $set:updatedData
        })
        resp.status(200).json({success:true, msg:"updated successfully.."})
    } catch (error) {
        console.log(error);
        
    }

}

const searchByExpDate = async(req, res)=>{
    try {
        const currentDate = new Date();
        // Query for clients with expiration dates earlier than the current date
        const expiredClients = await Client.find({ cExpDate: { $lt: currentDate }, certStatus: "Expired" });

            res.json(expiredClients);
      } catch (error) {
        // Handle any errors that occur during the query
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

}


// const clientApplication = async(req, resp)=>{
//     try {
//         const { compname, website, email, address, mobile, certificate, country } = req.body;
//         const userApp = await Application.create({
//             cname:compname,
//             cwebsite:website,
//             cemail:email,
//             caddress:address,
//             cmobile:mobile,
//             ccertificate:certificate,
//             ccountry:country
//         });
//         resp.status(200).json({success:true, userApp });
        
//     } catch (error) {
//         console.log(error);
//         resp.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// }


const clientApplication = async(req, resp)=>{try {
    const { compname, website, email, address, mobile, country, certificate } = req.body;

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'singh.gunjan97@gmail.com',
        pass: 'qjnu smxj idkh thbq'
      }
    });

    const mailOptions = {
      from: 'singh.gunjan97@gmail.com',
      to: 'iso@psacertification.com', // Your Gmail address
      subject: 'New Application Submitted',
      html: `
        <p>Company Name: ${compname}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Website: ${website}</p>
        <p>Mobile: ${mobile}</p>
        <p>Country: ${country}</p>
        <p>Certificate: ${certificate}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    resp.status(200).json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    resp.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}





module.exports = {searchByCertNo, updateClientByID, getClientByID, deleteClient, viewClient, registerClient, searchByExpDate,clientApplication}