import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
// import { Parallax } from 'react-parallax';
import './sell.css';

const Sell = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    
    const accordionData = [
        {
            title: 'How do I search for properties?',
            content: 'Simply enter your preferences in the search bar and let our magic algorithms do the rest!',
        },
        {
            title: 'Can I schedule a property viewing?',
            content: 'Of course! Contact us to schedule a viewing at your convenience.',
        },
        {
            title: 'Are there financing options available?',
            content: 'Yes, we offer flexible financing options tailored to suit your needs.',
        },
        {
            title: 'Do you assist with legal procedures?',
            content: 'Absolutely! Our team will guide you through all legal procedures smoothly.',
        },
        {
            title: 'What if I need to sell my property?',
            content: "We've got you covered! Our experts will help you sell your property hassle-free.",
        },
    ];


    return (
        <div className="sell-page">

            {/* first section */}
            <section className="gallery07 cid-u82pOP9riV" id="gallery-16-u82pOP9riV">
                <div className="container-fluid gallery-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Property Showcase</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <Carousel interval={1000} /* set interval in milliseconds */>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../../Assets/images/photo-1583608205776-bfd35f0d9f83.jpeg")}
                                    alt="First slide"
                                    style={{ height: '650px' }} // Adjust the height as per your requirement
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../../Assets/images/photo-1575517111478-7f6afd0973db.jpeg")}
                                    alt="Second slide"
                                    style={{ height: '650px' }} // Adjust the height as per your requirement
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../../Assets/images/photo-1571939228382-b2f2b585ce15.jpeg")}
                                    alt="Third slide"
                                    style={{ height: '650px' }} // Adjust the height as per your requirement
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../../Assets/images/photo-1625602812206-5ec545ca1231.jpeg")}
                                    alt="Fourth slide"
                                    style={{ height: '650px' }} // Adjust the height as per your requirement
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* third section */}
            <section className="features38 cid-u82pOP9PVG" id="features-65-u82pOP9PVG">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Dream Homes</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Explore luxurious dream homes that will make your jaw drop.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1599427303058-f04cbcf4756f.jpeg")}
                                alt="Dream Homes"
                            />
                        </div>
                    </div>
                    <div className="row row-reverse justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Prime Locations</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Discover properties in the most sought-after locations with
                                    breathtaking views.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1490197415175-074fd86b1fcc.jpeg")}
                                alt="Prime Locations"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Investment Opportunities</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Unlock lucrative investment opportunities in real estate for a
                                    prosperous future.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1480074568708-e7b720bb3f09.jpeg")}
                                alt="Investment Opportunities"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th section */}
            <section className="people04 cid-u82pOP9iTf" id="testimonials-4-u82pOP9iTf">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-12 mb-0 content-head">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Raving</strong>
                            </h3>
                        </div>
                    </div>
                    <div className="row mbr-masonry" data-masonry='{"percentPosition": true }'>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        I found my perfect home in just a few clicks! The process was
                                        seamless and stress-free.
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1592669546196-bb70d4f16dd7.jpeg")}
                                            alt="Samantha Johnson"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Samantha Johnson</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        The team helped me secure a great deal on my property. Highly
                                        recommended!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1596421250711-9ec0ef9cbba3.jpeg")}
                                            alt="Michael Smith"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Michael Smith</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Professional service and expert advice. I couldn't be
                                        happier with my new home!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1546919057-eae69a7a3c35.jpeg")}
                                            alt="Emily Davis"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Emily Davis</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5th section */}
            <section className="article9 cid-u82pOPac7j" id="about-us-9-u82pOPac7j">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-content-text">
                                    <h3 className="card-title mbr-fonts-style mbr-white mt-3 mb-4 display-2">
                                        <strong>About Us</strong>
                                    </h3>
                                    <div className="row card-box align-left">
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    We are a passionate team dedicated to helping you find
                                                    your perfect property. Our mission is to make your real
                                                    estate journey exciting and rewarding.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    With years of experience and a knack for spotting hidden
                                                    gems, we strive to exceed your expectations.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    Meet our dynamic team of experts who are here to guide
                                                    you every step of the way.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-wrapper d-flex justify-content-center mt-3">
                                    <img src={require("../../Assets/images/photo-1568605114967-8130f3a36994.jpeg")} alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 6th section */}
            <section className="py-12 w-full mx-auto text-white bg-transparent">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h3 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold text-darkGreen rounded-full px-4 py-2 inline-block">FAQ</h3>
                        <div id="bootstrap-accordion_0" className="accordion border-none w-full max-w-4xl" role="tablist" aria-multiselectable="true">
                            {accordionData.map((item, index) => (
                                <div className="rounded-full mb-3 w-full" key={index}>
                                    <div className="rounded-full shadow-lg w-full" role="tab" id={`headingOne_${index}`}>
                                        <Link
                                            role="button"
                                            className={`flex justify-center items-center rounded-full w-full py-4 px-6 bg-white text-black duration-300 ${activeIndex === index ? '' : 'collapsed'}`}
                                            onClick={() => toggleAccordion(index)}
                                            style={{ textDecoration: 'none', fontWeight: activeIndex === index ? 'bold' : 'normal' }}
                                        >
                                            <h6 className="mb-0 text-2xl md:text-3xl text-center w-full hover:text-black">{item.title}</h6>
                                        </Link>
                                    </div>
                                    <div
                                        id={`collapse_${index}`}
                                        className={`rounded-full overflow-hidden w-full transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                        role="tabpanel"
                                        aria-labelledby={`headingOne_${index}`}
                                    >
                                        <div className="p-6 bg-white rounded-b-lg text-gray-800">
                                            <p className="rounded-full text-lg md:text-xl text-center w-full mb-1 text-darkGreen">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7th section */}
            <section className="header18 cid-u6kSenyDw2 mbr-fullscreen" id="video-5-u6kSenyDw2">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.youtube.com/embed/u9vK5utTcxE?autoplay&#x3D;1&amp;loop&#x3D;1&amp;playlist&#x3D;u9vK5utTcxE&amp;t&#x3D;20&amp;mute&#x3D;1&amp;playsinline&#x3D;1&amp;controls&#x3D;0&amp;showinfo&#x3D;0&amp;autohide&#x3D;1&amp;allowfullscreen&#x3D;true&amp;mode&#x3D;transparent"
                                allowFullScreen
                                style={{ width: '100%', height: '100vh' }}
                                title="header-video">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8th section */}
            <section className="blog-2 cid-u82pOPa54D" id="blog-2-u82pOPa54D">
                <div className="container-fluid">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Hot Real Estate Gossip</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item features-image col-12 col-md-6 col-lg-3 active">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={require("../../Assets/images/photo-1582063289852-62e3ba2747f8.jpeg")} alt="Luxury" />
                                </div>
                                <div className="item-content align-left">
                                    <h5 className="item-title mbr-fonts-style mt-0 mb-3 display-7">Luxury</h5>
                                    <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                                        <strong>Urban Oasis: Where Luxury Awaits</strong>
                                    </h6>
                                    <div className="mbr-section-btn item-footer">
                                        <Link to="/buy" className="btn item-btn btn-primary display-7">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={require("../../Assets/images/photo-1598228723793-52759bba239c.jpeg")} alt="Land Galore" />
                                </div>
                                <div className="item-content align-left">
                                    <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">Opulence</h5>
                                    <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                                        <strong>Land Galore: Where Dreams Begin</strong>
                                    </h6>
                                    <div className="mbr-section-btn item-footer">
                                        <Link to="/buy" className="btn item-btn btn-primary display-7">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={require("../../Assets/images/photo-1430285561322-7808604715df.jpeg")} alt="Tiny Homes" />
                                </div>
                                <div className="item-content align-left">
                                    <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">Elegance</h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>Coastal Haven: Where Serenity Beckons</strong>
                                    </h6>
                                    <div className="mbr-section-btn item-footer">
                                        <Link to="/buy" className="btn item-btn btn-primary display-7">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3">
                            <div className="item-wrapper">
                                <div className="item-img mb-3">
                                    <img src={require("../../Assets/images/photo-1574620845949-61a08a005988.jpeg")} alt="Secret Islands" />
                                </div>
                                <div className="item-content align-left">
                                    <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">Splendor</h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                                        <strong>Secret Islands: Your Private Paradise</strong>
                                    </h6>
                                    <div className="mbr-section-btn item-footer">
                                        <Link to="/buy" className="btn item-btn btn-primary display-7">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9th section */}
            <section className="features10 cid-u82pOPbkTW" id="metrics-2-u82pOPbkTW">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <h5 className="card-title mbr-fonts-style display-1">
                                        <strong>1000+</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Happy Homeowners
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <h5 className="card-title mbr-fonts-style display-1">
                                        <strong>500+</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Acres of Possibilities
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <h5 className="card-title mbr-fonts-style display-1">
                                        <strong>99%</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Satisfaction Guaranteed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10th section */}
            <section className="article13 cid-u82pOPbMYF" id="call-to-action-3-u82pOPbMYF">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-box align-left">
                                    <h4 className="card-title mbr-fonts-style display-2">
                                        <strong>Ready to Dive into Real Estate?</strong>
                                    </h4>
                                    <h6 className="card-title text-dark mbr-fonts-style display-2">
                                        Chat with our agents
                                    </h6>
                                    <div className="mbr-section-btn mt-4">
                                        <Link className="btn btn-primary display-4" to="/auth">
                                            Start Now
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Sell;
