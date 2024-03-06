import React, { useState } from "react";
import { toast } from "react-toastify";

const Client = () => {
  const [certificateNo, setCertificateNo] = useState("");
  const [clientrecord, setClientrecord] = useState(null); // Initialize clientrecord as null

  const searchClient = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/api/cl/clientrecord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ certificateNo: certificateNo }),
    });
    let data = await response.json();
    console.log(data);
    if (!response.ok) {
      toast.error("Enter the valid Certificate");
    } else {
      setClientrecord(data);
    }
  };

  return (
    <>
      <div className="container py-5 ">
        <div className="col">
          <h4 className="custome py-4 ">Our Client List </h4>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search" onSubmit={searchClient}>
                <input
                  className="form-control me-2"
                  name="certificateNo"
                  value={certificateNo}
                  type="search"
                  placeholder="Enter Certificate No .."
                  aria-label="Search"
                  onChange={(e) => setCertificateNo(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          
          {/* Conditionally render the table */}
          {clientrecord && (
            <table className="table">
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <td>{clientrecord.cname}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{clientrecord.cAddress}</td>
                </tr>
                <tr>
                  <th>Activity/Scope</th>
                  <td>{clientrecord.activity}</td>
                </tr>
                <tr>
                  <th>Certificate Expary Date</th>
                  <td>{clientrecord.cExpDate}</td>
                </tr>
                <tr>
                  <th>1st Survillance Date</th>
                  <td>{clientrecord.surr1st}</td>
                </tr>
                <tr>
                  <th>2nd Survillance Date</th>
                  <td>{clientrecord.surr2nd}</td>
                </tr>
                <tr>
                  <th>Certificate Status</th>
                  <td>{clientrecord.certStatus}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Client;
