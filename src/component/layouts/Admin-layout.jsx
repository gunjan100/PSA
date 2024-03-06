import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import AdminHeader from "../AdminHeader";
import AdminFooter from "../AdminFooter";
import AdminSideBar from "../AdminSideBar";

const Adminlayout = () => {
  const { user, isLoading } = useAuth();
  console.log(user.isAdmin);
  if (isLoading) {
    return <h4>Loading ...</h4>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AdminHeader />

      <AdminSideBar />

      <Outlet />
      <AdminFooter />
    </>
  );
};

export default Adminlayout;
