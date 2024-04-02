
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import "./agent.css";

function Agent() {
    // for agent
    const [agents, setAgents] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    // for checkout function
    const [redirectToCheckout, setRedirectToCheckout] = useState(false);
    const navigate = useNavigate();

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'How do I find the perfect agent?',
            content: 'Finding the ideal agent is like finding a unicorn in a haystack - magical and rare! Use our dynamic search bar to discover your real estate wizard.',
        },
        {
            title: 'What makes our agents stand out?',
            content: "Our agents are nott just real estate experts; they are superheroes in disguise! They will swoop in and save the day with their superhuman negotiation skills.",
        },
        {
            title: 'Can I trust your agents?',
            content: 'Trust is our middle name! Our agents are more reliable than your morning coffee - they will never let you down.',
        },

    ];

    // for agent
    useEffect(() => {
        axios.get('http://localhost:3000/agents/getallagents')
            .then(response => {
                setAgents(response.data);
            })
            .catch(error => {
                console.error('Error fetching agents:', error);
            });
    }, []);
    //  for agent
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    //  for agent
    const displayBio = (bio) => {
        // Limiting bio to five to six words
        return bio.split(' ').slice(0, 6).join(' ') + '...';
    };

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
        <section className='Agent-Page'>

            {/* Background Image section */}
            <section className="header16 cid-u84DsJdRHp mbr-fullscreen mbr-parallax-background">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-10">
                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                                <strong>Meet Agents</strong>
                            </h1>
                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                                Discover the Extraordinary Agents Behind Your Dream Home
                            </p>
                            <div className="mbr-section-btn">
                                <Link className="btn btn-white-outline display-7" to="/inspiration">Get Inspired</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* first section */}
            <section className="video04 cid-u84DsJdbWn" id="video-6-u84DsJdbWn">
                <div className="container">
                    <div className="mbr-section-head mb-5">
                        <h4 className="mbr-section-title mbr-fonts-style mb-0 mt-0 display-2">
                            <strong>Agent Showcase Extravaganza</strong>
                        </h4>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 video-block">
                            <div className="video-wrapper">
                                <iframe
                                    className="mbr-embedded-video"
                                    src="https://www.youtube.com/embed/qPjsHOup-7E?autoplay=1&loop=1&playlist=qPjsHOup-7E&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
                                    width="1280"
                                    height="720"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Agent Showcase"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section className="people03 cid-u84DsJeqQ1" id="team-1-u84DsJeqQ1">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Meet Our Stars</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {agents.slice(0, showAll ? agents.length : 4).map(agent => (
                            <div className="item features-image col-12 col-md-6 col-lg-3" key={agent.id}>
                                <div className="item-wrapper">
                                    <div className="item-img">
                                        <img
                                            src={`http://localhost:3000/${agent.image.replace(
                                                /\\/g,
                                                "/"
                                            )}`}
                                            alt={agent.fullName}

                                        />
                                    </div>
                                    <div className="item-content align-left">
                                        <h6 className="item-subtitle mbr-fonts-style display-5">
                                            <strong>{agent.fullName}</strong>
                                        </h6>
                                        <p className="mbr-text mbr-fonts-style display-7">
                                            {displayBio(agent.bio)}
                                        </p>
                                        <div className="mbr-section-btn">
                                            <Link to={`/agents/${agent._id}`} className="btn btn-primary btn-center">
                                                View Details
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {agents.length > 4 && (
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

            {/* third section */}
            {/* Section displaying agent plans */}
            <section className="pricing1 cid-u84DsJdrM5" id="pricing-cards-1-u84DsJdrM5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Agent Plans</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {/* Pricing Card 1: Elite Agent */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Elite Agent</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>$99</strong>/one-time
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Unlock VIP Access to Exclusive Properties and Close Deals Like a Pro
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Elite Agent", price: 99, quantity: 1 }])} className="btn btn-primary display-7">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 2: Premium Agent */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Premium Agent</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>$49</strong>/one-time
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Enhance Your Profile Visibility and Get Featured in Top Listings
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Premium Agent", price: 49, quantity: 1 }])} className="btn btn-primary display-7">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 3: Pro Agent */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Pro Agent</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>$29</strong>/one-time
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Boost Your Reach and Connect with High-End Clients Effortlessly
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Pro Agent", price: 29, quantity: 1 }])} className="btn btn-primary display-7">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card 4: Starter Agent */}
                        <div className="item features-without-image col-12 col-md-6 col-lg-3 item-mb">
                            <div className="item-wrapper">
                                <div className="item-head">
                                    <h5 className="item-title mbr-fonts-style mb-0 display-5">
                                        <strong>Starter Agent</strong>
                                    </h5>
                                    <h6 className="item-subtitle mbr-fonts-style mt-0 mb-0 display-7">
                                        <strong>$9</strong>/one-time
                                    </h6>
                                </div>
                                <div className="item-content">
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Kickstart Your Real Estate Journey with Essential Tools and Resources
                                    </p>
                                </div>
                                <div className="mbr-section-btn item-footer">
                                    <button onClick={() => handleJoinNow([{ name: "Starter Agent", price: 9, quantity: 1 }])} className="btn btn-primary display-7">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4th section */}
            <section className="features19 cid-u84DsJdqY2" id="features-27-u84DsJdqY2">
                <div className="container">
                    <div className="row">
                        <div className="item features-without-image col-12 col-lg-4 item-mb active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1638868939857-11ac407b347a.jpeg")}
                                            alt="Top Achiever"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Top Achiever</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Meet Sarah, the Record-Breaking Agent Who Turns Dreams into
                                        Reality
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1643029950351-6ae7f69186fc.jpeg")}
                                            alt="Innovative Genius"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Innovative Genius</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Introducing Alex, the Tech-Savvy Agent Revolutionizing the
                                        Real Estate Industry
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1644945570917-1585f682efaa.jpeg")}
                                            alt="Charming Maverick"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Charming Maverick</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Discover Emily, the Bold Agent Redefining Luxury Living
                                        Experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5th section */}
            <section className="features023 cid-u84DsJeeR8" id="metrics-1-u84DsJeeR8">
                <div className="container">
                    <div className="row content-row justify-content-center">
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="title mb-2 mb-md-3">
                                    <span className="num mbr-fonts-style display-1">
                                        <strong>1000+</strong>
                                    </span>
                                </div>
                                <h4 className="card-title mbr-fonts-style display-5">
                                    <strong>Happy Clients</strong>
                                </h4>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="title mb-2 mb-md-3">
                                    <span className="num mbr-fonts-style display-1">
                                        <strong>500+</strong>
                                    </span>
                                </div>
                                <h4 className="card-title mbr-fonts-style display-5">
                                    <strong>Dream Homes Sold</strong>
                                </h4>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="title mb-2 mb-md-3">
                                    <span className="num mbr-fonts-style display-1">
                                        <strong>99%</strong>
                                    </span>
                                </div>
                                <h4 className="card-title mbr-fonts-style display-5">
                                    <strong>Customer Satisfaction</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6th section */}
            <section className="people05 cid-u84DsJeuxB" id="testimonials-5-u84DsJeuxB">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-12 mb-0 content-head">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Raving</strong>
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item features-without-image col-12 col-md-6 col-lg-4 active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Absolutely blown away by their dedication and expertise!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1638868939857-11ac407b347a.jpeg")}
                                            data-slide-to="0"
                                            data-bs-slide-to="0"
                                            alt="Maxwell Powers"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Maxwell Powers</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Unbelievable service, they made buying a house feel like a
                                        breeze!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1589571894960-20bbe2828d0a.jpeg")}
                                            data-slide-to="1"
                                            data-bs-slide-to="1"
                                            alt="Scarlett Stone"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Scarlett Stone</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        These agents are the real deal, they found me my dream home in
                                        no time!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1563170423-18f482d82cc8.jpeg")}
                                            data-slide-to="2"
                                            data-bs-slide-to="2"
                                            alt="Jack Hammer"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Jack Hammer</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Incredible team, they turned my house hunt into a fun
                                        adventure!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1564972379941-fde999e14945.jpeg")}
                                            data-slide-to="4"
                                            data-bs-slide-to="5"
                                            alt="Luna Bright"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Luna Bright</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Unmatched professionalism and friendliness, they truly care
                                        about their clients!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1557684387-08927d28c72a.jpeg")}
                                            data-slide-to="6"
                                            data-bs-slide-to="6"
                                            alt="Oliver Swift"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Oliver Swift</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        I never knew buying a house could be this enjoyable, thanks to
                                        these agents!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">
                                        <img
                                            src={require("../../Assets/images/photo-1643029950351-6ae7f69186fc.jpeg")}
                                            data-slide-to="7"
                                            data-bs-slide-to="7"
                                            alt="Aria Blaze"
                                        />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Aria Blaze</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7th section */}
            <section className="header14 cid-u84DsJepCy mbr-parallax-background" id="call-to-action-9-u84DsJepCy">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-12 col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <h1 className="card-title mbr-fonts-style mb-4 display-1">
                                        <strong>Dream Home Awaits You!</strong>
                                    </h1>
                                    <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                        Find your perfect home with our expert agents today!
                                    </p>
                                    <div className="mbr-section-btn mt-4">
                                        <Link className="btn btn-primary display-7" to="/buy">
                                            Explore Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8th section */}
            <section className="list1 cid-u6kSenxY0V" id="faq-1-u6kSenxY0V">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-10 m-auto">
                            <div className="content">
                                <div className="mbr-section-head align-left mb-5">
                                    <h3 className="mbr-section-title mb-2 mbr-fonts-style display-2">
                                        <strong>Got Questions? We Have Answers!</strong>
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


        </section>
    );
}

export default Agent;
