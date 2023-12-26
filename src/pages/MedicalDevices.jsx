import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const MedicalDevices = () => {
 
  const data={
    heading:"ISO 13485:2012 - MEDICAL DEVICES - QUALITY MANAGEMENT SYSTEM",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 13485:2012 - MEDICAL DEVICES - QUALITY MANAGEMENT SYSTEM</h1>
<p className='description '>ISO 13485 Medical Device Certification specifies equipments a Quality Management system which an Organization needs to demonstrate ability. Though Some of medical devices excludes the requirements of ISO 9001 Regularity.</p>

<p>Our ISO 13485:2012 Certification is a quality management system that helps a business to produce or supply medical related devices and services while taking care of the health problems. The key objective here is to facilitate the conformance to medical device regulatory requirements for quality assurance. This quality management system inherits some of the particular requirements of medical devices and excludes some requirements that belong to ISO 9001 as they are not appropriate in the medical industry.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default MedicalDevices