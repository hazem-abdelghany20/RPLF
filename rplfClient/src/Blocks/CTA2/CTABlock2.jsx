import React, { useState } from 'react';
// Assuming `navigate` is defined or imported elsewhere in your real code

const CTA2 = ({ block }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const goTo = (type, page, url, newTab) => {
        if (type === "page") {
            if (page.title === "Home") {
                navigate(`/`);
            } else {
                navigate(`/${page.title}`);
            }
        } else if (type === "modal") {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-row bg-[#e1a54f] xsm:w-[70%] lg:w-[27%] h-[25vh] sm:h-[22vh] md:h-[20vh] lg:h-[25vh] mt-[25px] px-8 mx-auto lg:mx-1">
            <div className="header text-left">
                <h3>{block[0].headline}</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px] text-left mx-auto">
                <p>{block[0].paragraph}</p>
                <div className="flex flex-row justify-around w-full mx-auto">
                    {block[0].buttons.map((button) => {
                        return (
                            <button
                                key={button.label} // Added for React keys
                                className="w-full px-4 py-2 rounded-none text-white font-medium bg-[#55330B] border-2 border-[#B48034] hover:bg-transparent transition-colors"
                                onClick={() => {setIsModalOpen(true); goTo(button.type, button.page, button.url, button.newTab);}}
                                
                            >
                                {button.label}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Modal Implementation with Tailwind */}
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

export default CTA2;
