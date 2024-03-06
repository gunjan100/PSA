import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from "../store/auth";
import { useParams } from 'react-router-dom';
import Adminlayout from '../component/layouts/Admin-layout';

const AdminUpadate = () => {

    const [singleUser, setSingleUser] = useState({
    uname: "",
    uemail: ""
  });
  const { token } = useAuth();
  const params = useParams()

  const handleInpot = (e) => {
    const { name, value } = e.target;
    setSingleUser(prevState => ({
        ...prevState,
        [name]: value
    }));
}

  const updateUser = async(e)=>{
        e.preventDefault()
    try {
      let response = await fetch(`http://localhost:5000/api/admin/user/update/${params.id}`,{
        method:"PATCH",
        headers:{
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:JSON.stringify(singleUser)
      } ) 
      toast.success("Updated Succesfully..")
      
    } catch (error) {
      console.log(error);
            
    }
  }

  const getSingleUserData = async(id)=>{
    let response = await fetch(`http://localhost:5000/api/admin/user/${params.id}`,{
        method:"GET",
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    let data = await response.json()
    console.log("Data from API:", data); // Log the entire response
    if(data.success){
      setSingleUser(data.data);
    } else {
        toast.error("data not found");
    }
}


  useEffect(() => {
  
    getSingleUserData()
  }, [])
  
  return (
    <>

<div className="container py-4">
        <div className="row">
          <div className="col-3">
            <Adminlayout />
          </div>
          <div className="col-9">
            <h4 className="custome my-4 py-2 "> Add Client </h4>
            <form className="row g-3" onSubmit={updateUser}>
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" name="uemail" className="form-control" id="inputEmail4" value={singleUser.uemail} onChange={handleInpot}/>
  </div>
 
  <div className="col-6">
    <label className="form-label">Name</label>
    <input type="text" name='uname' className="form-control" id="inputAddress" placeholder="1234 Main St" value={singleUser.uname} onChange={handleInpot}/>
  </div>
  

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Update</button>
  </div>
</form>
          </div>
        </div>
      </div>



      
    </>
  )
}

export default AdminUpadate