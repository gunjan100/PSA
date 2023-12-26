import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const ITService = () => {
  const data={
    heading:"ISO 20000:2011 CERTIFICATION -IT SERVICE MANAGEMENT SYSTEM",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 20000:2011 CERTIFICATION -IT SERVICE MANAGEMENT SYSTEM</h1>
<p className='description '>ISO 20000-2011 Certification promotes the use of an integrated process for delivering the products and services while meeting the customer and business requirements.</p>

<p>For an organization to effectively function it has to first identify the linked activities and manage them in a fashion that ultimately fulfills the expectation of customers and the business. This certification mainly involves implementing service management processes and performing co-ordinated integration go gain greater efficiency, control, and opportunities for continuous improvement.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default ITService