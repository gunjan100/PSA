import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'


const UsFdaRegistration = () => {
  const data={
    heading:"US-FDA Registration",
    
  }
  return (
    <>
<Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>US-FDA Registration And Consultancy</h1>
<p className='description '>PSA Quality Certification is best Consulting firm for 'US FDA Registration Services in India'. 'US Food Facility Registration' is our expertise though we do provide US FDA registration service in other product groups also.</p>
<h4 className='fw-bold py-4'>We May Also Service As Authorized Agent For US FDA.</h4>
<p>US FDA Registration is a mandatory requirement to place your products in USA. US FDA Registration is given under US bio-terrorism act. After registration you are allotted a registration number which is used bu US custom authority & other concerned authorities in USA to established your genuine identity as a suppliers to USA.</p>

  <h6 className='fw-bold py-4'>US FDA Registration Is Given In Many Categories. Most Prominent Categories Are :</h6>
  <ul>
    <li>US FDA Registration for Food
<li>US FDA Registration for cosmetics</li>
<li>US FDA Registration for drugs</li>
<li>US FDA Registration for medical devices</li>

</li>
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

export default UsFdaRegistration
