import React, { useState } from 'react';
import './CardList.css'; // Import your CSS file for styling
import Card from './Card';

const CardList = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="carousel-container">
            <div>
                <h2>WHAT’S NEW AT QUINN EMANUEL?</h2>
            </div>
            <div className="carousel">
                {[...cards, ...cards, ...cards].slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                    <div className="card" key={index}>
                        <Card title={card.title} text={card.text} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default CardList;
