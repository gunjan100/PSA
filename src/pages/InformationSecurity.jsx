import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const InformationSecurity = () => {
   
  const data={
    heading:"ISO 27001:2013 INFORMATION SECURITY MANAGEMENT SYSTEM",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 27001:2013 INFORMATION SECURITY MANAGEMENT SYSTEM</h1>
<p className='description '>ISO 27001:2005 certification offered by us provide design, implementation, development, support, maintenance and end to end web and business solutions. The certification extends to allied IT solutions and software applications. This shows that a particular company can protect the integrity, confidentiality, and availability of information based on the requirements.</p>

<p>With ISO 27001 certification from PSA Quality Certification you can show your clients and partners the level of security and quality of your IT-based business processes. PSA Quality Certification has the expertise to certify information security management systems in accordance with ISO 27001.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default InformationSecurity