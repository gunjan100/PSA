import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";
import Adminlayout from '../component/layouts/Admin-layout';

const AdminContact = () => {
  const { token } = useAuth();
  const[contact, setContact] = useState([])
   
  const getAllContactDetails =async ()=>{
    let response = await fetch("http://localhost:5000/api/admin/contact",{
      method:"GET",
      headers:{
      Authorization: `Bearer ${token}`,
      }
      })
 
  let data = await response.json();
  console.log("data FROM CONTACT API", data);
  if(!data.success){
    toast.error("Sorry Contact data not found")
  }
  else{
    setContact(data.contactDetails)
    
  }
};

const deleteContactById = async(id)=>{
  let response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`, {
    method:"DELETE",
    headers:{

   Authorization: `Bearer ${token}`,
      }
      })
 
  let data = await response.json();
 
  if(data.success){
    toast.success("Record Delted")
    getAllContactDetails()
  }
  else{
    toast.error("OOPS !!")
    
  }
}


  useEffect(() => {
    getAllContactDetails()
  }, [])
  
  return (
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-3"><Adminlayout/></div>
        <div className="col">  <h4 className="custome my-4 py-2 ">Contact By Client</h4>
      <div className="row g-3">

       {
        contact.map((item, index)=>{
          return(
            <div className="col-md-3 mb-3 mb-sm-0 " key={item._id}>    
            <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{item.ucname}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{item.uemail}</h6>
      <p className="card-text">Message : {item.umessage}</p>

      <p className="card-text">Mobile No : {item.umobile}</p>
      <p className="card-text">Contact Person : {item.username}</p>
      <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteContactById(item._id)}>Delete</button>
    </div>
  </div>
  
  
  </div>

          )
        })
       }

       
      </div>

</div>
</div>


    </div>
    </>
  )
}

export default AdminContact