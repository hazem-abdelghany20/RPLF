import React, { useState } from 'react';
import './CardList.css'; // Import your CSS file for styling
import Card from './Card';

const CardList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            title: "Firm News 1",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 2",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 3",
            text: "Another Year - Still 'Most Feared'",
        },
        {
            title: "Firm News 4",
            text: "Another Year - Still 'Most Feared'",
        },
    ];

    const cardsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div>
            <div>
            <h2>{"Areas Of Practice"}</h2>
                <div className="description">
                    <span style={{ width: "55%" }} >{"orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim,condimentum nec ultricies."}</span>
                </div>
            </div>
            <div className="carousel-container">
                <button style={{ backgroundColor: "transparent" }} onClick={handlePrev}>❮</button>
                <div className="carousel">
                    {[...cards, ...cards, ...cards].slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                        <div className="card" key={index}>
                            <Card title={card.title} text={card.text} />
                        </div>
                    ))}
                </div>

                <button style={{ backgroundColor: "transparent" }} onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default CardList;
