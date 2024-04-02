import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

import './homepage.css';



function Homepage() {
    // const { id } = useParams();
    const [agents, setAgents] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Why Choose Us?',
            content: 'Because we make dreams come true! Our mission is to find you the perfect home that fits your wildest fantasies.',
        },
        {
            title: 'What Makes Us Unique?',
            content: "We're not just real estate agents, we're matchmakers for you and your dream property.",
        },
        {
            title: 'How Do We Do It?',
            content: 'With a sprinkle of magic and a dash of expertise, we turn your house-hunting journey into a fairytale adventure.',
        },
        {
            title: 'Can I Trust You?',
            content: 'Trust us like you trust your morning coffee - essential, comforting, and always there for you.',
        },
        {
            title: 'Are You The One?',
            content: "If you're looking for a real estate experience that's out of this world, then yes, we're the one for you!",
        },
    ];

    useEffect(() => {
        axios.get('http://localhost:3000/agents/getallagents')
            .then(response => {
                // Limiting to only four agents
                const limitedAgents = response.data.slice(0, 4);
                setAgents(limitedAgents);
            })
            .catch(error => {
                console.error('Error fetching agents:', error);
            });
    }, []);

    return (

        <div className="homepage w-[100%] m-auto text-white">

            {/* first section */}
            <section className="header16 cid-u6kSenufjN mbr-fullscreen mbr-parallax-background" id="hero-17-u6kSenufjN">
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-wrap col-12 col-md-10">
                            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                                <strong>Dreamland</strong>
                            </h1>
                            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">Embark on a Journey Through Extraordinary Real
                                Estate Wonders</p>
                            <div className="mbr-section-btn">
                                <Link className="btn btn-white-outline display-7" to="/about">

                                    Discover
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section className="article2 cid-u6kSenvpuI" id="about-us-2-u6kSenvpuI">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                            <img className="w-100" src={require("../../Assets/images/photo-1560185127-6ed189bf02f4.jpeg")} alt="About Us" />
                        </div>
                        <div className="col-12 col-md-12 col-lg">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                    <strong>Our Epic Quest</strong>
                                </h1>
                                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">At DreamHouse, we are not just selling
                                    properties; we are crafting dreams into reality. Our mission is to redefine the real estate experience
                                    with a touch of magic and a sprinkle of adventure.</p>
                                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">Step into a world where every property tells a
                                    unique story, where walls whisper secrets of grandeur, and where the ordinary transforms into the
                                    extraordinary.</p>
                                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">Join us on this thrilling expedition as we
                                    navigate through the realms of imagination and turn your real estate dreams into unforgettable memories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* third Section { Agent Section } */}
            <section className="people03 cid-u6kSenvB6k" id="team-1-u6kSenvB6k">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5">
                                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                    <strong>Meet Us</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {agents.map(agent => (
                            <div key={agent.id} className="item features-image col-12 col-md-6 col-lg-3">
                                <div className="item-wrapper">
                                    <Link to={`/agents/${agent._id}`}>
                                        <div className="item-img mb-3">
                                            <img
                                                src={`http://localhost:3000/${agent.image.replace(
                                                    /\\/g,
                                                    "/"
                                                )}`}
                                                alt={agent.fullName}
                                            />
                                        </div>
                                    </Link>
                                    <div className="item-content align-left">
                                        <h6 className="item-subtitle mbr-fonts-style display-5">
                                            <strong>{agent.fullName}</strong>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* forth section */}
            <section className="features19 cid-u6kSenveYf" id="features-27-u6kSenveYf">
                <div className="container">
                    <div className="row">
                        <div className="item features-without-image col-12 col-lg-4 item-mb active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">

                                        <img src={require("../../Assets/images/photo-1448630360428-65456885c650.jpeg")} alt="Enchanted Estates" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Enchanted Estates</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Discover homes that defy reality with enchanting gardens, secret passages, and whimsical architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">

                                        <img src={require("../../Assets/images/photo-1555636222-cae831e670b3.jpeg")} alt="Majestic Mansions" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Majestic Mansions</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Explore grand estates fit for royalty, boasting ballrooms, libraries, and breathtaking views.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">

                                        <img src={require("../../Assets/images/photo-1556912173-3bb406ef7e77.jpeg")} alt="Cosmic Cabins" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Cosmic Cabins</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Uncover cozy cabins nestled in mystical forests, where stargazing and serenity await.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* fifth section */}
            <section className="people05 cid-u6kSenwVwl" id="testimonials-5-u6kSenwVwl">
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
                                        Absolutely stunning properties! The best real estate experience I&#x27;ve ever had.
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1522091066250-665186289043.jpeg")} alt="no" data-slide-to="0" data-bs-slide-to="0" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Maxwell Bright</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Incredible service and attention to detail. Found my dream home in no time!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1529139574466-a303027c1d8b.jpeg")} alt="no" data-slide-to="1" data-bs-slide-to="1" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Sophia Grace</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Professional, efficient, and friendly team. Highly recommend for all your real estate needs!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1509098681029-b45e9c845022.jpeg")} alt="no" data-slide-to="2" data-bs-slide-to="2" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Ethan Stone</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Exceeded all expectations. Sold my house in record time with their expertise!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1509098681029-b45e9c845022.jpeg")} alt="no" data-slide-to="4" data-bs-slide-to="5" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Isabella Cruz</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Unmatched quality and personalized service. A real estate company like no other!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1662795854059-547d94855285.jpeg")} alt="no" data-slide-to="6" data-bs-slide-to="6" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Oliver Knight</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <p className="card-text mbr-fonts-style display-7">
                                        Trustworthy and reliable. They made the whole process smooth and stress-free!
                                    </p>
                                    <div className="img-wrapper mt-4 mb-3">

                                        <img src={require("../../Assets/images/photo-1606081430924-b6480765d470.jpeg")} alt="no" data-slide-to="7" data-bs-slide-to="7" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-7">
                                        <strong>Luna Moon</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6th section */}
            <section className="gallery07 cid-u6kSenxFV5" id="gallery-14-u6kSenxFV5">
                <div className="container-fluid gallery-wrapper">
                    <div className="grid-container">
                        <div className="grid-container-3" style={{ transform: 'translate3d(-200px, 0px, 0px)' }}>
                            <div className="grid-item">
                                <img src={require("../../Assets/images/photo-1486406146926-c627a92ad1ab.jpeg")} alt="no" />
                            </div>
                            <div className="grid-item">
                                <img src={require("../../Assets/images/photo-1560520653-9e0e4c89eb11.jpeg")} alt="no" />
                            </div>
                            <div className="grid-item">
                                <img src={require("../../Assets/images/photo-1560518883-ce09059eeffa.jpeg")} alt="no" />
                            </div>
                            <div className="grid-item">
                                <img src={require("../../Assets/images/photo-1564767609342-620cb19b2357.jpeg")} alt="no" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 7th section */}
            <section className="gallery1 mbr-gallery cid-u6kSenxiI6" id="gallery-10-u6kSenxiI6">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mb-5">
                                <h3 className="mbr-section-title mbr-fonts-style align-center m-0 display-2">
                                    <strong>Captivating Real Estate Showcase</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mbr-gallery">
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1522091066250-665186289043.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1613490493576-7fde63acd811.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1558954157-aa76c0d246c6.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1516156008625-3a9d6067fab5.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1585914641050-fa9883c4e21c.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1494526585095-c41746248156.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1602497485099-e41a116a272c.jpeg")} alt="gallery" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item gallery-image">
                            <div className="item-wrapper mb-3">
                                <img className="w-100" src={require("../../Assets/images/photo-1516455590571-18256e5bb9ff.jpeg")} alt="gallery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8th section */}
            <section className="features19 cid-u6kSenxdWq" id="features-27-u6kSenxdWq">
                <div className="container">
                    <div className="row">
                        <div className="item features-without-image col-12 col-lg-4 item-mb active">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1459767129954-1b1c1f9b9ace.jpeg")} alt="no" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Cutting-Edge Tech</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Revolutionary tools for seamless transactions and property management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1484154218962-a197022b5858.jpeg")} alt="no" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Innovative Solutions</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Creative approaches to match you with the perfect property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-without-image col-12 col-lg-4 item-mb">
                            <div className="item-wrapper">
                                <div className="card-box align-left">
                                    <div className="img-wrapper mb-3">
                                        <img src={require("../../Assets/images/photo-1564013799919-ab600027ffc6.jpeg")} alt="no" />
                                    </div>
                                    <h5 className="card-title mbr-fonts-style display-5">
                                        <strong>Exceptional Service</strong>
                                    </h5>
                                    <p className="card-text mbr-fonts-style display-7">
                                        Dedicated team committed to exceeding your real estate expectations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9th section */}
            <section className="image02 cid-u6kSenx5YP mbr-fullscreen mbr-parallax-background" id="image-13-u6kSenx5YP">
                <div className="container">
                    <div className="row"></div>
                </div>
            </section>

            {/* 10th section */}
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

            {/* 11th section */}
            < section className="header14 cid-u6kSenywI2" id="call-to-action-10-u6kSenywI2" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card col-12 col-md-12 col-lg-10">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <h1 className="card-title mbr-fonts-style mb-4 display-1">
                                        <strong>Unlock Your Dreams</strong>
                                    </h1>
                                    <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                        Ready to dive into the world of magical real estate? Let&#x27;s make your dreams a reality! Chat with us now!
                                    </p>
                                    <div className="mbr-section-btn mt-4">
                                        <Link className="btn btn-primary display-7" to="/auth">
                                            Chat Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 12th section */}
            < section className="features10 cid-u6kSenykNw" id="metrics-2-u6kSenykNw" >
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
                                        Dream Homes Found
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
                                        Satisfaction Rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 13th Section */}
            < section className="header18 cid-u6kSenyDw2 mbr-fullscreen" id="video-5-u6kSenyDw2" >
                <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.youtube.com/embed/-CO3DEfXPYU?autoplay=1&loop=1&playlist=-CO3DEfXPYU&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
                                allowFullScreen
                                style={{ width: '100%', height: '100vh' }}
                                title="header-video">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section >





        </div >
    );
}



export default Homepage;
