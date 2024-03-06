import React from 'react'

import { useAuth } from "../store/auth";
import { Link } from 'react-router-dom';

const Footer = () => {
  const {user} = useAuth()
  // const isAdmin = user && user.isAdmin;
  console.log(user.isAdmin)
  if(!user.isAdmin)
  return (
    <>
      <section className='footer-sec py-3'>
        <div className='container '>
          <div className='row'>
            <div className='col-5'>
            <div className='col d-flex '>
                   <img src="/images/psa-logo.png" className="site-logo img-fluid px-3" alt="" />
                  <div className='d-flex flex-column'>
                  <h1 className='name text-start'>PSA</h1>
                  <h3 className='tagline'>Quality Certification Ltd.</h3>
                  </div>
                    
                    
                </div>
              
              <p className='p-4'> The goal of our company is to help the clients to achieve excellence in their business by registering them to the ISO community. The certification that we provide helps the organizations to build reputation in the market.</p>
             </div>
            <div className='col-3 text-start'>
              <h3 className='borders'>Contact Us</h3>
              <p>PSA Quality Certification Ltd.</p>
              <p><i className="bi bi-telephone me-2 "></i>9910548579</p>
              <p><i className="bi bi-envelope me-2 "></i>iso@psacertification.com</p>
            </div>
            <div className='col-4 text-start '>
              <h3 className='borders'>Services</h3>
              <ul>
                                            <li>
                                                <a href="/iso-9001-2015/">ISO 9001:2015 - Quality Management system</a>
                                            </li>
                                            <li>
                                                <a href="/iso-14001-2015/">ISO 14001:2015 -Environment Management system</a>
                                            </li>
                                            <li>
                                                <a href="/iso-22000-2018/">ISO 22000:2018 Food Safety Management System</a>
                                            </li>
                                            <li>
                                                <a href="/iso-13485-2012/">ISO 13485:2012 - Medical Devices</a>
                                            </li>
                                            <li>
                                                <a href="/iso-27001-2013/">ISO 27001:2013 Information Security Management system</a>
                                            </li>
                                          
                                            <li>
                                                <a href="/haccp/">HACCP - Hazard Analysis Critical Control Point</a>
                                            </li>
                                        </ul>
            </div>
          </div>
         
        </div>
      </section>
    </>
  )
 
}

export default Footer
