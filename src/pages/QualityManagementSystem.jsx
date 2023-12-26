import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const QualityManagementSystem = () => {
  const data={
    heading:"ISO 9001:2015 - QUALITY MANAGEMENT SYSTEM",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 9001:2015 - QUALITY MANAGEMENT SYSTEM</h1>
<p className='description '>International organization for standardization is a Series of ISO 9001:2015 Quality Management System (QMS) to set up Quality based Management System. PSA Quality Certification Limited is ISO 9001:2015 is a certificate that is dedicated to certify the quality management system standards of a business.</p>

<p>This certificate is accredited by independent certification bodies by inspection and administration. ISO 9001:2015 offers guidance to the organizations to handle the customer complaints about the products including operation, design, planning, improvement, and maintenance. The handling of complaints is to be done through a specific process to maintain the overall quality of the management system. This standard is applicable only for the customer handling process within an organization. The employment disputes and resolution among the workers is not covered by this certification. Our moto is Creating customer focused environment to enhance the customer satisfaction. This will involve resolving complaints, enhancing the ability of the organization for improving customer service.</p>
<h6 className='fw-bold py-4'>ISO 9001:2015 Certification Benefit:</h6>
<ul>
  <li>Inspection of processes and checking if they are effective.</li>
  <li>Keep track of the adequate records.</li>
  <li>Checking for defects in the final output and suggesting corrective action if necessary.</li>
  <li>Reviewing individual processes regularly and checking their quality and effectiveness</li>
  <li>Offering suitable measures for facilitating continual improvement.</li>
  <li>A customer oriented approach, with involvement of people that tends to customer satisfaction.</li>
</ul>







  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default QualityManagementSystem
