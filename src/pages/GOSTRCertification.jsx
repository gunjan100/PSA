import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const GOSTRCertification = () => {
  const data={
    heading:"GOST-R Consultancy",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>GOST-R Certification</h1>
<p className='description '>GOST R certificate and declaration services from PSA Quality Certification– ensures your products comply with Russian safety regulations.</p>
<p>To trade many product categories in Russia, you need to ensure that your products meet the stringent national safety regulations and standards of the GOST R system. As an accredited certification body for the GOST R system since 1993, we are authorized to help ensure the compliance of your products.</p>
<p>
GOST R certificate and declaration services from a trusted world leader As the world-leading provider of testing, inspection, verification and certification, we offer you a network of accredited laboratories and GOST R experts, and accredited certification body status. As a result, we are perfectly placed to help ensure the compliance of your products with Russian safety regulations.</p>
<h4 className='fw-bold py-4'>We offer you :</h4>
<h6 className='fw-bold py-4'>Expertise in international and Russian standards -</h6>
We can help you reconcile the two systems quickly and effectively


<h6 className='fw-bold py-4'>A unique global reach with offices in all major countries -
</h6>
we can manage complex projects involving a number of parties and countries, providing a local service in the local language for you, your clients, partners and suppliers - all over the world


<h6 className='fw-bold py-4'>Expert GOST R advice -</h6>
we can help you avoid potential delays, speed up the GOST R certification process and optimize your costs
<h6 className='fw-bold py-4'>Up-to-date knowledge on GOST R requirements and procedures –</h6>
so you are in compliance with the very latest changes

<h6 className='fw-bold py-4'>worldwide reputation for integrity, transparency and impartiality –</h6>
that is why we are the first choice for clients across the globe requiring a trusted accredited certification body for GOST R certification and declaration services

  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default GOSTRCertification
