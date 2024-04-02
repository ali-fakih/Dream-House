import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import EmblaCarousel from 'embla-carousel';
import { Link, useNavigate } from 'react-router-dom';
import './about.css';

function About() {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    // for checkout function
    const [redirectToCheckout, setRedirectToCheckout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let embla;

        if (carouselRef.current) {
            embla = EmblaCarousel(carouselRef.current, {
                // EmblaCarousel options here
            });
        }

        const interval = setInterval(() => {
            if (embla) {
                embla.scrollNext(); // Scroll to the next slide
            }
        }, 1000); // Change slide every 2 seconds

        // Clean up
        return () => {
            clearInterval(interval);
            if (embla) {
                embla.destroy();
            }
        };
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: ' Why Choose Us?',
            content: 'We are not just another real estate agency. We are the game-changers, the trendsetters, the disruptors of the industry.',
        },
        {
            title: 'What Sets Us Apart?',
            content: 'Our passion for innovation and excellence sets us miles ahead of the competition. We redefine real estate standards.',
        },
        {
            title: 'How Do We Do It?',
            content: ' By combining cutting-edge technology with a human touch, we create unforgettable experiences for our clients.',
        },
        {
            title: 'Who Are We?',
            content: 'We are the Dream House  team of real estate enthusiasts, visionaries, and risk-takers who make the impossible possible.',
        },
        {
            title: 'Ready to Join Us?',
            content: "Take the leap into a world where ordinary is boring and extraordinary is the norm.",
        },
    ];

    const initiateCheckout = async (items) => {
        try {
            const response = await axios.post('http://localhost:3000/users/checkout', {
                items: items
            });
            // Set the URL received from the backend in the state
            setRedirectToCheckout(response.data.url);
        } catch (error) {
            console.error('Error initiating checkout:', error);
        }
    };

    useEffect(() => {
        // If redirectToCheckout is true, redirect to the Stripe Checkout page
        if (redirectToCheckout) {
            window.location.href = redirectToCheckout;
        }
    }, [redirectToCheckout]);

    const handleJoinNow = (items) => {
        initiateCheckout(items);
    };

    return (
        <section className="About-Page">

            {/* BackGround Image section startss */}
            <section className="header16 cid-u84Zaz9Qmi mbr-fullscreen mbr-parallax-background" id="hero-17-u84Zaz9Qmi">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-10">
                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                                <strong>Meet Us</strong>
                            </h1>
                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                                Where Dreams Meet Reality - Your Real Estate Journey Starts Here!
                            </p>
                            <div className="mbr-section-btn">
                                <Link className="btn btn-white-outline display-7" to="/signin">Join Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* first section */}
            <section className="pricing1 cid-u84Zaz9mQM" id="pricing-cards-1-u84Zaz9mQM">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Our Plans</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {/* Pricing Card 1 */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Starter</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>9.99</strong>/month
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Get a taste of luxury with our Starter plan, perfect for beginners in the real estate world.
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Starter", price: 9.99, quantity: 1 }])} className="btn btn-primary display-7">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 2 */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Pro</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>19.99</strong>/month
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Upgrade to Pro for exclusive access to premium listings and expert advice.
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Pro", price: 19.99, quantity: 1 }])} className="btn btn-primary display-7">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 3 */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Expert</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>29.99</strong>/month
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Become an Expert member and unlock the full potential of your real estate ventures.
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Expert", price: 29.99, quantity: 1 }])} className="btn btn-primary display-7">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 4 */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>VIP</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>49.99</strong>/month
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Join the VIP club for unparalleled luxury, personalized services, and VIP events access.
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "VIP", price: 49.99, quantity: 1 }])} className="btn btn-primary display-7">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* second section */}
            <section className="article9 cid-u84Zaz9TZ4" id="about-us-9-u84Zaz9TZ4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-content-text">
                                    <h3 className="card-title mbr-fonts-style mbr-white mt-3 mb-4 display-2">
                                        <strong>The Dream Team</strong>
                                    </h3>
                                    <div className="row card-box align-left">
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    Welcome to the realm of DreamHouse Estate, where we turn your
                                                    real estate dreams into reality with a touch of magic
                                                    and a dash of expertise.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    Our journey is fueled by passion, dedication, and a
                                                    sprinkle of fairy dust. We believe in creating dream
                                                    homes and unforgettable experiences for our clients.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item features-without-image col-12">
                                            <div className="item-wrapper">
                                                <p className="mbr-text mbr-fonts-style display-7">
                                                    Join us on this enchanting adventure, and let's
                                                    make your real estate dreams come true together!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-wrapper d-flex justify-content-center mt-3">
                                    <img src={require("../../Assets/images/photo-1612965607446-25e1332775ae.jpeg")} alt="Dream Team" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section three */}
            <section className="slider2 mbr-embla cid-u84Zazasvh" id="testimonials-1-u84Zazasvh">
                <div className="position-relative text-center">
                    <div className="embla" data-skip-snaps="true" data-align="center" data-auto-play="true" data-auto-play-interval="5" data-draggable="true">
                        <div className="embla__viewport container-fluid" ref={carouselRef}>
                            <div className="embla__container">
                                <div className="embla__slide slider-image item" style={{ marginLeft: '10rem', marginRight: '10rem' }}>
                                    <div className="user">
                                        <div className="user_image">
                                            <div className="item-wrapper position-relative">
                                                <img src={require("../../Assets/images/photo-1638868939857-11ac407b347a.jpeg")} alt="John Smith" />
                                            </div>
                                        </div>
                                        <div className="user_text mb-4">
                                            <p className="mbr-fonts-style display-5">
                                                <strong>
                                                    DreamEstate made buying my dream home a breeze! Professional, friendly, and truly magical.
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="user_name mbr-fonts-style display-7">John Smith</div>
                                        <div className="user_desk mbr-fonts-style display-7">Homeowner</div>
                                    </div>
                                </div>
                                <div className="embla__slide slider-image item" style={{ marginLeft: '10rem', marginRight: '10rem' }}>
                                    <div className="user">
                                        <div className="user_image">
                                            <div className="item-wrapper position-relative">
                                                <img src={require("../../Assets/images/photo-1595436065982-84fa400d8d8e.jpeg")} alt="Emily Johnson" />
                                            </div>
                                        </div>
                                        <div className="user_text mb-4">
                                            <p className="mbr-fonts-style display-5">
                                                <strong>
                                                    I never knew selling a house could be this easy! DreamEstate exceeded all my expectations.
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="user_name mbr-fonts-style display-7">Emily Johnson</div>
                                        <div className="user_desk mbr-fonts-style display-7">Seller</div>
                                    </div>
                                </div>
                                <div className="embla__slide slider-image item" style={{ marginLeft: '10rem', marginRight: '10rem' }}>
                                    <div className="user">
                                        <div className="user_image">
                                            <div className="item-wrapper position-relative">
                                                <img src={require("../../Assets/images/photo-1509098681029-b45e9c845022.jpeg")} alt="Michael Brown" />
                                            </div>
                                        </div>
                                        <div className="user_text mb-4">
                                            <p className="mbr-fonts-style display-5">
                                                <strong>
                                                    DreamEstate's expertise is unmatched. They found me the perfect investment property in no time!
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="user_name mbr-fonts-style display-7">Michael Brown</div>
                                        <div className="user_desk mbr-fonts-style display-7">Investor</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="embla__button embla__button--prev">
                            <span className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                            <span className="sr-only visually-hidden">Previous</span>
                        </button>
                        <button className="embla__button embla__button--next">
                            <span className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                            <span className="sr-only visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* section four */}
            <section className="features38 cid-u84ZazbFi3" id="features-65-u84ZazbFi3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Luxury Living</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Experience the epitome of luxury in our exclusive real estate
                                    properties.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1556912173-3bb406ef7e77.jpeg")}
                                alt="Luxury Living"
                            />
                        </div>
                    </div>
                    {/* // Second section */}
                    <div className="row row-reverse justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Breathtaking Views</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Wake up to stunning panoramic views that will leave you in awe
                                    every day.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1560185127-6ed189bf02f4.jpeg")}
                                alt="Breathtaking Views"
                            />
                        </div>
                    </div>

                    {/* // Third section */}
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Modern Elegance</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
                                    Step into a world of modern elegance where every detail exudes
                                    sophistication.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img
                                className="w-100"
                                src={require("../../Assets/images/photo-1560184897-ae75f418493e.jpeg")}
                                alt="Modern Elegance"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* section five */}
            <section className="features19 cid-u84Zazb1v0" id="features-27-u84Zazb1v0">
                <div className="container">
                    <div className="row">
                        <div className="item features-without-image col-12 col-lg-4 item-mb active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1622015663319-e97e697503ee.jpeg")} alt="Community Connection" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Community Connection</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        We're not just real estate, we're a vibrant part of the community fabric.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1613490493576-7fde63acd811.jpeg")} alt="Local Impact" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Local Impact</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Our commitment to the local area goes beyond just selling properties.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1512917774080-9991f1c4c750.jpeg")} alt="Community Engagement" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Community Engagement</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Join us in making a difference and building a stronger community together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section six */}
            <section
                className="header18 cid-u84ZazcrEE mbr-fullscreen"
                id="video-5-u84ZazcrEE">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <iframe
                            title="Background Video"
                            src="https://www.youtube.com/embed/iL0pv2FpnqA?autoplay=1&loop=1&playlist=iL0pv2FpnqA&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
                            allowFullScreen
                            frameBorder="0"
                            style={{ width: '100%', height: '100vh' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* section 7 */}
            <section className="list1 cid-u6kSenxY0V" id="faq-1-u6kSenxY0V">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-10 m-auto">
                            <div className="content">
                                <div className="mbr-section-head align-left mb-5">
                                    <h3 className="mbr-section-title mb-2 mbr-fonts-style display-2">
                                        <strong>Curious Minds Ask</strong>
                                    </h3>
                                </div>
                                <div id="bootstrap-accordion_0" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                                    {accordionData.map((item, index) => (
                                        <div className="card mb-3" key={index}>
                                            <div className="card-header" role="tab" id={`headingOne_${index}`}>
                                                <Link
                                                    role="button"
                                                    className={`panel-title ${activeIndex === index ? '' : 'collapsed'}`}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">{item.title}</h6>
                                                    <span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
                                                </Link>
                                            </div>
                                            <div
                                                id={`collapse_${index}`}
                                                className={`panel-collapse noScroll collapse ${activeIndex === index ? 'show' : ''}`}
                                                role="tabpanel"
                                                aria-labelledby={`headingOne_${index}`}
                                            >
                                                <div className="panel-body">
                                                    <p className="mbr-fonts-style panel-text display-7">{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 8 */}
            <section className="features10 cid-u84Zazcmjz" id="metrics-2-u84Zazcmjz">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <h5 className="card-title mbr-fonts-style display-1">
                                        <strong>1000+</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style mb-3 display-7">
                                        Happy Clients
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
                                        Properties Sold
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
                                        Customer Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 9 */}
            <section className="article13 cid-u82pOPbMYF" id="call-to-action-3-u82pOPbMYF">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-box align-left">
                                    <h4 className="card-title mbr-fonts-style display-2">
                                        <strong>Ready to Elevate Your Real Estate?</strong>
                                    </h4>
                                    <div className="mbr-section-btn mt-4">
                                        <Link className="btn btn-primary display-4" to="/auth">
                                            Elevate
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </section>
    );
}

export default About;

