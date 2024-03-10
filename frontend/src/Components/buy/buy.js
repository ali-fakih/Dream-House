import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './buy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars, faShare, faHome, faBuilding, faMoneyBill, faLocationCrosshairs, faLayerGroup, faHospital, faStairs, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

const Buy = () => {
    const [homeProperties, setHomeProperties] = useState([]);

    const [showForm, setShowForm] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        propertyType: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        bathrooms: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Filters:', filters);
        // You can add your logic here to submit the filters to backend or perform any action
    };

    // for showing the filters form
    const handleFilterIconClick = () => {
        setShowForm(!showForm);
    };

    const handleFilterShowing = (event) => {
        event.preventDefault();
        // Your form submission logic here
    };

    useEffect(() => {
        const fetchHomeProperties = async () => {
            try {
                const response = await axios.get('http://localhost:3000/homeProperty/GethomeProperties');
                setHomeProperties(response.data);
            } catch (error) {
                console.error('Error fetching home properties:', error);
            }
        };

        fetchHomeProperties();
    }, []);

    return (
        <div className="buy">

            {/* introduction and image */}
            <div className="relative ml-8">
                <div className="container px-3 mx-auto flex flex-col md:flex-row items-start md:items-center overflow-hidden">
                    {/* <!--Left Col--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10 md:mb-0 ml-0 md:ml-20">
                        <img className="w-full h-auto md:h-full md:w-4/5 z-50" src={require("../../Assets/images/slide-1.jpg")} alt="Activities for people with disabilities" />
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start mr-8 text-center md:text-left">
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Houses for sale near me
                        </h1>
                        <p className="leading-normal text-xl md:text-2xl mb-8 text-black">
                            Find houses for sale near you. View photos, open house information, and property details for nearby real estate.
                        </p>
                    </div>
                </div>
            </div>

            {/* location input and search button */}
            <div className='buy-filter flex flex-row gap-4'>
                <div className='buying-filters flex flex-row items-center'>
                    {/* input and label Location */}
                    <div className='input-location ml-20'>
                        <label htmlFor="inputname" className="block text-gray-800 font-semibold text-lg">Location</label>
                        <div className="mt-2 flex items-center">
                            <input
                                type="text"
                                name="inputname"
                                className="block w-80 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                placeholder="City, Address, School, Agent"
                            />
                            {/* filter icons class */}
                            <div className="relative">
                                <div className='filter-icon text-darkGreen font-bold h-10 w-10 text-center ml-2' onClick={handleFilterIconClick}>
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                                {showForm && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-darkGreen rounded-lg p-4" style={{ width: '500px' }}>
                                        <form onSubmit={handleFilterShowing} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="location" className="block text-gray-700 font-semibold">Location</label>
                                                    <input
                                                        type="text"
                                                        id="location"
                                                        name="location"
                                                        value={filters.location}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="City, Address, School, Agent"
                                                    />
                                                </div>
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="propertyType" className="block text-gray-700 font-semibold">Property Type</label>
                                                    <select
                                                        id="propertyType"
                                                        name="propertyType"
                                                        value={filters.propertyType}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                    >
                                                        <option value="">Any</option>
                                                        <option value="house">House</option>
                                                        <option value="apartment">Apartment</option>
                                                        <option value="condo">Condo</option>
                                                    </select>
                                                </div>
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="minPrice" className="block text-gray-700 font-semibold">Min Price</label>
                                                    <input
                                                        type="number"
                                                        id="minPrice"
                                                        name="minPrice"
                                                        value={filters.minPrice}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="Min Price"
                                                    />
                                                </div>
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="maxPrice" className="block text-gray-700 font-semibold">Max Price</label>
                                                    <input
                                                        type="number"
                                                        id="maxPrice"
                                                        name="maxPrice"
                                                        value={filters.maxPrice}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="Max Price"
                                                    />
                                                </div>
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="bedrooms" className="block text-gray-700 font-semibold">Bedrooms</label>
                                                    <input
                                                        type="number"
                                                        id="bedrooms"
                                                        name="bedrooms"
                                                        value={filters.bedrooms}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="Bedrooms"
                                                    />
                                                </div>
                                                <div className="border border-gray-300 rounded-lg p-2">
                                                    <label htmlFor="bathrooms" className="block text-gray-700 font-semibold">Bathrooms</label>
                                                    <input
                                                        type="number"
                                                        id="bathrooms"
                                                        name="bathrooms"
                                                        value={filters.bathrooms}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="Bathrooms"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className=" flex bg-darkGreen text-white  border border-darkGreen rounded-lg p-4 m-auto text-center">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-40 flex items-center justify-center cursor-pointer">
                    <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white font-bold dark:hover:text-green-500 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-green-400">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-green-400">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">Search</span>
                    </div>
                </div>
            </div>

            <div className="BuyingCards-container">
                <div className="BUY-cards">
                    {homeProperties.map(property => (
                        <section key={property._id} className="card-properties">
                            <figure>
                                <div className="img-overlay hot-home">

                                    {property.image && property.image[0] && (
                                        <img
                                            src={`http://localhost:3000/${property.image[0].replace(
                                                /\\/g,
                                                "/"
                                            )}`}
                                            alt={property.image[0]}
                                        />
                                    )}

                                    <div className="overlay">
                                        <Link to="/properties">
                                            view property
                                        </Link>
                                    </div>
                                    <div className="cont">
                                        <div className="icons-img">
                                            <button><i><FontAwesomeIcon icon={faHeart} /></i></button>
                                            <button><i><FontAwesomeIcon icon={faShare} /></i></button>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>{property.title}</figcaption>
                            </figure>
                            <div className="card-content">
                                <p>{property.description}</p>
                                <section className="icons-home">
                                    <div className="name-icon">
                                        <span>rooms</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faHospital} /></i>
                                            <span>{property.rooms}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>floor</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faStairs} /></i>
                                            <span>{property.floor}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>area</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faVectorSquare} /></i>
                                            <span>{property.areaSize}</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="icons-home">
                                    <div className="name-icon">
                                        <span>style</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faHome} /></i>
                                            <span>{property.style}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>type</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faBuilding} /></i>
                                            <span>{property.type}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>build year</span>
                                        <div className="icon">
                                            <i><FontAwesomeIcon icon={faLayerGroup} /></i>
                                            <span>{property.buildYear}</span>
                                        </div>
                                    </div>
                                </section>
                                <div className='flex flex-row gap-20'>
                                    <section className="price">
                                        <span>for sale</span><br></br>
                                        <span>
                                            <i><FontAwesomeIcon icon={faMoneyBill} /></i>
                                            ${property.price}
                                        </span>
                                    </section>
                                    <section className="location">
                                        <span>Location</span><br></br>
                                        <span>
                                            <i><FontAwesomeIcon icon={faLocationCrosshairs} /></i>
                                            {property.location}
                                        </span>
                                    </section>
                                </div>
                            </div>
                        </section>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Buy;
