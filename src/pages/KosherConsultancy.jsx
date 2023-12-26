import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const KosherConsultancy = () => {
  const data={
    heading:"Kosher Consultancy",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>Kosher Consultancy</h1>
<p className='description '>Kosher originated with the Hebrew culture and people usually associate kosher with Jews. However, the process itself is agnostic in that it is purity of food and conformance to certain criteria is what matters, not following any religious rituals in its selection of preparation. This is one reason why an increasing number of people is switching over to kosher certified products, whether these are vegetarian or non-vegetarian because that mark is a guarantee of purity. Even conscientious Muslims across the world prefer kosher labeled foods. This is in addition to a growing population of people from other denominations who have found such kosher foods to be healthy, safe and better in all respects.</p>
<p>Kosher laws are intricate and have specific guidelines for various food products. These food products must qualify according to the laid down laws in order to qualify for the Kosher label.</p>
<h4 className='fw-bold py-4'>Kosher Define:</h4>
<h6 className='fw-bold py-4'>DAIRY</h6>
Kosher laws specify that milk and milk products must be obtained only from kosher animals following the kosher process known as Cholov Yisroel.

<h6 className='fw-bold py-4'>PAREVE</h6>
In order to qualify for the Pareve label, foods must be totally vegetarian and must not have any dairy or meat ingredient or component. Fruits, vegetables, grains, fish and eggs are considered eligible for Pareve label. Fruits and vegetables must be washed thoroughly to remove any lurking insects.

<h6 className='fw-bold py-4'>KOSHER FOR PASSOVER</h6>
In order for foods to be eligible to carry the Kosher for Passover label, these foods must be made only with utensils that are specific for this process according to Jewish Law. Conformance will have the product carrying a "P" next to the Kosher check symbol.

  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default KosherConsultancy
