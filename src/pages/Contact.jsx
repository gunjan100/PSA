import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container py-5'>
        <div className='row shadow '>
          <div className='col-4 palette-2-bg'>
            <h2>Our Contacts</h2>
            <p>PSA QUALITY CERTIFICATION LTD.</p>
            <p><i className="bi bi-geo-alt me-3 "></i>Office no : 707, 7th floor, T3 byte, NX1, Noida Extention</p>
<p><i className="bi bi-phone me-3"></i>9910548579</p>
<p><i className="bi bi-envelope me-3"></i>iso@psacertification.com</p>
<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9595196784735!2d77.42973627387678!3d28.60099118551529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5108f001ad%3A0x421c8bf9dbcafa74!2sNX%20ONE%20BYTE!5e0!3m2!1sen!2sin!4v1701081016238!5m2!1sen!2sin" width="300" height="200" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
          </div>
          <div className='col-8 palette-4-bg p-5'>
            <h1>Send Us A Message</h1>
<p>Feel free to drop us a line below.</p>
<form action="https://formspree.io/f/meqbbgpb" method='POST'>
<div className="row">
  <div className="col">
   
    <input type="text" name='name' className="form-control" required placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="email" name='email' className="form-control" placeholder="Email" aria-label="Last name" required/>
  </div>
</div>
<div className="row py-4 ">
  <div className="col">
    <input type="number" name='mobile' className="form-control" placeholder="Mobile" aria-label="First name" required/>
  </div>
  <div className="col">
    <input type="text" name='cname' className="form-control" placeholder="Company Name" aria-label="Last name" required/>
  </div>
</div>
<div className='col'><textarea name="message" className="form-control" placeholder="your massage" id="exampleFormControlTextarea1" rows="3" required></textarea></div>
<button type="submit" className="btn btn-primary btn-lg my-4">Send your Request</button>
</form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
