
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { TbLayoutDashboard } from "react-icons/tb";

const Header = () => {
  const {isLoggedIn, logOutUser} = useAuth() 
  const {user} = useAuth()
  const [search, setSearch] = useState('')





const searchByExpDate = (e)=>{
     e.preventDefault()

}



  if(!user.isAdmin)
  return (
    <>
      <header>
        <div className="container py-3">
          <div className="row">
            <div className="col col-lg-4 col-md-6 d-flex pt-3">
              <img
                src="/images/psa-logo.png"
                className="site-logo img-fluid px-3"
                alt=""
              />
              <div className="d-flex flex-column">
                <h1 className="name text-start">PSA</h1>
                <h3 className="tagline d-none d-lg-block">
                  Quality Certification Ltd.
                </h3>
              </div>
            </div>
            <div className="col col-lg-8 col-md-6 pt-3">
              <div className="row">
                <div className="col  d-none d-lg-block">
                  <i className="bi bi-envelope me-2 "></i> Drop us a line
                  <h5>iso@psacertification.com</h5>
                </div>
                <div className="col text-center d-none d-lg-block ">
                  <i className="bi bi-telephone me-2 "></i> Give us a call
                  <h5>(+91) 9910548579</h5>
                </div>
                <div className="col d-block">
                  {
                    isLoggedIn? (<><h6>Welcome {user.uname} ! </h6><NavLink className="btn btn-primary" to={'/logout'}>LogOut</NavLink></>
                    ):(<span>
                      <NavLink to="/signup" className="btn btn-primary me-3">
                        Register
                      </NavLink>
                      <NavLink to="/login" className="btn btn-primary me-3">
                        LogIn
                      </NavLink>
                    </span>)
                  }
                                      
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar sticky-top navbar-expand-md">
          <div className="container shadow-sm">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    System Cetification
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/QualityManagementSystem"
                      >
                        ISO 9001:2015 - Quality Management System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/EnvironmentManagementSystem"
                      >
                        ISO 14001:2015 - Environment Management System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/OHSAS">
                        ISO 45001:2018 -Occupational Health and Safety
                        Assessment Series
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/FoodSafetyManagement"
                      >
                        ISO 22000:2018 Food Safety Management System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/MedicalDevices">
                        ISO 13485:2012 - Medical Devices - Quality Management
                        System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/InformationSecurity"
                      >
                        ISO 27001:2013 Information Security Management System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/ITService">
                        ISO 20000:2011 Certification -IT Service Management
                        System
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/ISO15378Certification"
                      >
                        ISO 15378 Certification
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/HACCP">
                        HACCP - Hazard Analysis Critical Control Point
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product Cetification
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/kosherconsultancy"
                      >
                        Kosher Consultancy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/cmmiconsultancy">
                        CMMI Consultancy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/cecertification">
                        CE Consultancy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/gostrcertification"
                      >
                        GOST-R Certification
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/UsFdaRegistration"
                  > USFDA 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/clientList"
                  >
                    Client 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/apply"
                  >
                    Apply Online
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
  // else{
  //   return(  <>  
  //     <nav className="navbar navbar-expand-lg bg-dark-bg-subtle">
  //   <div className="container">
  //     <a className="navbar-brand fs-5 fw-bold" href="#">PSA QUALITY </a>
  //     <div className="col-6">  
  //         <form className="d-flex" role="search" onSubmit={searchByExpDate}>
  //           <select className="form-select" aria-label="Select search option" onChange={(e) => setSearchOption(e.target.value)}>
  //           <option value="certificateNo">Certificate No</option>
  //           <option value="otherOption">Other Option</option>
  //         </select>
  //         <button className="btn btn-outline-light" type="submit">Search</button>
  //       </form></div>

  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
  //                <li className="nav-item dropdown">
  //                 <span className="fw-bold fs-6 text-white "> Welcome {user.uname} !</span>
  //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //           <TbLayoutDashboard fontSize={25}/>
  //           </a>
  //           <ul className="dropdown-menu">

  //             <li><a className="dropdown-item px-3" href="#">Profile</a></li>
  //             <li><Link className="dropdown-item px-3" to={'/user'}>Dashboard</Link></li>
  //             <li><hr className="dropdown-divider"/></li>
  //             <li><Link className="dropdown-item px-3" to={'/logout'}>LogOut</Link></li>
  //           </ul>
  //         </li>
         
  //       </ul>
   
  //     </div>
  //   </div>
  // </nav> </>
  
  // )

  
};

export default Header;
