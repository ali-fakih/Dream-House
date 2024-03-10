import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./agent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Agent() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/agent/getallagents')
            .then(response => {
                setAgents(response.data);
            })
            .catch(error => {
                console.error('Error fetching agents:', error);
            });
    }, []);

    return (
        <section className='Agent-Page'>
            <div className="intro-agent flex items-center justify-center h-full">
                <div className="title-wrap mb-8">
                    <h1 className="title-a text-center text-3xl font-bold text-gray-800">Our Agents</h1>
                </div>
            </div>

            <div className="landing-agent">
                <div className="container-agent">
                    {agents.map(agent => (
                        <div className="agents-cards" key={agent._id}>
                            <div className="top-agent-section">
                            
                                <img src={`http://localhost:3000/uploads/${agent.image}`} alt={agent.fullName} />
                                <div className="agent-name">
                                    <span>{agent.fullName}</span><br />
                                </div>
                            </div>
                            <div className="info-agent-section">
                                <h2 className='text-black font-bold italic'>About</h2>
                                <p>{agent.bio}</p>
                                <h2 className='text-black font-bold italic'>Contact</h2>
                                <div className="contact-info mt-4">
                                    <h4 className="font-bold">Email:</h4>
                                    <span className="block">{agent.email}</span>
                                    <h4 className="font-bold mt-2">Phone Number:</h4>
                                    <span className="block">{agent.phone}</span>
                                    <h4 className="font-bold mt-2">Address:</h4>
                                    <span className="block">{agent.address}</span>
                                </div>
                                <div className="social-agent-icons">
                                <Link to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Agent;
