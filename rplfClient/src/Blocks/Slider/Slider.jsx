import React, { useState } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 5;

    const handleNext = () => {
        const newIndex = currentIndex + 1
        if (newIndex < cards.length + 1) {
            console.log("here " + newIndex)
            setCurrentIndex(newIndex)
        } else {
            console.log("here2 " + newIndex)
            setCurrentIndex(0)
        }
        //setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="flex items-center pt-16 pb-16 pl-[20px]">
            <button className="absolute bg-[transparent] left-[-30px] top-50 z-10 lg:left-[-150px] lg:text-8xl  font-thin " onClick={handlePrev}>
                <img src="left-arrow.png" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]'  alt="Arrow Right Icon" />
            </button>

            <div className="flex gap-10 justify-content transition-transform duration-500 ease-in-out md:ml-11 xs:w-full overflow-hidden lg:ml-16">
                {[...images, ...images, ...images].slice(currentIndex, currentIndex + cardsPerPage).map((image, index) => (
                    <div key={index} className='border-8 border-solid h-[240px] border-[#43351e] w-full'>
                        <div className="flex flex-col gap-0 h-308 xs:w-full">
                            <div className={"text-left h-[200px] w-80"}>
                                <img src="call.png" className="w-[89%] xsm:w-full h-[225px] lg:w-80 lg:h-56 " alt="Slider Image" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <button className="absolute bg-[transparent] left-[85%] md:left-[80%] lg:left-[88%] md:mr-4 z-10 overflow-hidden p-0 " onClick={handleNext}>
                <img src="right-arrow.png" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
            </button>
        </div>
    );
};

export default Slider;
