import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './header.css';

const Header = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const headerRef = React.createRef();
    const [showMenu, setShowMenu] = useState(false); // State for menu visibility

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        const refreshToken = Cookies.get('refresh_token');
        setIsLoggedIn(!!accessToken && !!refreshToken);
    }, []);

    const handleLogin = () => {
        Cookies.set('access_token', 'your_access_token', { path: '/' });
        Cookies.set('refresh_token', 'your_refresh_token', { path: '/' });
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        Cookies.remove('access_token', { path: '/' });
        Cookies.remove('refresh_token', { path: '/' });
        setIsLoggedIn(false);
    };

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
        <nav
            id="header"
            className="fixed z-30 top-0 mt-3 text-black bg-white rounded-full w-full"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
            ref={headerRef}
        >
            <div className="container mx-auto flex flex-row items-center justify-between py-3">
                <div className="pl-4 flex items-center">
                    <Link
                        to="/"
                        className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    >
                        <img src={require("../../Assets/images/imgbin-green-home-house-removebg-preview.png")} alt="#" className='rounded-full' style={{ height: '4.3rem' }} />
                    </Link>
                    <span className="text-2xl ml-2 font-bold">DreamHouse</span>
                </div>

                {/* Menu for larger screens */}
                <ul className="lg:flex justify-end items-center flex-grow lg:mr-4">
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/"
                            className="inline-block py-2 px-3 text-2xl text-black hover:text-yellow-500  no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/buy"
                            className="inline-block py-2 px-3  text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Buy
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/sell"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Sell
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/agent"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Agent
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/about"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            About
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/contact"
                            className="inline-block py-2 px-4 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Menu toggle button for smaller screens */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {showMenu ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="">
                    {/* Adjusted class and added ml-4 for margin */}
                    {isLoggedIn ? (
                        <Link to="/login">
                            <button
                                className=" bg-[#d63d32] border-2 border-white  no-underline text-black font-bold rounded-full  lg:mt-0 py-4 px-8 transform transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:font-bold"
                                onClick={handleLogout}
                            >
                                LogOut
                            </button>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button
                                className=" bg-darkGreen border-2 border-white  no-underline text-black font-bold rounded-full lg:mt-0 py-4 px-8 transform transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:font-bold"
                                onClick={handleLogin}
                            >
                                LogIn
                            </button>
                        </Link>
                    )}
                </div>
            </div>


            {/* Mobile menu */}
            <div className={`lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/"
                            className="inline-block py-2 px-3 text-2xl text-black hover:text-yellow-500  no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/buy"
                            className="inline-block py-2 px-3  text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Buy
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/sell"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Sell
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/agent"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Agent
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/about"
                            className="inline-block py-2 px-3 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            About
                        </Link>
                    </li>
                    <li className="my-3 lg:my-0">
                        <Link
                            to="/contact"
                            className="inline-block py-2 px-4 text-black text-2xl no-underline hover:text-2xl hover:bg-gray-100 rounded-full hover:p-2"
                        >
                            Contact
                        </Link>
                    </li>
                </div>
            </div>

        </nav>
    );
};

export default Header;
