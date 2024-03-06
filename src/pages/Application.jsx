import React, { useState } from 'react'
import Hero from '../component/Hero'
import Sidemenu from '../component/Sidemenu'
import { toast } from 'react-toastify'

const Application = () => {
  const [clData, setClData] = useState({
    compname:"",
    email:"",
    address:"",
    website:"",
    mobile:"",
    country:"",
    certificate:""
  })
 

  const submitApplication = async (e) => {
    e.preventDefault();
  
    // Custom validation logic
    if (!clData.email || !clData.compname || !clData.address || !clData.website || !clData.mobile || !clData.country || !clData.certificate) {
      toast.error("Please fill out all fields");
      return;
    }
  
    // If all fields are filled out, proceed with form submission
    try {
      let response = await fetch("http://localhost:5000/api/cl/client/application", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clData)
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast.success("Application Submitted");
      } else {
        toast.error("OPPS!! Application not submitted yet");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again later.");
    }
  };
  

  const handleInput = (e)=>{
    const {name, value} = e.target
    setClData({
      ...clData,
      [name]:value
    })

  }




  const data = {
    heading: "Apply Here For Certificate",
  };

  return (
    <>
      <Hero {...data} />
      <div className='container my-5 '>
        <div className='row'>
          <div className='col-8'>
            <h5 className='fw-bolder'>Thanks for coming here</h5>
            <form className="row g-3" onSubmit={submitApplication}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" name='email' value={clData.email} onChange={handleInput}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="inputPassword4" name='compname' value={clData.compname} onChange={handleInput}/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='address' value={clData.address} onChange={handleInput}/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Website</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="www.abc.com" name='website' value={clData.website} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">Mobile No</label>
                <input type="number" className="form-control" id="inputCity" name='mobile' value={clData.mobile} onChange={handleInput} />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Cetificate</label>
                <select id="inputState" className="form-select" name='certificate' value={clData.certificate} onChange={handleInput}>

                  <option value="Select Certificate">Select Certificate</option>
                  <option value="ISO 9001:2015">ISO 9001:2015</option>
                  <option value="ISO 9001:2015"> ISO 14001:2015</option>
                  <option value="ISO 9001:2015">ISO 45001:2018</option>
                  <option value="ISO 9001:2015">  ISO 22000:2018 </option>
                  <option value="ISO 9001:2015"> ISO 13485:2012 </option>
                  <option value="ISO 9001:2015"> ISO 27001:2013 </option>
                  <option value="ISO 9001:2015"> ISO 20000:2011</option>
                  <option value="ISO 9001:2015"> ISO 15378 Certification</option>
                  <option value="ISO 9001:2015"> HACCP - Hazard Analysis Critical Control Point</option>
                  <option value="ISO 9001:2015">ISO 9001:2015</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputZip" className="form-label">Country</label>
                <input type="text" className="form-control" id="inputZip" name='country' value={clData.country} onChange={handleInput}/>
              </div>
            
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
          <div className='col-4 side-menu'>
            <Sidemenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
