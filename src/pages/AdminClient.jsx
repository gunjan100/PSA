import React, { useState, useEffect } from "react";
import Adminlayout from "../component/layouts/Admin-layout";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

const AdminClient = () => {
  const [clientL, setClientL] = useState([]);
  const { token } = useAuth();

  const getAllClientData = async () => {
    let response = await fetch("http://localhost:5000/api/cl/viewclient", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    console.log(data);
    if (!data) {
      toast.error("data not found");
    } else {
      setClientL(data.clientd);
    }
  };

  const deleteClient = async(id)=>{
    let response = await fetch(`http://localhost:5000/api/cl/delete/client/${id}`,{
      method:"DELETE",
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    if(response.ok){
      toast.success("User Deleted Successfully...")
      getAllClientData();
    }
    else{
      toast.error("OOPS!! NOT Deletd")
    }

  }

  useEffect(() => {
    getAllClientData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Adminlayout />
          </div>
          <div className="col">
           
            <h4 className="custome my-4 py-2 "> Our Client List</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Comp Name</th>
                  <th scope="col">Standered</th>
                  <th scope="col">Status</th>
                  <th scope="col">Exp. Date</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {clientL.map((client, index) => {
                  return (
                    <tr key={client._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{client.cname}</td>
                      <td>{client.certName}</td>
                      <td>{client.certStatus}</td>
                      <td>{client.cExpDate.substring(0, 10)}</td>
                      <td>
                        <NavLink className="btn btn-primary btn-sm" to={`/client/edit/${client._id}`}>
                          Edit
                        </NavLink>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteClient(client._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClient;
