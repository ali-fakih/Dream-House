import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faDollarSign, faHome } from '@fortawesome/free-solid-svg-icons';


function Homepage() {

    const [transformed, setTransformed] = useState(false);


    useEffect(() => {

        transformElements();
    }, []);

    const transformElements = () => {

        setTransformed(true);
    };


    return (

        <div className="homepage w-[100%] m-auto text-white">


            {/* slider section */}
            <div className={`slider ${transformed ? 'transformed' : ''}`}>
                <Slider
                    slidesToShow={1}
                    autoplay={true}
                    autoplaySpeed={1000}
                >
                    {/* first image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slider-1.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">Doral, <span className="text-gray-400">Florida</span><br /> 78345</h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50  rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Rent | $ 12.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slide-1.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">
                                    Miami, <span className="text-gray-400">Florida</span><br /> 33101
                                </h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50 rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Buy | $ 68.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slider-2.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">Los Angeles, <span className="text-gray-400">California</span><br /> 90001</h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50 rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Rent | $ 23.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4th image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slide-3.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">Chigaco, <span className="text-gray-400">DC</span><br /> 70045</h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50 rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Sell | $ 49.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5th image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slider-3.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">New York, <span className="text-gray-400">New York</span><br /> 78345</h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50 rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Buy | $ 124.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6th image */}
                    <div className="relative">
                        <img src={require("../../Assets/images/slide-2.jpg")} alt="" className="w-full h-auto" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center">
                            <div className="mx-auto max-w-lg text-center text-white">
                                <h5 className="intro-title-top text-2xl absolute top-0 left-0 z-10 ml-20 mt-4 font-bold text-lightGreen italic">Doral, <span className="text-gray-400">Florida</span><br /> 78345</h5>
                                <h1 className="intro-title mb-4 text-6xl">
                                    <span className="color-b text-darkGreen">204 </span> Mount<br /> Olive Road Two
                                </h1>
                                <div className="absolute bottom-0 left-0 p-4 mb-20 ml-20">
                                    <h6 className="intro-subtitle intro-price py-2 px-4 w-50 border-2 border-darkGreen rounded-md text-2xl hover:bg-darkGreen">
                                        <Link to="/"><span className="price-a">Sell | $ 212.000</span></Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

            {/* contract and about section */}
            <div className="relative ml-4">
                <div className="container px-3 mx-auto flex flex-wrap items-start md:items-center overflow-hidden">
                    {/* <!--Left Col--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10">
                        <img className="w-full h-200 md:w-4/5 z-50" src={require("../../Assets/images/contracts.jpg")} alt="Activities for people with disabilities" />
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mb-6 md:mb-0">
                        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-darkGreen">
                            Local expertise for luxury homes
                        </h1>
                        <p className="leading-normal text-2xl mb-8 text-black">
                            <span className='text-lightGreen font-bold'>DreamHouse</span> Premier agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents.
                        </p>
                        <Link to="/about">
                            <button className="contra-btn"> Learn More</button>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Services section */}
            <section className="section-services section-t8 bg-white py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-3 flex justify-center items-center">
                            <div className="title-wrap mb-8 text-center md:text-left">
                                <h1 className="title-a text-5xl font-bold text-gray-800">Our Services</h1>
                            </div>
                        </div>

                        {/* First card service */}
                        <div className="col-span-1">
                            <div className="card-box-c p-8 flex flex-col justify-between h-full">
                                <div className="card-box-ico p-4 border-4 border-darkGreen flex items-center m-auto md:w-1/2">
                                    <span className="text-4xl p-4 text-black relative">
                                        <i className="absolute inset-0 flex items-center justify-center text-4xl">
                                            <FontAwesomeIcon icon={faGamepad} />
                                        </i>
                                    </span>
                                    <h2 className="title-c text-2xl text-black font-bold relative z-10 ml-4">Lifestyle</h2>
                                </div>

                                <div className="card-body-c my-4 px-2">
                                    <p className="content-c text-gray-700 text-lg">
                                        Explore the lifestyle of real estate, where every residence tells its own story.
                                        From bustling neighborhoods to tranquil havens, experience the essence of home living with every interaction.
                                    </p>
                                </div>
                                <div className="card-footer-c pl-2 m-auto">
                                    <Link to="#" className="link-c link-icon text-black">
                                        <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-darkGreen
                                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-darkGreen before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Read more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Second card service */}
                        <div className="col-span-1">
                            <div className="card-box-c p-8 flex flex-col justify-between h-full">
                                <div className="card-box-ico p-4 border-4 border-darkGreen flex items-center m-auto md:w-1/2">
                                    <span className="text-4xl p-4 text-black relative">
                                        <i className="absolute inset-0 flex items-center justify-center text-4xl">
                                            <FontAwesomeIcon icon={faDollarSign} />
                                        </i>
                                    </span>
                                    <h2 className="title-c text-2xl text-black font-bold relative z-10 ml-4">Loan</h2>
                                </div>

                                <div className="card-body-c my-4 px-2">
                                    <p className="content-c text-gray-700 text-lg">
                                        Engage in the realm of real estate finance and investment, where every deal shares a narrative.
                                        From profitable loans to strategic investments, delve into the core of property ownership with each financial move.
                                    </p>
                                </div>

                                <div className="card-footer-c pl-2 m-auto">
                                    <Link to="#" className="link-c link-icon text-black">
                                        <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-darkGreen
                                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-darkGreen before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Read more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Third card service */}
                        <div className="col-span-1">
                            <div className="card-box-c p-8 flex flex-col justify-between h-full">
                                <div className="card-box-ico p-4 border-4 border-darkGreen flex items-center m-auto md:w-1/2">
                                    <span className="text-4xl p-4 text-black relative">
                                        <i className="absolute inset-0 flex items-center justify-center text-4xl">
                                            <FontAwesomeIcon icon={faHome} />
                                        </i>
                                    </span>
                                    <h2 className="title-c text-2xl text-black font-bold relative z-10 ml-4">Sell</h2>
                                </div>

                                <div className="card-body-c my-4 px-2">
                                    <p className="content-c text-gray-700 text-lg">
                                        Delve into the world of real estate sales, where each property narrates its unique tale.
                                        From bustling listings to serene transactions, discover the essence of property selling with every interaction.
                                    </p>
                                </div>

                                <div className="card-footer-c pl-2 m-auto">
                                    <Link to="#" className="link-c link-icon text-black">
                                        <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-darkGreen
                                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-darkGreen before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Read more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sell */}
            <div className="relative ml-4">
                <div className="container px-3 mx-auto flex flex-wrap items-start md:items-center overflow-hidden">
                    {/* <!--Left Col--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10">
                        <img className="w-full h-auto md:h-auto md:w-4/5 z-50" src={require("../../Assets/images/property-3.jpg")} alt="Activities for people with disabilities" />
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mb-6 md:mb-0">
                        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-darkGreen">
                            Sell for top dollar and save thousands on fees
                        </h1>
                        <p className="leading-normal text-sm sm:text-lg md:text-xl lg:text-2xl mb-8 text-black">
                            Our agents have the experience to price, market, and sell your home for the best price possible.
                            Plus, <span className='font-bold'>Dream</span><span className='text-darkGreen font-bold'>Home</span> listings get seen by 70% more buyers.
                            And you get it all for half the listing fee other brokerages often charge.
                            Get started with a free consultation.
                        </p>
                        <Link to="/sell">
                            <button className="contra-btn px-6 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-darkGreen text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"> Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Rent */}
            <div className="relative mx-auto px-3">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center overflow-hidden">
                    {/* <!--Right Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mb-6 md:mb-0">
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Find your perfect rental on <span className='font-bold'>Dream</span><span className='font-bold text-lightGreen'>House</span>
                        </h1>
                        <p className="leading-normal text-2xl mb-8 text-black">
                            Whether you’re searching for houses, apartments, or condos, it's easy to find a place you'll love.
                        </p>
                        <Link to="/buy">
                            <button className="contra-btn"> Learn More</button>
                        </Link>
                    </div>
                    {/* <!--Left Col--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10">
                        <img className="w-full h-auto md:h-full z-50" src={require("../../Assets/images/property-6.jpg")} alt="Activities for people with disabilities" />
                    </div>
                </div>
            </div>

            {/* Sending a message */}
            <div className="relative bg-gray-300">
                <div className="container px-2 sm:px-3 md:px-4 mx-auto flex flex-col sm:flex-row items-start md:items-center overflow-hidden  ml-20 mr-20">
                    {/* <!--Left Side--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-center sm:items-start text-center md:text-left mb-6 md:mb-0 mx-auto">
                        <h1 className="my-4 text-3xl font-bold leading-tight text-black">
                            Talk to a <span className='font-bold text-darkGreen'>Dream</span><span className='font-bold text-lightGreen'>House</span> agent
                        </h1>
                        <p className="leading-normal text-lg md:text-2xl mb-8 text-black">
                            You’ll be connected with an expert local agent—there’s no pressure or obligation.
                        </p>
                    </div>
                    {/* <!--Right Side --> */}
                    <div className="w-full md:w-3/5 py-4 sm:py-6 px-2 sm:px-6 md:pr-12 mb-4 sm:mb-10 mx-auto">
                        <h1 className="my-4 text-lg sm:text-xl font-bold leading-tight text-black">
                            Are you searching for homes?
                        </h1>
                        <Link to="/agent">
                            <button className="w-full sm:w-auto contra-btn">See our Agents</button>
                        </Link>
                    </div>
                </div>
            </div>






        </div >
    );
}



export default Homepage;
