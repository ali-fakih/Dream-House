import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPeopleGroup, faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { faFlag, faNoteSticky, faEnvelope } from '@fortawesome/free-regular-svg-icons';

function About() {
    return (
        <section className='About-Page'>
            <div className="bg-white container mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <h1 className="font-normal text-7xl text-center m-auto mb-10 leading-3 text-black dark:text-black hover:text-darkGreen cursor-pointer pb-2">About us</h1>
                <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 mb-20">
                    <div className="w-full lg:w-6/12">
                        <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-black leading-9">We are here to make great design accessible and delightful for everyone</h2>
                        <p className="font-normal text-base leading-6 text-black dark:text-black mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place, we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire.</p>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <img className="w-full" src={require("../../Assets/images/about.jpg")} alt="people discussing on board" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-20">
                    <div className="w-12 h-12 bg-lightGreen rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faFlag} />
                    </div>
                    <div className="w-12 h-12 bg-lightGreen rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                    <div className="w-12 h-12 bg-lightGreen rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    {/* <hr className="my-10 lg:mx-auto w-2/3 bg-red-500 " /> */}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-darkGreen mt-6">Founded</p>
                        <p className="font-normal text-base leading-6 text-black dark:text-black mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-darkGreen mt-6">50M monthly enrichments</p>
                        <p className="font-normal text-base leading-6 text-black dark:text-black mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-darkGreen mt-6">400k User</p>
                        <p className="font-normal text-base leading-6 text-black dark:text-black mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                

                <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                    <div className="w-full lg:w-6/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-black dark:text-darkGreen">Our Mission</h2>
                        <p className="font-normal text-base leading-6 text-black dark:text-black mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        <p className="font-normal text-base leading-6 text-black dark:text-black w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                            <div className="flex p-4 shadow-md">
                                <div className="mr-6">
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                </div>
                                <div className="">
                                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-darkGreen dark:text-darkGreen">Team</p>
                                    <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="flex p-4 shadow-md">
                                <div className="mr-6">
                                    <FontAwesomeIcon icon={faChessBoard} />
                                </div>
                                <div className="">
                                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-darkGreen dark:text-darkGreen">Board</p>
                                    <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="flex p-4 shadow-md">
                                <div className="mr-6">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="">
                                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-darkGreen dark:text-darkGreen">Press</p>
                                    <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
