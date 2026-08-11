import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <h1>Villa</h1>
                </Link>
                <ul className="nav">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/properties">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <NavLink to="/details">
                      Property Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact us">
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">
                      products
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/cart">
<i class="fa-solid fa-cart-shopping"></i>   cart  
               </Link>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar