import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../../App.css';
import './property.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocationDot,
    faChartArea,
} from "@fortawesome/free-solid-svg-icons";



function HomeProperty() {
    const { id } = useParams();
    const [agent, setAgent] = useState(null);
    const [realEstate, setRealEstate] = useState(null);



    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const realestatepropertyResponse = await axios.get(`http://localhost:3000/realestate/getestatebyid/${id}`);
                setRealEstate(realestatepropertyResponse.data);

                // Check if userAgent exists in the property data
                const agentData = realestatepropertyResponse.data.userAgent;
                if (agentData) {
                    const agentResponse = await axios.get(`http://localhost:3000/agents/getagentbyid/${agentData._id || agentData}`);
                    setAgent(agentResponse.data);
                }
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!realEstate) {
        return <div>Loading...</div>;
    }




    return (
        <div className="home-properties-container p-5">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div>
                    <h1 className="mb-4 text-4xl text-dark font-medium" style={{ textAlign: 'center' }}>HOME Properties</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                        neque ab quos, perspiciatis sit vel eveniet culpa corporis dolore
                        assumenda deserunt quidem optio, veniam consequatur! Aliquid eius
                        porro possimus cum. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ea, inventore modi facere ullam quis suscipit sint
                        fugiat eum, blanditiis necessitatibus velit dolorum laboriosam fugit
                        veniam voluptate est rem fuga quod!
                    </p>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-4">
                    {realEstate.images && realEstate.images[0] && (
                        <img
                            src={`http://localhost:3000/${realEstate.images[0].replace(/\\/g, "/")}`}
                            alt={realEstate.title}
                            className="h-96 mr-2 w-75 rounded-lg"
                        />
                    )}
                    <div className="d-flex flex-column justify-content-between h-96">
                        {realEstate.images && realEstate.images[1] && (
                            <img
                                src={`http://localhost:3000/${realEstate.images[1].replace(/\\/g, "/")}`}
                                alt={realEstate.title}
                                className="h-50 mb-2 rounded-lg"
                            />
                        )}
                        {realEstate.images && realEstate.images[2] && (
                            <img
                                src={`http://localhost:3000/${realEstate.images[2].replace(/\\/g, "/")}`}
                                alt={realEstate.title}
                                className="h-50 rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between my-5">
                <div className="w-50">
                    <div className="d-flex align-items-center mb-4">
                        <div className="w-3 h-3 rounded-circle bg-success mr-2"></div>
                        <span>FOR: {realEstate.kind}</span>
                    </div>
                    <h1 className="mb-4 text-2xl font-medium">{realEstate.name}</h1>
                    <p> {realEstate.description}</p>
                    <p className="text-2xl font-weight-bold py-4">${realEstate.amount}</p>
                    <p className="mb-4">
                        Est. $1,000/month{" "}
                        <span className="text-primary ml-2 cursor-pointer">
                            Get pre-approved
                        </span>
                    </p>
                    <hr className="w-100 border border-dark" />
                    <h2 className="text-xl font-weight-bold mt-5">About This Land</h2>
                    <p className="text-base text-dark w-100 my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                        neque ab quos, perspiciatis sit vel eveniet culpa corporis dolore
                        assumenda deserunt quidem optio, veniam consequatur! Aliquid eius
                        porro possimus cum. Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="d-flex justify-content-between">

                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center my-2">
                                <i className="text-success mr-2">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </i>
                                <p>Location: {realEstate.place}</p>
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <i className="text-success mr-2">
                                    <FontAwesomeIcon icon={faChartArea} />
                                </i>
                                <p>Area: {realEstate.area}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-50 d-flex justify-content-end">
                    {realEstate.images && realEstate.images[0] && (
                        <img
                            src={`http://localhost:3000/${realEstate.images[0].replace(/\\/g, "/")}`}
                            alt={realEstate.name}
                            className="h-100 rounded-lg w-60"
                        />
                    )}
                </div>
            </div>
            <hr className="w-100 border border-dark" />

            <div className="d-flex justify-content-between">
                {agent && (
                    <div className="w-50">
                        <h2 className="text-xl font-weight-bold mt-5">About The Agent</h2>
                        <p className="text-base text-dark w-100 my-4 w-3/4">
                            {agent.bio}
                        </p>
                        <h4 className="text-lg font-weight-bold">Listed by {agent.fullName} :</h4>
                        <div className="d-flex justify-content-between align-items-center my-4 p-3 border border-success rounded-lg w-50">
                            <img
                                src={`http://localhost:3000/${agent.image.replace(
                                    /\\/g,
                                    "/"
                                )}`}
                                alt={agent.fullName}
                                className="w-25 h-25 rounded-circle"
                            />
                            <div className="ml-4 w-75">
                                <p className="font-weight-bold">{agent.fullName}</p>
                                <p className="font-weight-bold">{agent.email}</p>
                                <Link to={`/agents/${agent._id}`}>
                                    <button className="btn btn-success mt-3">
                                        view more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/*=================================================== Form asking--------------------------------================================ */}
                <div className="chat-section w-50 mt-5">
                    {agent && (
                        <h2 className="text-xl font-weight-bold my-5">
                            Chat with agent <span className="chat-agent">{agent.fullName}</span>
                        </h2>
                    )}
                    <Link to="/auth">
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Chat
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
}

export default HomeProperty;
