import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { TbLayoutDashboard } from "react-icons/tb";

const AdminHeader = () => {
    const {user} = useAuth()
  return (
    <>   <nav className="navbar navbar-expand-lg bg-dark-bg-subtle">
    <div className="container">
      <a className="navbar-brand fs-5 fw-bold" href="#">PSA QUALITY </a>
      <div className="col-6">  
          <form className="d-flex" role="search" >
            <select className="form-select" aria-label="Select search option" onChange={(e) => setSearchOption(e.target.value)}>
            <option value="certificateNo">Certificate No</option>
            <option value="otherOption">Other Option</option>
          </select>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form></div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
                 <li className="nav-item dropdown">
                  <span className="fw-bold fs-6 text-white "> Welcome {user.uname} !</span>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <TbLayoutDashboard fontSize={25}/>
            </a>
            <ul className="dropdown-menu">

              <li><a className="dropdown-item px-3" href="#">Profile</a></li>
              <li><Link className="dropdown-item px-3" to={'/user'}>Dashboard</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item px-3" to={'/logout'}>LogOut</Link></li>
            </ul>
          </li>
         
        </ul>
   
      </div>
    </div>
  </nav></>
  )
}

export default AdminHeader