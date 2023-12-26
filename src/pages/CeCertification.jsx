import React from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'

const CeCertification = () => {

  const data={
    heading:"CE Consultancy",
    
  }
  return (
    <>
      <Hero {...data}/>
<div className='container my-5 '>
<div className='row'>
  <div className='col-8'>
  <h1 className='fw-bolder'>CE Certification</h1>
<p className='description '>If you wish to export to Europe then you will need to obtain CE Marking Self Certification. CE Compliance marking proves that your products comply with EC directives relating to health, safety and environmental protection. The EC product directives list the performance levels and safety levels to which a product must comply in order to be acceptable for sale in the European Union. Some other countries may also have regulations that are similar where CE marking is considered acceptable. EC has laid down technical specifications for a host of products and these are known as the harmonized standards.

</p>
<p>PSA Quality Certification has a team of CE marking experts and offers CE compliance assistance to help you gain access to international markets. We provide complete solutions and A to Z services. Following our involvement you can obtain CE approval and this has far-reaching benefits. It is a mark of confidence for buyers that your product is safe and is of the highest standard. CE marking gets you free entry within the EU and EFTA. In the event products do not comply with standards then the CE process allows withdrawal through customs authorities.</p>

<p>CE marking is the declaration from the manufacturer the products offered by the company meet the requirements put forward by the EC directives. The abbreviation CE actually means European Conformity.</p>

<p>CE Marking in other words is a declaration about the essential requirements about the safety, European health, and environmental protection legislation. The requirements in the CE marking are also called as Product directives. Product directives is a document that contains the list of essential requirements, harmonized standards and performance levels that the products should meet in order to pass the CE marking. The technical specifications that are one form of requirement forms the Harmonization standard.</p>

  </div>
  <div className='col-4 side-menu'>
   <Sidemenu/>
     
  </div>
</div>
</div>
    </>
  )
}

export default CeCertification
