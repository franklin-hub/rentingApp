import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contacts</Link>
        </li>
        <li>
          <Link to="/Listings">Listings</Link>
        </li>
        <li>
          <Link to="/ListingDetail">ListingDetail</Link>
        </li>
        <li>
          <Link to="/LogIn">LogIn</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/NotFound">NotFound</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
</div>
);
export default Navbar