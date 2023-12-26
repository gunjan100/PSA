import React from 'react'

const Home = () => {
  return (
    <>
     <section><div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></section>
<div className='container py-4'>
  <div className='row'>
    <div className='col'>
      <p className='text-decor-1'>WELCOME TO PSA QUALITY CERTIFICATION</p>
      <h2 className='text-decor-2'>PSA Quality Certification Limited is a leading expert in System Certification and Consultancy.</h2>
      <button type="button" className="btn btn-primary btn-lg">Get in Touch</button>
      </div>
    <div className='col'>Founded in 2011, organization has built a credible reputation among the clients by offering wide range of services in the field of management certifications.
<br/><br/>
PSA has a highly experienced and dedicated group of professionals who work to meet the highest possible standards in the industry. In a very short period of time, PSA Quality Certification has been able to gain countrywide certification credible work in providing ISO various certifications.</div>
  </div>
</div>
<section className='bgimage'>
<div className='container bg-black bg-opacity-50'>
  <div className='row'>
    <div className='col'>
      <p className='text-decor-1'>PSA MISSION</p>
      <p className='text-decor-2 text-white'>To maintain credibility among clients and stakeholders and become the leading organization in providing ISO certification and Consultancy services.</p>
    </div>
    <div className='col'><p>The goal of our company is to help the clients to achieve excellence in their business by registering them to the ISO community. The certification that we provide helps the organizations to build reputation in the market. PSA follows the most practical approach for management certifications through inspections. The process of registration is friendly.
<br/><br/>
A company has to go through a set of simple target-oriented steps to finally get certified as an ISO compliant. During the assessment, our inspection team at each step checks for the standards and value of the application. The process of the inspection carried out by our team is also committed to provide advice for improvements in the existing management system.</p></div>
  </div>
</div>
</section>
<div className='container text-center py-5 '>
  <h2 className='fw-bolder'>Services We Provide</h2>
  <p>Following is the list ISO consultancy services offered by us</p>
  <div className="row g-3">
  <div className="col-md-3 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ISO 9001:2015</h5>
        <p className="card-text">International organization for standardization is a Series of ISO 9001:2015 Quality Management System (QMS) to set up Quality based Management System. </p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ISO 14001:2015</h5>
        <p className="card-text">The International Standard ISO 14001 Sets up Requirements for Environment Management system. ISO 14001:2015 is a certificate that offers quality </p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">OHSAS 18001:2007</h5>
        <p className="card-text">OHSAS 18001:1999 certification covers safety and health related aspects. It is a management system that is defined to be the labor and health protection </p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ISO 22000:2005</h5>
        <p className="card-text">International organization for standardization is a Series of ISO 22000:2005 Quality Management System (QMS) to set up Quality based  </p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
</div>
  
</div>
    </>
  )
}

export default Home
