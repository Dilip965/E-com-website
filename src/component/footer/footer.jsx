import React from "react";

import logo from '../../assets/images/logo.jpg'
import { Link } from "react-router-dom";
import Unique from '../../component/Unique/index'

const Footer = () => {
  return (
<>
     <Unique/>
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
           <img src={logo} alt="ok" />
            <p>Awesome grocery store website template</p>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt text-success"></i>{" "}
                <strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127,
                USA
              </li>
              <li>
                <i className="fas fa-phone text-success"></i>{" "}
                <strong>Call Us:</strong> (+91) 540-025-124553
              </li>
              <li>
                <i className="fas fa-envelope text-success"></i>{" "}
                <strong>Email:</strong> sale@Nest.com
              </li>
              <li>
                <i className="fas fa-clock text-success"></i>{" "}
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </li>
            </ul>
          </div>

          {/* Right Sections */}
          {["Company", "Company", "Corporate", "Popular"].map((title, index) => (
            <div className="col-md-2" key={index}>
              <h5 className="fw-bold">{title}</h5>
              <ul className="list-unstyled">
                <li> <Link to='/about'>About Us</Link> </li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 text-center">
          <div className="col">
            <p>© 2024, Ecommerce Template All rights reserved</p>
          </div>
        </div>

      
      
         
        
      </div>
    </footer>
    </>
  );
};

export default Footer;
