import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const ISO15378Certification = () => {
  const data={
    heading:"ISO 15378 CERTIFICATION",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>ISO 15378 CERTIFICATION</h1>
<p className='description '>ISO 15378:2011 defines the requirements that has to meet by an organization when it is involved in primary packing materials related to medicinal products.</p>

<p>The quality management system put forward by this certification consistently tries to meet the customer requirements by taking care of the products to meet the International standards and regulatory requirements that are applicable to the primary packing material. Overall ISO 15378:2011 is an application standard that holds good for manufacture, design and supply of the packing material related to the medicinal products.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default ISO15378Certification