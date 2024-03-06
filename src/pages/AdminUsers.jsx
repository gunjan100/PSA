import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import Adminlayout from "../component/layouts/Admin-layout";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { token } = useAuth();


const deleteUser= async(id)=>{
  try {
    let response = await fetch("http://localhost:5000/api/admin/delete/"+id,{
      method:"DELETE",
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    let data = await response.json()
    if(data.success){
      toast.success("User Delted Successfully")
      getAllUserData(); // Fetch updated user data
    } else {
      toast.error(data.msg || "Failed to delete user");
    }
    
  } catch (error) {
    console.log("Error deleting user:", error);
    toast.error("An error occurred while deleting user.");
  }

}




const getAllUserData = async () => {
  try {
    let response = await fetch("http://localhost:5000/api/admin/users", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    console.log("data", data);
    if (!data.success) {
      toast.error("Data not found");
    } else if (data.users) {
      setUsers(data.users);
    }
  } catch (error) {
    console.log(error);
    toast.error("An error occurred while fetching data");
  }
};



  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
    <div><Adminlayout/></div>
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col">  <h4 className="custome py-4 ">Admin User Data</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Eamil</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((crrUser, index) => {
              return (
                <tr key={crrUser._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{crrUser.uname}</td>
                  <td>{crrUser.uemail}</td>
                  <td>
                    
                    <NavLink className="btn btn-primary btn-sm"  to={`/user/${crrUser._id}/edit`}>Edit</NavLink>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteUser(crrUser._id)}>Delete</button>
                  </td>  
                </tr>
              );
            })}
          </tbody>
        </table></div>
      </div>
    </div>

    </>
  );
};

export default AdminUsers;
