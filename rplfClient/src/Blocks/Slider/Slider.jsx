import React, { useState } from 'react';
import './css.css'; // Import your CSS file for styling


const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(images)
    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <button className="prev" onClick={handlePrev}>❮</button>
            <div className="carousel">
                {[...images, ...images, ...images].slice(currentIndex, currentIndex + cardsPerPage).map((image, index) => (
                    <div className='frame'>
                        <img src="call.png" width={"350px"} height={"250px"} />
                    </div>
                ))}
            </div>

            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default Slider;
