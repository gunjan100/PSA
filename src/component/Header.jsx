import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, isLoading, user} = useAuth0();
  
  return (
    <>
      <header>
        <div className='container py-3'>
            <div className='row'>
                <div className='col-md-4 d-flex pt-3'>
                   <img src="/images/psa-logo.png" className="site-logo img-fluid px-3" alt="" />
                  <div className='d-flex flex-column'>
                  <h1 className='name text-start'>PSA</h1>
                  <h3 className='tagline'>Quality Certification Ltd.</h3>
                  </div>
                    
                    
                </div>
                <div className='col-md-8 pt-3'>
                  <div className='row'>
                    <div className='col  d-none d-lg-block'><i className="bi bi-envelope me-2 "></i> Drop us a line

<h5>iso@psacertification.com</h5>
</div>
                    <div className='col text-center d-none d-lg-block '><i className="bi bi-telephone me-2 "></i> Give us a call
                    <h5>(+91) 9910548579</h5>
</div>
                    <div className='col d-block text-center'>
                      <NavLink  to="/signup" className="btn btn-primary me-3">Register</NavLink>
                    <NavLink to="/login" className="btn btn-primary">LogIn</NavLink>                 
                    
                    </div>
                    </div>  
                    
                  </div>
            </div>
        </div>
       
        <nav className="navbar sticky-top navbar-expand-lg">
          
  <div className="container-fluid shadow-sm">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            System Cetification
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/QualityManagementSystem">ISO 9001:2015 - Quality Management System</NavLink></li>
            <li><NavLink className="dropdown-item" to="/EnvironmentManagementSystem">ISO 14001:2015 - Environment Management System</NavLink></li>            
            <li><NavLink className="dropdown-item" to="/OHSAS">ISO 45001:2018 -Occupational Health and Safety Assessment Series</NavLink></li>
            <li><NavLink className="dropdown-item" to="/FoodSafetyManagement">ISO 22000:2018 Food Safety Management System</NavLink></li>            
            <li><NavLink className="dropdown-item" to="/MedicalDevices">ISO 13485:2012 - Medical Devices - Quality Management System</NavLink></li>
            <li><NavLink className="dropdown-item" to="/InformationSecurity">ISO 27001:2013 Information Security Management System</NavLink></li>            
            <li><NavLink className="dropdown-item" to="/ITService">ISO 20000:2011 Certification -IT Service Management System</NavLink></li>
            <li><NavLink className="dropdown-item" to="/ISO15378Certification">ISO 15378 Certification</NavLink></li>            
            <li><NavLink className="dropdown-item" to="/HACCP">HACCP - Hazard Analysis Critical Control Point</NavLink></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product Cetification
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/kosherconsultancy">Kosher Consultancy</NavLink></li>
            <li><NavLink className="dropdown-item" to="/cmmiconsultancy">CMMI Consultancy</NavLink></li>
            <li><NavLink className="dropdown-item" to="/cecertification">CE Consultancy</NavLink></li>
            <li><NavLink className="dropdown-item" to="/gostrcertification">GOST-R Certification</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/UsFdaRegistration">US-FDA Registration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/client">Client List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
      </header>
    </>
  )
}

export default Header
