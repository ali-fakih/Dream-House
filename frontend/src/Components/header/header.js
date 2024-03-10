import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-container">
            {/* Nav Start */}
            <nav className="bg-white shadow-lg navbar-default">
                <div className="container mx-auto px-4 p-6">
                    <div className="flex items-center justify-between py-4">
                        <div className='flex items-center flex-1'>
                            <img className='w-16 h-16 md:w-20 md:h-20' src={require("../../Assets/images/logo.jpeg")} alt="s" />
                            <Link to="/" className="text-2xl md:text-4xl font-semibold text-black mt-4 ml-2">Dream<span className="text-darkGreen">Home</span></Link>
                        </div>

                        <div className="block md:hidden"> {/* Added for responsive menu */}
                            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-black hover:border-black">
                                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                </svg>
                            </button>
                        </div>

                        <ul className={`md:flex md:flex-1 md:justify-end ${menuOpen ? 'block' : 'hidden'} space-x-4`}>
                            <li><Link to="/" className="text-black font-bold text-xl md:text-2xl ml-4 mr-4">Home</Link></li>
                            <li><Link to="/buy" className="text-black font-bold text-xl md:text-2xl mr-4">Buy</Link></li>
                            <li><Link to="/sell" className="text-black font-bold text-xl md:text-2xl mr-4">Sell</Link></li>
                            <li><Link to="/agent" className="text-black font-bold text-xl md:text-2xl mr-4">Agent</Link></li>
                            <li className="relative">
                                <Link to="/about" className="text-black font-bold text-xl md:text-2xl mr-4">About</Link>
                            </li>
                            <li><Link to="/contact" className="text-black font-bold text-xl md:text-2xl">Contact</Link></li>
                        </ul>

                        <div className="search-icon mr-2 ml-4">
                            <Link to="/signin">
                                <button>
                                    <span className="transition"></span>
                                    <span className="gradient"></span>
                                    <span className="label">Join/ LogIn</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
