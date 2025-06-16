import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../config/api';
import '../../App.css';
import { Link } from 'react-router-dom';
import './buy.css';

const Buy = () => {
    //  for home properties
    const [homeProperties, setHomeProperties] = useState([]);
    const [showAll, setShowAll] = useState(false);
    // for Real Estates properties
    const [realEstates, setRealEstates] = useState([]);
    const [showMore, setShowMore] = useState(false);

    //  for home properties
    useEffect(() => {
        const fetchHomeProperties = async () => {
            try {
                const response = await axios.get(`${API_URL}/homeProperty/GethomeProperties`);
                setHomeProperties(response.data);
            } catch (error) {
                console.error('Error fetching home properties:', error);
            }
        };

        fetchHomeProperties();
    }, []);
    //  for home properties
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    //  for home properties
    const displayDescription = (description) => {
        // Limiting description to five to six words
        return description.split(' ').slice(0, 6).join(' ') + '...';
    };

    // for real estate property
    useEffect(() => {
        const fetchRealEstates = async () => {
            try {
                const response = await axios.get(`${API_URL}/realestate/getallrealstates`);
                setRealEstates(response.data);
            } catch (error) {
                console.error('Error fetching real estates:', error);
            }
        };

        fetchRealEstates();
    }, []);

    //  for real estate property
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };




    return (
        <div className="buy">

            {/* background image */}
            <section className="header16 cid-u82pOOXhoP mbr-fullscreen mbr-parallax-background">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-10">
                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                                <strong>Dream Homes</strong>
                            </h1>
                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                                Find your perfect sanctuary among our stunning collection of houses and land.
                            </p>
                            <div className="mbr-section-btn">
                                <Link to="/" className="btn btn-white-outline display-7">Search Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Home Property section */}
            <section className="pricing02 cid-u82pOOY8Tm" id="product-list-8-u82pOOY8Tm">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Home Properties</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {homeProperties.slice(0, showAll ? homeProperties.length : 4).map(property => (
                            <div className="item features-image col-12 col-md-6 col-lg-3" key={property.id}>
                                <div className="item-wrapper">
                                    <div className="item-img">
                                        {property.image && property.image[0] && (
                                            <img
                                                src={`${API_URL}/${property.image[0].replace(/\\/g, `/")}`}
                                                alt={property.image[0]}
                                            />
                                        )}
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-5">
                                            <strong>{property.title}</strong>
                                        </h5>
                                        <h6 className="item-subtitle mbr-fonts-style display-7">
                                            ${property.price}
                                        </h6>
                                        <p className="mbr-text mbr-fonts-style display-7">
                                            {displayDescription(property.description)}
                                        </p>
                                        <div className="mbr-section-btn item-footer">
                                            <Link to={`/properties/${property._id}`} className="btn item-btn btn-primary display-7">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {homeProperties.length > 4 && (
                        <div className="see-btn row justify-content-center mt-4">
                            <div className="col-6"> {/* Change col-6 to adjust width */}
                                <button className="btn btn-primary w-100" onClick={toggleShowAll}>
                                    {showAll ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </section>

            {/* Real Estate Property section */}
            <section className="features03 cid-u6kSenxwTx" id="events-1-u6kSenxwTx">
                <div className="container-fluid">

                    <div className="row justify-content-center mb-5">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Lands Properties</strong>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {realEstates.slice(0, showMore ? realEstates.length : 4).map(realproperty => (

                            <div className="item features-image col-12 col-md-6 col-lg-3 active" key={realproperty.id}>
                                <div className="item-wrapper">
                                    <div className="item-img mb-3">
                                        {realproperty.images && realproperty.images[0] && (
                                            <img
                                                src={`${API_URL}/${realproperty.images[0].replace(/\\/g, `/")}`}
                                                alt={realproperty.images[0]}
                                            />
                                        )}
                                    </div>
                                    <div className="item-content align-left">
                                        <h6 className="item-subtitle mbr-fonts-style mb-3 fw-bold display-5">
                                            <strong>
                                                {realproperty.name}
                                            </strong>
                                        </h6>
                                        <p className="mbr-text mbr-fonts-style mb-3 display-7">
                                            ${realproperty.amount}
                                        </p>
                                        <p className="mbr-text mbr-fonts-style mb-3 display-7">
                                            {displayDescription(realproperty.description)}
                                        </p>
                                        <div className="mbr-section-btn item-footer">
                                            <Link to={`/realestateproperty/${realproperty._id}`} className="btn item-btn btn-primary display-7">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {realEstates.length > 4 && (
                        <div className="see-btn row justify-content-center mt-4">
                            <div className="col-6"> {/* Change col-6 to adjust width */}
                                <button className="btn btn-primary w-100" onClick={toggleShowMore}>
                                    {showMore ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* third section */}
            <section className="features21 cid-u82pOOY2w3" id="features-4-u82pOOY2w3">
                <div className="container">
                    <div className="row mbr-masonry" data-masonry='{"percentPosition": true }'>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1605276374104-dee2a0ed3cd6.jpeg")} alt="Spacious" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Spacious</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Generous living areas designed for comfort and entertainment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1448630360428-65456885c650.jpeg")} alt="Scenic Views" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Scenic Views</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Panoramic vistas that will take your breath away every day.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1503174971373-b1f69850bded.jpeg")} alt="Modern Amenities" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Modern Amenities</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        State-of-the-art facilities to enhance your lifestyle to the fullest.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1494526585095-c41746248156.jpeg")} alt="Tranquil Surroundings" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Tranquil Surroundings</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Peaceful environments that soothe the soul and calm the mind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1582268611958-ebfd161ef9cf.jpeg")} alt="Prime Locations" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Prime Locations</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Strategically situated properties in sought-after neighborhoods for convenience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1572120360610-d971b9d7767c.jpeg")} alt="Luxurious Finishes" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Luxurious Finishes</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Exquisite details and high-end finishes that exude opulence and sophistication.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    );
};

export default Buy;