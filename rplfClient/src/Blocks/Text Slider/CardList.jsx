import React, { useState } from 'react';
import './CardList.css'; // Import your CSS file for styling
import Card from './Card';

const CardList = ({block}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;
    const cards = block.content_array

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div>
            <div>
            <h2>{block.headline}</h2>
                <div className="description">
                    <span style={{ width: "55%" }} >{block.paragraph}</span>
                </div>
            </div>
            <div className="carousel-container">
                <button style={{ backgroundColor: "transparent" }} onClick={handlePrev}>❮</button>
                <div className="carousel">
                    {[...cards, ...cards, ...cards].slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                        <div className="card" key={index}>
                            <Card text={card.content} />
                        </div>
                    ))}
                </div>

                <button style={{ backgroundColor: "transparent" }} onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default CardList;
