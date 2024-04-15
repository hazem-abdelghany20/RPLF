import { Link } from "react-router-dom";
import React, { useState } from 'react';
import NavBar from "../NavBar";
import CollapseNavbar from "../CollapseNavbar";
import Accordion from "../NavAccordion";

const Header = ({ docs }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around items-center bg-[#b48034]">
                <div className="text-sm md:text-md">
                    <p>Bravery, courage, fear and love in a time of war</p>
                </div>
                <div>
                    <button className="bg-[#e1a54f] hover:bg-[#b48034] border-2 text-sm md:text-md border-[#e1a54f] rounded-none flex flex-row justify-center my-1 py-1 px-4"  onClick={() => {setIsModalOpen(true);}}>
                        
                        Book<span className="md:inline-block hidden ml-1">an appointment</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-around items-center bg-[#0b2c35] h-[150px] md:gap-20">
                <div className="flex flex-row items-center justify-around mr-5">
                {/* <Accordion docs={docs}/> */}
                    <Link to={"/"}>
                        <img src="logo.png" className="ml-3 w-[280px] h-[70px] md:w-[400px] md:h-[100px]" />
                    </Link>
                <CollapseNavbar docs={docs}/>
                </div>
                

                <div className="hidden lg:flex flex-row text-sm md:text-md">
                    <div className="flex flex-col w-[100px] md:flex-row md:w-[200px]">
                        <div className="flex flex-col items-center justify-around">
                            <img src="call.png" className="size-[40px] md:size-[75px]" />
                        </div>
                        <div className="flex flex-col text-left justify-center">
                            <span>Call Us:</span>
                            <span>01000000000</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-[100px] md:flex-row md:w-[200px]">
                        <div className="flex flex-col items-center justify-around">
                            <img src="mail-icon.svg" className="size-[40px] md:size-[75px]" />
                        </div>
                        <div className="flex flex-col text-left justify-center">
                            <span>Email Us:</span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar docs={docs} />
            {isModalOpen && (
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-[#063948] p-5 md:px-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-lg w-full mx-auto">
                    <div className='text-white pb-2 rounded-lg shadow-lg max-w-md w-full'>
                        <span className="block text-right text-lg cursor-pointer" onClick={closeModal}>&times;</span>
                        <h2 className="text-3xl font-semibold mb-1">Book with us!</h2>
                        <div className="text-md mb-3 ">We'll get back to you in no time!</div>
                    </div>
                    <hr className="border-white mb-5" />
                    <form className='text-white'>
                        <div className="mb-4 flex flex-col md:flex-row md:gap-4 justify-between items-center">
                            <label className="block mb-0">Full Name:</label>
                            <input type="text" name="name" className="w-3/4 bg-[#063948] border-white p-2 py-1 mt-1 w-full border rounded-md"/>
                        </div>
                        <div className="mb-4 flex flex-col md:flex-row md:gap-4 justify-between items-center">
                            <label className="block">Email:</label>
                            <input type="email" name="email" className="w-3/4 bg-[#063948] border-white p-2 py-1 mt-1 w-full border rounded-md"/>
                        </div>
                        <div className="mb-4 flex flex-col md:flex-row md:gap-4 justify-between items-center">
                            <label className="block">Phone:</label>
                            <input type="tel" name="phone" className="w-3/4 bg-[#063948] border-white p-2 py-1 mt-1 w-full border rounded-md"/>
                        </div>
                        <div className="mb-4 flex flex-col md:flex-row md:gap-4 justify-between items-center">
                            <label className="block">Description:</label>
                            <textarea name="description" className="w-3/4 bg-[#063948] border-white mt-1 p-2 py-1 mt-1 w-full border rounded-md"></textarea>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 mt-4 rounded text-white text-md text-semibold bg-[#B48034] border-2 border-[#B48034] hover:bg-transparent transition-colors">Submit</button>
                    </form>
                </div>
            </div>
        )}
        </div>
        
    );
};

export default Header;
