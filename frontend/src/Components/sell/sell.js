import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBurst, faSackDollar, faPiggyBank } from '@fortawesome/free-solid-svg-icons';



const Sell = () => {

    const [showForm, setShowForm] = useState(false);
    const [testimonialActive, setTestimonialActive] = useState(2);
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


    return (


        <div className="buy">

            {/* introduction and image */}
            <div class="relative mx-auto md:ml-8">
                <div class="container px-3 mx-auto flex flex-col-reverse md:flex-row items-center md:items-start overflow-hidden">
                    {/* <!-- Right Col --> */}
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left mb-6 md:mb-0">
                        <h1 class="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Sell for top dollar and save thousands on fees
                        </h1>
                        <p class="leading-normal text-2xl mb-8 text-black">
                            Our agents have the experience to price, market, and sell your home for the best price possible. And you get it all for half the fee other brokerages often charge.
                        </p>
                        <p class="leading-normal text-2xl mb-8 text-black">
                            To get started, enter your address below. You’ll answer a few quick questions and we'll be in touch within a couple of hours.
                        </p>

                        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
                            {/* <!-- input and label Location --> */}
                            <div class="mt-2 md:mt-0 md:mr-10">
                                <input type="text" name="inputname" class="block w-full md:w-auto rounded-md py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800" placeholder="Enter your street address" />
                            </div>
                            <div class="w-full md:w-auto flex items-center justify-center md:justify-start cursor-pointer">
                                <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white font-bold dark:hover:text-green-500 dark:shadow-none group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full"></span>
                                    <span class="absolute left-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-5 h-5 text-green-400">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-5 h-5 text-green-400">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">Next</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Left Col --> */}
                    <div class="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10 md:mb-0 ml-0 md:ml-20">
                        <img class="w-full h-auto md:h-300 md:w-full z-50" src={require("../../Assets/images/property-4.jpg")} alt="Activities for people with disabilities" />
                    </div>
                </div>
            </div>

            {/* why sell with DreamHouse Section */}
            <section class="section-services section-t8 bg-white py-8">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="col-span-3 flex justify-center items-center">
                            <div class="title-wrap mb-8 text-center md:text-left">
                                <h1 class="title-a text-5xl font-bold text-gray-800">Why sell with Dream<span class='text-darkGreen'>House</span> ?</h1>
                            </div>
                        </div>


                        {/* first card service */}
                        <div class="col-span-1 bg-gray-100 md:mx-4">
                            <div class="card-box-c p-8 flex flex-col justify-between h-full">
                                <div class="card-box-ico p-4 flex items-center mx-auto md:mx-0" style={{ width: '130px' }}>
                                    <span class="text-4xl p-4 text-black relative mx-auto md:mx-0" style={{ width: '50%' }}>
                                        <i class="absolute inset-0 flex items-center justify-center text-6xl">
                                            <FontAwesomeIcon icon={faPersonBurst} />
                                        </i>
                                    </span>

                                </div>

                                <div class="card-body-c my-4 px-2">
                                    <h2 class='text-darkGreen text-2xl font-bold text-center md:text-left'>
                                        We have the best agents in your market
                                    </h2>
                                    <p class="content-c text-black text-xl mt-2 text-center md:text-left">
                                        Dream<span class='text-lightGreen'>House</span> agents are among the most experienced in the industry.
                                    </p>
                                </div>


                            </div>
                        </div>

                        {/* second card service */}
                        <div class="col-span-1 bg-gray-100 md:mx-4">
                            <div class="card-box-c p-8 flex flex-col justify-between h-full">
                                <div class="card-box-ico p-4 flex items-center mx-auto md:mx-0" style={{ width: '130px' }}>
                                    <span class="text-4xl p-4 text-black relative mx-auto md:mx-0" style={{ width: '50%' }}>
                                        <i class="absolute inset-0 flex items-center justify-center text-6xl">
                                            <FontAwesomeIcon icon={faSackDollar} />
                                        </i>
                                    </span>

                                </div>

                                <div class="card-body-c my-4 px-2">
                                    <h2 class='text-darkGreen text-2xl font-bold text-center md:text-left'>
                                        Reach more buyers
                                    </h2>
                                    <p class="content-c text-black text-xl mt-2 text-center md:text-left">
                                        Dream<span class='text-lightGreen'>House </span>
                                        is the #1 brokerage website, with five times more traffic than the next closest competitor.
                                    </p>
                                </div>


                            </div>
                        </div>

                        {/* third card service */}
                        <div class="col-span-1 bg-gray-100 md:mx-4">
                            <div class="card-box-c p-8 flex flex-col justify-between h-full">
                                <div class="card-box-ico p-4 flex items-center mx-auto md:mx-0" style={{ width: '130px' }}>
                                    <span class="text-4xl p-4 text-black relative mx-auto md:mx-0" style={{ width: '50%' }}>
                                        <i class="absolute inset-0 flex items-center justify-center text-6xl">
                                            <FontAwesomeIcon icon={faPiggyBank} />
                                        </i>
                                    </span>

                                </div>

                                <div class="card-body-c my-4 px-2">
                                    <h2 class='text-darkGreen text-2xl font-bold text-center md:text-left'>
                                        Save with a listing fee as low as 1%
                                    </h2>
                                    <p class="content-c text-black text-xl mt-2 text-center md:text-left">
                                        When you buy and sell with us, you’ll pay half the fee other brokerages often charge.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="relative ml-4">
                <div className="container px-3 mx-auto flex flex-wrap items-start md:items-center overflow-hidden">
                    {/* <!--Title Container--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10">
                        <img className="w-full h-200 md:w-4/5 z-50" src={require("../../Assets/images/property-3.jpg")} alt="Activities for people with disabilities" />
                    </div>
                    {/* <!--Content Container--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mb-6 md:mb-0">
                        {/* <!--Content Section 1--> */}
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            More eyes on your home
                        </h1>
                        <p className="leading-normal text-lg mb-8 text-black">
                            When you list with DreamHouse,
                            your home will get 70% more views, increasing the chances you’ll find interested buyers.
                        </p>
                        {/* <!--Content Section 2--> */}
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Preferred placement in search results
                        </h1>
                        <p className="leading-normal text-lg mb-8 text-black">
                            For the first week your listing is live, it will show at the top of buyers’ searches across the Redfin site and app.
                        </p>
                        {/* <!--Content Section 3--> */}
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Digital marketing campaigns
                        </h1>
                        <p className="leading-normal text-lg mb-8 text-black">
                            Every Redfin listing gets a digital marketing campaign targeted to active buyers.
                        </p>
                        {/* <!--Content Section 4--> */}
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Interactive 3D tours
                        </h1>
                        <p className="leading-normal text-lg mb-8 text-black">
                            Every home listed with Redfin gets a stunning 3D tour so buyers can tour them from anywhere.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!--Selling a High-End Home--> */}
            <div className="relative ml-8">
                <div className="container px-3 mx-auto flex flex-col md:flex-row items-start md:items-center overflow-hidden">

                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start mr-8 text-center md:text-left mb-6 md:mb-0">
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Selling a high-end<br /> home?
                        </h1>
                        <p className="leading-normal text-2xl mb-8 text-black">
                            You may be eligible for Redfin Premier, our highest level of service from our best agents. You'll be paired with a local expert who has years of experience selling luxury homes.
                        </p>
                        <Link to="/">
                            <button className="contra-btn"> Learn More</button>
                        </Link>
                    </div>
                    {/* <!--Image Section--> */}
                    <div className="w-full md:w-3/5 py-6 md:py-0 pr-6 md:pr-12 mb-10 md:ml-0 md:mr-auto">
                        <img className="w-full h-auto md:h-full z-50" src={require("../../Assets/images/sold.jpg")} alt="Activities for people with disabilities" />
                    </div>
                </div>
            </div>

            {/* <!-- Container Title: Selling Options --> */}
            <div className="relative ml-4">

                <div className="container px-3 mx-auto flex flex-wrap items-start md:items-center overflow-hidden">
                    {/* <!--Left Col--> */}
                    <div className="w-full md:w-3/5 py-6 pr-6 md:pr-12 mb-10">
                        <img className="w-full h-auto md:h-200 md:w-4/5 z-50" src={require("../../Assets/images/agentss.jpg")} alt="Activities for people with disabilities" />
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left mb-6 md:mb-0">
                        <h1 className="my-4 text-3xl font-bold leading-tight text-darkGreen">
                            Ready to get started?
                        </h1>
                        <p className="leading-normal text-xl md:text-2xl mb-8 text-black">
                            We can connect you with an agent today who will help you understand your
                            options for selling and answer all your questions
                        </p>
                        <div className='contact-agent flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10'>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    name="inputname"
                                    className="block w-full md:w-80 rounded-md py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                    placeholder="Enter your street address"
                                />
                            </div>

                            <div className="w-full h-40 md:w-auto flex items-center justify-center cursor-pointer">
                                <div
                                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 md:pr-16 overflow-hidden font-semibold shadow text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white font-bold dark:hover:text-green-500 dark:shadow-none group"
                                >
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full"
                                    ></span>
                                    <span
                                        className="absolute left-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            fill="none"
                                            className="w-5 h-5 text-green-400"
                                        >
                                            <path
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span
                                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            fill="none"
                                            className="w-5 h-5 text-green-400"
                                        >
                                            <path
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span
                                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                                    >
                                        Next
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* testemonials */}
            <section className="antialiased sans-serif bg-gray-200 text-gray-600">
                <div className="my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
                    <div className="relative w-full py-2 md:py-24 bg-darkGreen md:w-1/2 flex flex-col item-center justify-center">
                        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
                        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
                            <span className="md:block">What Our</span>
                            <span className="md-block">Customers</span>
                            <span className="block">Are Saying!</span>
                        </div>
                        <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
                            <button className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10" onClick={() => setTestimonialActive(prev => prev === 1 ? 3 : prev - 1)}>
                                &#8592;
                            </button>
                            <button className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10" onClick={() => setTestimonialActive(prev => prev >= 3 ? 1 : prev + 1)}>
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-100 md:w-1/2">
                        <div className="flex flex-col h-full relative">
                            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-lightGreen fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
                                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                                </svg>
                            </div>
                            <div className="h-full relative z-10">
                                {/* Adjusted display style for the initial active testimonial */}
                                <div style={{ display: testimonialActive === 2 ? 'block' : 'none' }}>
                                    <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                                        DreamHouse agents went above and beyond to ensure our needs were met during the home buying journey.
                                        Their expertise and commitment to excellence made the process stress-free and efficient.
                                        We are incredibly grateful for their personalized attention and would highly
                                        recommend their services to anyone in the market for a new home.
                                    </p>
                                </div>
                                {/* Other testimonials remain unchanged */}
                                <div style={{ display: testimonialActive === 1 ? 'block' : 'none' }}>
                                    <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                                        DreamHouse agents provided exceptional service throughout the entire home buying process.
                                        Their dedication, professionalism, and attention to detail made our experience seamless and enjoyable.
                                        We couldn't be happier with the support and guidance they provided us every step of the way.
                                    </p>
                                </div>
                                <div style={{ display: testimonialActive === 3 ? 'block' : 'none' }}>
                                    <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                                        DreamHouse agents exceeded our expectations with their exceptional level of service and expertise.
                                        From the initial consultation to the closing, they were with us every step of the way,
                                        providing valuable guidance and support.
                                        Their professionalism and dedication truly made the home buying experience a memorable one.
                                    </p>
                                </div>
                            </div>
                            <div className="flex my-4 justify-center items-center">
                                <button onClick={() => setTestimonialActive(1)} className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 1 ? 'h-12 w-12 opacity-25 bg-darkGreen text-gray-600' : 'h-16 w-16 opacity-100 bg-darkGreen text-white'}`}>JD</button>
                                <button onClick={() => setTestimonialActive(2)} className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-lightGreen rounded-full mx-2 ${testimonialActive !== 2 ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600' : 'opacity-100 bg-indigo-600 text-white'}`}>WD</button>
                                <button onClick={() => setTestimonialActive(3)} className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-lightGreen rounded-full mx-2 ${testimonialActive !== 3 ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600' : 'opacity-100 bg-indigo-600 text-white'}`}>JW</button>
                            </div>
                            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                                <div className="text-center" style={{ display: testimonialActive === 1 ? 'block' : 'none' }}>
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Doe</h2>
                                    <small className="text-gray-500 text-xs md:text-sm truncate">CEO, ABC Inc.</small>
                                </div>
                                <div className="text-center" style={{ display: testimonialActive === 2 ? 'block' : 'none' }}>
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Winter Doe</h2>
                                    <small className="text-gray-500 text-xs md:text-sm truncate">CTO, XYZ Corp.</small>
                                </div>
                                <div className="text-center" style={{ display: testimonialActive === 3 ? 'block' : 'none' }}>
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Wick</h2>
                                    <small className="text-gray-500 text-xs md:text-sm truncate">Product Manager, Fake Corp.</small>
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
