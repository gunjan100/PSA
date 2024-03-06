import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../store/auth';



const LogIn = () => {
  const{ isLoggedIn, user, storeTokenLS, logOutUser , token, isLoading, userAutheniticate} = useAuth()
  // const {user} = useAuth()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const logInAccount = async(e) => {
      e.preventDefault();
      let response = await fetch("http://localhost:5000/api/logIn",{
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emaill:email, pass }),
      });

      let data = await response.json()
      console.log("this data",data);
      console.log("this from user data",isLoggedIn, "user data",user, storeTokenLS, logOutUser , token, isLoading, userAutheniticate);

      if(!data.success){
        toast.error("Enter the correct Details")
      }
     
      
      else{
        storeTokenLS(data.authT)                 
        toast.success("Login Successfully...")
        console.log(data.authT)    
    
        if (isLoggedIn && user.isAdmin) {
          navigate('/admin');
          console.log("inside admin ")
        } else {
          navigate('/');
        }
                
      }
 
  };
 
 
  return (
    <>
      <div className="card col-6 container my-4 ">
     
        <div className="card-header">User Login</div>
        <form onSubmit={logInAccount} className="row g-3 needs-validation">
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input
              type="email" // Fixed typo here
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
            <button type="submit" className="btn btn-primary me-3  non">
              LogIn
            </button>
          </div>
          <div className="card-footer">
            <span>Already have an account?</span>
            <NavLink to="/signup">
              <button className="btn btn-primary mx-3">SignUp</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
