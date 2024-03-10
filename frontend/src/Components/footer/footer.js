// Footer.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';


const Footer = () => {
    const location = useLocation();
    const hideFooter = ['/signin', '/signup', '/reset-password', '/emailVerify', 'AdminDash'].includes(location.pathname);

    if (hideFooter) {
        return null; // Hide footer if on sign-in, sign-up, reset password, or email verification page
    }

    return (


        <div className="pg-footer">
            <footer className="footer">
                <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>
                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <Link to="/" className="footer-logo-link">
                                <span className="hidden-link-text">
                                <img className='w-20 h-20' src={require("../../Assets/images/logo.jpeg")} alt="s" />
                                    </span>
                                <h1 className='font-bold text-2xl text-black'>Dream<span className="text-white">Home</span></h1>
                            </Link>
                        </div>

                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Company</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <Link to="/buy">Buy</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/sell">Sell</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/agent">Agent</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Legal</h2>
                            <ul id="menu-quick-links" className="footer-menu-list">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link to="/" target="_blank" rel="noopener noreferrer" >Privacy Notice</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link to="/" target="_blank" rel="noopener noreferrer" >Terms of Use</Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                            <p className="footer-call-to-action-description"> Have a support question?</p>
                            <Link to="/" className="footer-call-to-action-button button" target="_self"> Get in Touch </Link>
                        </div>
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> You Call Us</h2>
                            <p className="footer-call-to-action-link-wrapper"> <Link to="tel:0096181755763" className="footer-call-to-action-link" target="_self"> 0096181755763 </Link></p>
                        </div>
                        
                    </div>
                </div>
                
            </footer>
        </div>

    );
};

export default Footer;
