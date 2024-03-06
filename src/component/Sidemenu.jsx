import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidemenu = () => {
  return (
    <>
       <div className='col side-menu'>
          <h3 className='fw-bolder borders'>Other Services</h3>
            <ul>
            <li>
                    <NavLink  to="/QualityManagementSystem">ISO 9001:2015 - Quality Management system</NavLink>
                </li>
                <li>
                    <NavLink to="/EnvironmentManagementSystem">ISO 14001:2015 -Environment Management system</NavLink>
                </li>
                <li>
                    <NavLink to="/OHSAS"> ISO 45001:2018 -Occupational Health and Safety Assessment Series</NavLink>
                </li>
                <li>
                    <NavLink  to="/FoodSafetyManagement">ISO 22000:2018 Food Safety Management System</NavLink>
                </li>
                <li>
                    <NavLink to="/MedicalDevices">ISO 13485:2012 - Medical Devices - Quality Management System</NavLink>
                </li>
                <li>
                    <NavLink   to="/InformationSecurity">ISO 27001:2013 Information Security Management system</NavLink>
                </li>
                <li>
                    <NavLink to="/ITService">ISO 20000:2011 Certification - IT Service Management System</NavLink>
                </li>
                <li>
                </li>
                <li>
                    <NavLink to="/HACCP">HACCP - Hazard Analysis Critical Control Point</NavLink>
                </li>
                <li>
                    <a href="/ce-certification/">CE Certification</a>
                </li>

            </ul>
        </div>
    </>
  )
}

export default Sidemenu
