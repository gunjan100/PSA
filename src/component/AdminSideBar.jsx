import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>     <nav className="nav flex-column">
    <NavLink className="nav-link active text-black" aria-current="page" to={'/user'}>Users</NavLink>
    <NavLink className="nav-link text-black" to={'/admincontact'}>Contact</NavLink>
    <NavLink className="nav-link text-black" to={'/client'}>Client</NavLink>
    <NavLink className="nav-link text-black" to={'/addclient'}>Add Client</NavLink>
    <NavLink className="nav-link text-black" to={'/expclient'}>Expired Client</NavLink>
    <NavLink className="nav-link text-black" to={'/'}>Home</NavLink>
  </nav></>
  )
}

export default AdminSideBar