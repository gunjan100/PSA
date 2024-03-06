import React, { useState } from "react";
import Adminlayout from "../component/layouts/Admin-layout";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

const RegisterClient = () => {
  const { token } = useAuth();
  const [clentdata, setClientData] = useState({
    name: "",
    scope: "",
    issuedate: "", // Change to 'issuedate' to match the name used in the form input
    expdate: "", // Change to 'expdate' to match the name used in the form input
    frtsurr: "", // Change to 'frtsurr' to match the name used in the form input
    secsurr: "", // Change to 'secsurr' to match the name used in the form input
    standared: "",
    cstatus: "",
    certno: "",
    address: "",
  });

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Adding leading zero if needed
    return `${year}-${month}-${day}`;
  };

  const handleInpot = (e) => {
    const { name, value } = e.target;
    setClientData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addClientData = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/api/cl/client", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(clentdata ),
    });
    if (response.ok) {
      const data = await response.json();
      toast.success("Updated Successfully");
    } else if (response.status === 401) {
      toast.error("Client is already exists.");
    } else {
      toast.error("Failed to update.");
    }
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-3">
            <Adminlayout />
          </div>
          <div className="col">
            <h4 className="custome my-4 py-2 "> Add Client </h4>
            <form className="row g-3" onSubmit={addClientData}>
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputEmail4"
                  value={clentdata.name}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-6">
  <label className="form-label">Status</label>
  <select
    name="cstatus"
    className="form-select"
    value={clentdata.cstatus}
    onChange={handleInpot}
  >
    <option value="">Select Status</option>
    <option value="Active">Active</option>
    <option value="Expired">Expired</option>
    <option value="Suspended">Suspended</option>
  </select>
</div>

              <div className="col-md-6">
                <label className="form-label">
                  Certificate No
                </label>
                <input
                   name="certno"
                  type="text"
                  className="form-control"
                  value={clentdata.certno}
                  id="inputCity"
                  onChange={handleInpot}
                />
              </div>

              <div className="col-md-6">
                <label  className="form-label">
                  Standered
                </label>
                <input
                  
                  type="text"
                  name="standared"
                  className="form-control"
                  value={clentdata.standared}
                  id="inputCity"
                  onChange={handleInpot}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="inputAddress"
                  value={clentdata.address}
                  placeholder="1234 Main St"
                  onChange={handleInpot}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Activity</label>
                <input
                  type="text"
                  name="scope"
                  className="form-control"
                  id="inputAddress"
                  value={clentdata.scope}
                  placeholder="1234 Main St"
                  onChange={handleInpot}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">
                  Issue Date
                </label>
                <input
                  type="date"
                  name="issuedate"
                  className="form-control"
                  id="issue"
                  value={formatDate(clentdata.issuedate)}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">
                  Exp Date
                </label>
                <input
                  type="date"
                  name="expdate"
                  className="form-control"
                  id="exp"
                  value={formatDate(clentdata.expdate)}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label  className="form-label">
                  1st Surrvilance
                </label>
                <input
                  type="date"
                  name="frtsurr"
                  className="form-control"
                  id="frtsur"
                  value={formatDate(clentdata.frtsurr)}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label  className="form-label">
                  2nd Surrvilance
                </label>
                <input
                  type="date"
                  name="secsurr"
                  className="form-control"
                  id="sndsur"
                  value={formatDate(clentdata.secsurr)}
                  onChange={handleInpot}
                />
              </div>

              <div className="col-12">
                <button className="btn btn-primary">ADD Client</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterClient;
