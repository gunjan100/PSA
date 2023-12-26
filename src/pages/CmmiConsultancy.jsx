import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const CmmiConsultancy = () => {
  const data={
    heading:"CMMI Consultancy",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>CMMI Consultancy</h1>
<p className='description '>PSA Quality Certification -CMMI Services helps to reach the desired Maturity level after achieving the targets. PSA is working worldwide in the countries such as India, Australia, USA, and UK in the field of CMMI services. The expert consults deployed from the firm have helped many of companies to be on the right track of progress. Our consultants.

</p>
<p>CMMI model provides improvement approaches to the companies to add efficiency in their processes. It can also be used to bring improvements in the company, its division, team, and goals. It provides guidance to prioritize the processes and provide a reference to improve the quality of the processes used in the company.</p>


<h6 className='fw-bold py-4'>There Are Three Models That Address The Following:</h6>
<ul>
  <li>TCMMI-DEV- Developing products and services</li>
  <li>CMMI-ACQ- Acquisition of Products and Services</li>
  <li>CMMI-SVC- Management, establishment, and delivery of the services</li>
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

export default CmmiConsultancy
