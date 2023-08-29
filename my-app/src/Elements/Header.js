// Elements/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/my-logo.png';


const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex">
          <div className="box">
            {/* Placeholder for first box */}
          </div>
          
          <div className="box d-flex justify-content-center align-items-center">
            <Link className="navbar-brand" to="/ai-match">
              <img src={logo} alt="My App Logo" className="logo" />
            </Link>
          </div>
  
          <div className="box d-flex align-items-center">
            <div className="d-flex justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/ai-match">AI Match</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/community">Community</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">AI News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>

        <li className="nav-item login-button">
  <Link className="nav-link btn btn-purple" to="/login">Login</Link>
</li>

      </nav>
      
    );
  };
  

  

export default Header;
