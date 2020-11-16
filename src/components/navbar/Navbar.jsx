import React from 'react'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-header">
          <h2>Trello Clone</h2>
        </div>

        <div className="navbar__container-link-all">

          <ul className="navbar__container-links">
            <div className="navbar__container-link-col">
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">Dashboard</h3>
              </li>
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">Collab</h3>
              </li>
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">Timesheets</h3>
              </li>
            </div>

            <div className="navbar__container-link-col">
              <h4 className="navbar__container-link-heading">Projects</h4>
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">Support</h3>
              </li>
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">Launch</h3>
              </li>
              <li className="navbar__container-link">
                <h3 className="navbar__container-link-content">MMMS</h3>
              </li>
            </div>

            <div className="navbar__container-link-col">
              <h4 className="navbar__container-link-heading">Teams</h4> 
            </div>

            <div className="navbar__container-link-col">
              <h4 className="navbar__container-link-heading">Clients</h4>
            </div>

            <div className="navbar__container-link-col">
              <h4 className="navbar__container-link-heading">Invoice</h4>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar