import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";

const SignUp = () => {

  const navigate = useNavigate();
  const {storeTokenLS}  = useAuth()

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const createAccount = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method:"post",
      crossDomain:true,
      headers:{
        "Content-type": "application/json",
      },
      body:JSON.stringify({name:name, email:email, password:pass})
    })
    const data = await response.json();
     console.log(data)
     if (data.error === "ValidationError") {
      toast.error("enter the valid creditials..")
  }
  else if (!data.success) {
    toast.error("User with this email already exists.")
  }
  else{
    toast.success("User created successfully")
    storeTokenLS(data.authT)
    setName("")
    setEmail("")
    setPass("")
    navigate('/')
  }

  

  };

  return (
    <>
      <div className="card col-6 container my-4 ">
        <div className="card-header">User Registration</div>
        <form onSubmit={createAccount} className="row g-3 needs-validation">
        <div className="col-md-4">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input
              type="eamil"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          
          <div className="col-md-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
          </div>
         

          <div className="card-footer">
            <button type="submit" className="btn btn-primary me-3">
              {" "}
              SignUp
            </button>
          </div>
          <div className="card-footer">
            <span>you have already an Account ?</span>
            <NavLink to="/login">
              <button className="btn btn-primary mx-3"> LogIn</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
