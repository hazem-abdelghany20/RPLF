import React, { useState } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex justify-center items-center">
            <button className="absolute top-50 z-10" onClick={handlePrev}>❮</button>
            <div className="flex gap-10 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100 / cardsPerPage}%)` }}>
                {[...images, ...images, ...images].slice(currentIndex, currentIndex + cardsPerPage).map((image, index) => (
                    <div key={index} className='frame'>
                        <img src="call.png" className="w-64 h-48" alt="Slider Image" />
                    </div>
                ))}
            </div>
            <button className="absolute left-[93%] xs:left-[93%] mr-14 z-10" onClick={handleNext}>❯</button>
        </div>
    );
};

export default Slider;
