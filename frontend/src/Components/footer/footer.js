import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faFile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  const location = useLocation();

  const shouldHideHeader =
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/signup') ||
    location.pathname.startsWith('/reset-password') ||
    location.pathname.startsWith('/auth') ||
    location.pathname.startsWith('/dashboardAgent') ||
    location.pathname.startsWith('/login');
  if (shouldHideHeader) {
    return null;
  }

  return (
    <footer className="Foot text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-3">
            <img className='w-50 h-50 mb-3' src={require("../../Assets/images/imgbin-green-home-house-removebg-preview.png")} alt="s" />
            <h2 className="text-2xl font-bold mb-3">Dream House</h2>
            <p className="text-black">
              Dream House is a leading real estate company dedicated to helping you find your dream home.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-3">
            <h3 className="text-2xl font-bold mb-3 italic">Legal</h3>
            <ul className="list-unstyled text-gray-400">
              <li className="mb-2 d-flex align-items-center text-white">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-2 text-black" />
                Privacy Notice
              </li>
              <li className="mb-2 d-flex align-items-center text-white">
                <FontAwesomeIcon icon={faFile} className="mr-2 text-black" />
                Terms of Use
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h3 className="text-2xl font-bold mb-3 italic">Quick Links</h3>
            <ul className="list-unstyled text-gray-400">
              <li className="mb-2">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/buy" className="text-white">
                  Buy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sell" className="text-white">
                  Sell
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/agent" className="text-white">
                  Agent
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3">
            <h3 className="text-2xl font-bold mb-3 italic">Follow Us</h3>
            <div className="d-flex">
              <Link to="/" className="text-gray-400 hover-text-white mr-3" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link to="/" className="text-gray-400 hover-text-white mr-3" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link to="/" className="text-gray-400 hover-text-white mr-3" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link to="/" className="text-gray-400 hover-text-white" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white mt-5">
          <p>&copy; {new Date().getFullYear()} Dream House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
