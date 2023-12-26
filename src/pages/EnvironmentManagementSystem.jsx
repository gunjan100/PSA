import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'


const EnvironmentManagementSystem = () => {
 
  const data={
    heading:"ISO 14001:2015 - ENVIRONMENT MANAGEMENT SYSTEM",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 14001:2015 - ENVIRONMENT MANAGEMENT SYSTEM</h1>
<p className='description '>The International Standard ISO 14001 Sets up Requirements for Environment Management system. ISO 14001:2015 is a certificate that offers quality assurance to the products and services in terms of adherence to environmental policies, actions, and plans. It also confirms a business to have an environmental management system and follow generic requirements.</p>

<p>ISO 14001 Standard covering envirmental management system (EMS) based on rational mythology Plan. Establish the objective and process to necessary in deliver results in accordance with envirmental Policy.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default EnvironmentManagementSystem