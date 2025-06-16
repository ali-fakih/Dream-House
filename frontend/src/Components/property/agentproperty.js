import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../config/api';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './agentproperty.css'; // Import your custom CSS file

const AgentPage = () => {
    const { agentId } = useParams();
    const [agent, setAgent] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Home buying',
            content: 'Finding the ideal agent is like finding a unicorn in a haystack - magical and rare!'
        },
        {
            title: 'Home selling',
            content: "Our agents are not just real estate experts; they are superheroes in disguise!"
        },
        {
            title: 'Property valuation',
            content: 'Trust is our middle name! Our agents are more reliable than your morning coffee.'
        },
        {
            title: 'Market analysis',
            content: 'Navigate the ever-changing market with confidence, backed by our expert analysis.'
        },
        {
            title: 'Real estate consultations',
            content: 'Get personalized guidance tailored to your needs from our seasoned experts.'
        }
    ];

    useEffect(() => {
        axios.get(`${API_URL}/agents/getagentbyid/${agentId}`)
            .then(response => {
                setAgent(response.data);
            })
            .catch(error => {
                console.error('Error fetching agent:', error);
            });
    }, [agentId]);

    const displayBio = (bio) => {
        return bio.split(' ').slice(0, 6).join(' ') + '...';
    };

    return (
        <div className="agent-page">
            <Container>
                {agent ? (
                    <Row>
                        <h1 className='title-agent-page'>Agents Details</h1>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>{agent.fullName}</Card.Title>
                                    <Card.Text style={{ fontWeight: 'bold', fontSize: '18px' }}>
                                        {displayBio(agent.bio)}
                                    </Card.Text>
                                    <Link to="/auth">
                                        <Button variant="primary" className="custom-button">Contact</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            {/* Place the section here */}
                            <section className="py-12 w-full mx-auto text-white bg-gray-100">
                                <div className="container mx-auto">
                                    <div className="flex flex-col items-center">
                                        <h3 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-darkGreen rounded-full px-4 py-2 inline-block">Services</h3>
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
                                                        className={`overflow-hidden w-full transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                                        role="tabpanel"
                                                        aria-labelledby={`headingOne_${index}`}
                                                    >
                                                        <div className="p-6 bg-white rounded-b-lg text-gray-800">
                                                            <p className="text-lg md:text-xl text-center w-full mb-1 text-darkGreen">{item.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <div className="agent-details">
                                <div className="agent-image">
                                    <img src={`${API_URL}/${agent.image.replace(
                                        /\\/g,
                                        `/"
                                    )}`}
                                        alt={agent.fullName}
                                    />
                                </div>
                                <h2>About <span className='agent-name'>{agent.fullName}</span></h2>
                                <p>
                                    {agent.bio}
                                </p>
                                <h3>Contact Information</h3>
                                <p><span className='contact-span span-1'>Email:</span> {agent.email}</p><br></br>
                                <p><span className='contact-span span-2'>Phone:</span> {agent.phone}</p><br></br>
                                <p><span className='contact-span span-3'>Office Address:</span> {agent.address}</p>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <div>
                        <div className="honeycomb">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AgentPage;
