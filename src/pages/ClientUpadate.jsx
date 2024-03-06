import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Adminlayout from "../component/layouts/Admin-layout";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom"; // Import useParams

const ClientUpdate = () => {
  const { token } = useAuth();
  const params = useParams(); // Extract id from URL params

  const [clientData, setClientData] = useState({
    cname: "", // Update to match the key in the data object (cname instead of name)
    activity: "",
    cIssueDate: "",
    cExpDate: "",
    surr1st: "",
    surr2nd: "",
    certName: "",
    certStatus: "",
    cqNo: "",
    cAddress: "",
  });

  const handleInpot = (e) => {
    const { name, value } = e.target;
    setClientData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Adding leading zero if needed
    return `${year}-${month}-${day}`;
  };

  const updateClientData = async(e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let response = await fetch(`http://localhost:5000/api/cl/client/update/${params.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(clientData), // Send updated data from stat
    }
  );
  let data = await response.json();
  console.log("Data from API:", data);
  if(data.success){
    toast.success("Client Updated Successfully..")
  }
  else{
    toast.error("Sorry Fail to update")
  }
  }





  
  const getClientByID = async () => {
    try {
      let response = await fetch(
        `http://localhost:5000/api/cl/client/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      console.log("Data from API:", data);
      if (data) {
        setClientData(data);
      } else {
        toast.error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
      toast.error("Failed to fetch client data");
    }
  };

  useEffect(() => {
    console.log("Fetching client data...");
    getClientByID(); // Pass the id parameter to getClientByID
  }, []); // Add id to the dependency array

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-3">
            <Adminlayout />
          </div>
          <div className="col">
            <h4 className="custome my-4 py-2 "> Add Client </h4>
            <form className="row g-3" onSubmit={updateClientData}>
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input
                  name="cname" // Change from "Status" to "certStatus"
                  type="text"
                  className="form-control"
                  value={clientData.cname}
                  id="inputCity"
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-6">
  <label className="form-label">Status</label>
  <select
    name="certStatus"
    className="form-select"
    value={clientData.certStatus}
    onChange={handleInpot}
  >
    <option value="">Select Status</option>
    <option value="Active">Active</option>
    <option value="Expired">Expired</option>
    <option value="Suspended">Suspended</option>
  </select>
</div>

              <div className="col-md-6">
                <label className="form-label">Certificate No</label>
                <input
                  name="cqNo"
                  type="text"
                  className="form-control"
                  value={clientData.cqNo}
                  id="inputCity"
                  onChange={handleInpot}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Standered</label>

                <input
                  type="text"
                  name="certName" // Change from "standareds" to "certName"
                  className="form-control"
                  value={clientData.certName}
                  id="inputCity"
                  onChange={handleInpot}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="cAddress"
                  className="form-control"
                  id="inputAddress"
                  value={clientData.cAddress}
                  placeholder="1234 Main St"
                  onChange={handleInpot}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Activity</label>

                <input
                  type="text"
                  name="activity" // No change needed
                  className="form-control"
                  id="inputAddress"
                  value={clientData.activity}
                  placeholder="1234 Main St"
                  onChange={handleInpot}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Issue Date</label>

                <input
                  type="date"
                  name="cIssuedate" // No change needed
                  className="form-control"
                  id="inputCity4"
                  value={clientData.cIssueDate}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Exp Date</label>

                <input
                  type="date"
                  name="cExpDate" // No change needed
                  className="form-control"
                  id="inputCity3"
                  value={formatDate(clientData.cExpDate)}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">1st Surrvilance</label>
                <input
                  type="date"
                  name="surr1st" // No change needed
                  className="form-control"
                  id="inputCity2"
                  value={formatDate(clientData.surr1st)}
                  onChange={handleInpot}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">2nd Surrvilance</label>

                <input
                  type="date"
                  name="surr2nd" // No change needed
                  className="form-control"
                  id="inputCity1"
                  value={formatDate(clientData.surr2nd)}
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

export default ClientUpdate;
