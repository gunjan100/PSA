import React from 'react'
import {Link} from 'react-router-dom'

const AdminFooter = () => {
  return (
    <><div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Home</Link></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  </div></>
  )
}

export default AdminFooter