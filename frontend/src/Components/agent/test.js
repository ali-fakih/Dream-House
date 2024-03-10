import React from 'react';
import { Link } from 'react-router-dom';
import "./agent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Agent() {
    return (
        <section className='Agent-Page'>
            <div className="intro-agent flex items-center justify-center h-full">
                <div className="title-wrap mb-8">
                    <h1 className="title-a text-center text-3xl font-bold text-gray-800">Our Agents</h1>
                </div>
            </div>

            <div className="landing-agent">
                <div className="container-agent">

                    {/* first Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img src={require("../../Assets/images/agent-1.jpg")} alt="" />
                            <div className="agent-name">
                                <span>John</span><br />
                                <span>Doe</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Exemplifying the epitome of professionalism and dedication, John Doe embodies the values of DreamHouse, ensuring every client's journey is marked by unparalleled service and expertise, guiding them towards their dream home with unwavering commitment.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* second Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img
                                src={require("../../Assets/images/agent-4.jpg")}
                                alt="" />
                            <div className="agent-name">
                                <span>Sara</span>
                                <br />
                                <span>Stanley</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                With an unwavering commitment to excellence, Sara Stanley epitomizes the ethos of DreamHouse, guiding clients through the intricacies of real estate with a blend of expertise and personalized care, ensuring each journey is marked by success and satisfaction.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>


                    {/* third Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img
                                src={require("../../Assets/images/agent-7.jpg")}
                                alt="" />
                            <div className="agent-name">
                                <span>Jane</span>
                                <br />
                                <span>Howard</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Jane Howard, embodying the essence of DreamHouse, blends unwavering dedication with unparalleled expertise to guide clients through their real estate journey, ensuring every interaction is marked by professionalism and success.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>


                    {/* 4th Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img
                                src={require("../../Assets/images/agent-3.jpg")}
                                alt="" />
                            <div className="agent-name">
                                <span>Raymond</span>
                                <br />
                                <span>Smith</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Raymond Smith, a beacon of professionalism within DreamHouse, combines seasoned expertise with personalized attention to navigate clients through the real estate landscape, ensuring each journey is marked by success and satisfaction.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>


                    {/* 5th Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img src={require("../../Assets/images/agent-6.jpg")} alt="" />
                            <div className="agent-name">
                                <span>Tao</span>
                                <br />
                                <span>Yang</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Tao Yang, embodying the values of DreamHouse, provides expert guidance and personalized attention to clients, ensuring their real estate ventures are successful and satisfying, with an unwavering dedication to excellence.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>


                    {/* 6th Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img src={require("../../Assets/images/agent-2.jpg")} alt="" />
                            <div className="agent-name">
                                <span>Daniel</span>
                                <br />
                                <span>Johnson</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Daniel Johnson, a cornerstone of DreamHouse, offers clients unparalleled expertise and personalized guidance, ensuring their real estate journey is marked by success and satisfaction, with an unwavering commitment to excellence.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* 7th Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img src={require("../../Assets/images/about-2.jpg")} alt="" />
                            <div className="agent-name">
                                <span>Sarah</span>
                                <br />
                                <span>Miller</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Sarah Miller, an embodiment of professionalism and dedication within DreamHouse, offers clients unparalleled expertise and personalized guidance, ensuring their real estate journey is marked by success and satisfaction, with an unwavering commitment to excellence.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* 8th Agent Cards */}
                    <div className="agents-cards">
                        <div className="top-agent-section">
                            <img src={require("../../Assets/images/agent-5.jpg")} alt="" />
                            <div className="agent-name">
                                <span>Liam</span>
                                <br />
                                <span>Patel</span>
                            </div>
                        </div>
                        <div className="info-agent-section">
                            <h2 className='text-black font-bold italic'>About</h2>
                            <p>
                                Liam Patel,a dedicated professional at Dream House,brings extensive expertise and personalized service to ensure clients' real estate needs are met with excellence and satisfaction, with an unwavering commitment to excellence.
                            </p>
                            <h2 className='text-black font-bold italic'>Contact</h2>
                            <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Agent;



