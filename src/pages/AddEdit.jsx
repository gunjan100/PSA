import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {app, db} from '../firebase'
import { ref, push } from 'firebase/database';
import { useParams } from 'react-router-dom';




// Initial state for the form fields
const intialstate={
  FirstName:"",  
  OrgName:"",
  address:"",
  city:"",
  sstate:"",
  zip:"",
  scope:"",
  standered:"",
  cqno:"",
  issdate:"",
  expdate:"",
  frstdate:"",
  secdate:"",
  status:"",

};

const AddEdit = () => {
   // useState hooks to manage state
   const [state, setState] = useState(intialstate);
   const[data, setData] = useState({})
   const { id } = useParams();
   const [client, setClient] = useState(null);

   // React Router hook to manage navigation
  const navigate = useNavigate();

  // Destructuring state for easy access to form fields
  const {
    FirstName,
    OrgName,
    address,
    city,
    sstate,
    zip,
    scope,
    standered,
    cqno,
    issdate,
    expdate,
    frstdate,
    secdate,
    status
  } = state;

    // Function to handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation to check if all fields are filled
    if (
      !state.FirstName ||
      !state.OrgName ||
      !state.address ||
      !state.city ||
      !state.sstate ||
      !state.zip ||
      !state.scope ||
      !state.standered ||
      !state.cqno ||
      !state.issdate ||
      !state.expdate ||
      !state.frstdate ||
      !state.secdate ||
      !state.status
    ) {
      toast.error("Fill in all details.");
    } else {
      const clientRef = ref(db, 'Client'); // Reference to the 'Client' node
  

       // Pushing state data to the database
      push(clientRef, state)
        .then(() => {
          toast.success("Information saved successfully.");
          setTimeout(() => navigate('/dashboard'), 2000);// Navigate to '/dashboard' after 2 seconds
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };
  
// Function to handle input changes
   const handleInputChange=(e)=>{
    const { id, value } = e.target;
    setState({ ...state, [id]: value }); // Update the state with the new value

   };

   

  // Render your form to edit/update client details based on the 'client' state


  return (
    <>
    <div className='container py-5 '>
    <nav style={{ '--bs-breadcrumb-divider': '' }} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">Add Client</li>
  </ol>
</nav>

      <h3 className='pb-3'>Add new client</h3>
      <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">First name </label>
    <input 
    type="text"
    className="form-control"
    id="FirstName"
    onChange={handleInputChange}
    value={state.FirstName}

     />
  </div>
  <div className="col-md-6">
    <label className="form-label">Organization name </label>
    <input
     type="text" 
     className="form-control"
     id="OrgName"
     onChange={handleInputChange}
     value={state.OrgName}
      />
  </div>
  <div className="col-12">
    <label className="form-label">Address</label>
    <input 
    type="text"
    className="form-control"
    id="address"
    placeholder="1234 Main St"
    onChange={handleInputChange}
    value={state.address}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">City</label>
    <input 
     type="text" className="form-control" 
     id="city"
     onChange={handleInputChange}
     value={state.city} />
  </div>
  <div className="col-md-4">
    <label className="form-label">State</label>
    <select
     id="sstate" 
     className="form-select"
      value={state.sstate} // Reflect the state value
      onChange={handleInputChange}>
       <option value="">Choose...</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="MH">Maharashtra</option>
     
    </select>
  </div>
  <div className="col-md-2">
    <label ame="form-label">Zip</label>
    <input 
    type="text" 
    className="form-control" 
    id="zip"    
    onChange={handleInputChange}
    value={state.zip}/>
  </div>
  <div className="col-12">
    <label className="form-label">Scope</label>
    <input
    type="text"
    className="form-control"
    id="scope"
    placeholder="1234 Main St"
    onChange={handleInputChange}
    value={state.scope}
    
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Standard </label>
    <input 
    type="text"
    className="form-control"
    id="standered"
    onChange={handleInputChange}
    value={state.standered}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Certificate No  </label>
    <input
    type="text"
    className="form-control"
    id="cqno"
    onChange={handleInputChange}
    value={state.cqno}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Issue date </label>
    <input
    type="date"
    className="form-control"
    id="issdate"
    onChange={handleInputChange}
    value={state.issdate}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Expiry date </label>
    <input 
    type="date" 
    className="form-control"
     id="expdate" 
     onChange={handleInputChange}
      value={state.expdate}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">1st Surveillance </label>
    <input type="date" className="form-control" id="frstdate" onChange={handleInputChange} value={state.frstdate}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">2nd Surveillance</label>
    <input type="date" className="form-control" id="secdate" onChange={handleInputChange} value={state.secdate}/>
  </div>
  <div className="col-md-12">
    <label  className="form-label">Status </label>
    <input 
    type="text"
    className="form-control"
    id="status"
    onChange={handleInputChange}
    value={state.status}
    />
  </div>
 
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Save</button>
  </div>
</form>


    </div>   
    
    
    </>
  )
}

export default AddEdit