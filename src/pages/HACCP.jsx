import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const HACCP = () => {
  const data={
    heading:"HACCP - HAZARD ANALYSIS CRITICAL CONTROL POINT",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>HACCP - HAZARD ANALYSIS CRITICAL CONTROL POINT</h1>
<p className='description '>Hazard Analysis Critical Control Point or HACCP stands for a series of process control procedures and sensitive points in the food chain.</p>

<p>The main aim of this process control procedure is to keep the quality of food consumable by the consumer. This standard is actually an international standard after being introduced in the seventies. The process of certification is similar to many other food-governing standards. HACCP follows a five step process in certifying a food as safe. These steps include Preparation, developing HACCP plan, Implementing the plan, International certification body system, Monitoring and maintenance of HACCP system.</p>



  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default HACCP