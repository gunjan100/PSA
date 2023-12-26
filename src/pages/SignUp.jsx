import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [mobile,setMobile] = useState("");
  const navgate =useNavigate()
  
  const handleevent = (e) => {
    e.preventDefault(); // Corrected spelling
    let regobj = { id, name, password, username, city, state, mobile };
    console.log(regobj);
    fetch("  http://localhost:4000/client", {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(regobj)

    }).then((res)=>{
      toast.success("registered succesfully..")
      navgate('/login')
    }).catch((err)=>{
      toast.error("registration Failed..")

    })

  }

  return (
    <>
   
    <div className='card col-6 container my-4 '>
      <div className='card-header'>User Registration</div>
      <form className="row g-3 needs-validation" onSubmit={handleevent}>
  <div className="col-md-4">
    <label  className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value={name} onChange={e=>setName(e.target.value)} required/>
   
  </div>
  <div className="col-md-4">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="validationCustom02" value={password} onChange={e=>setPassword(e.target.value)} required/>
   
  </div>
  <div className="col-md-4">
    <label  className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      
    </div>
  </div>
  <div className="col-md-6">
    <label className="form-label">City</label>
    <input type="text" onChange={e=>setCity(e.target.value)} value={city}  className="form-control" id="validationCustom03" required/>
   
  </div>
  <div className="col-md-3">
    <label className="form-label">State</label>
    <select className="form-select" value={state} onChange={e=>setState(e.target.value)}  id="validationCustom04" required>
      <option>up</option>
      <option>mp</option>
    </select>
   
  </div>
  <div className="col-md-3">
    <label className="form-label">Mobile</label>
    <input type="text" onChange={e=>setMobile(e.target.value)} value={mobile} className="form-control" id="validationCustom05" required/>
   
  </div>
  

      <div className='card-footer'><button type="submit" className="btn btn-primary me-3  non"> SignUp</button><button type="button" className="btn btn-primary"> Back</button></div>
      </form> 
    </div>
  
    </>
  )
}

export default SignUp