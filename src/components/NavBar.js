import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./NavBar.css";
import {NavHashLink as Link} from 'react-router-hash-link'
import weblogo from "../images/weblogo.png"

function NavBar() {
  // const history = useHistory();
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user);
  function logout() {
    localStorage.clear();
    //window.localStorage.removeItem('token');
    window.location.href = "/";
    // history.push('/register')
  }
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
      <nav className="navbar">
        <div className="nav-container">
        {
          localStorage.getItem('token')?
          <>
              <div className="adminnav">
                <Link to="/admin/addservice">AddService</Link>
                <Link to="/admin/addtech">AddTechnology</Link>
                <Link to="/admin/addprice">AddPrice</Link>
                <Link to="/admin/servicelist">ServiceList</Link>
                <Link to="/admin/updateservicelist">UpdateService</Link>
                <button className="btn btn-warning" onClick={logout}>Logout</button>
                
              </div>
              {/* <p>{user && user.token}</p> token print */}
             
          </>
          :
          <>
              <Link exact to="/" className="nav-logo">
                WebCore
            {/* <i className="fas fa-code"></i> */}
               
                  <img
                  style={{ width: '60px', opacity: '20.5' }}
                    alt=''
                    src={weblogo}
                  />
               
              </Link>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    exact
                    to="/#"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home
              </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/#about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    About
              </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/#pricing"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Pricing
              </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/#Service"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Service
              </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact
                    to="/#contact"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Contact Us
              </Link>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>

          </>
        }

         
        </div>
      </nav>
  );
}

export default NavBar;
