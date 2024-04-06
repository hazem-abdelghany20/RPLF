import React, { useState } from 'react';
import Card from './Card';

const CardList = ({ block }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    var cardsPerPage;
    const width = document.documentElement.clientWidth
    console.log(width)
    if (width > 1800) {
        cardsPerPage = 5
    } else {
        if (width > 1500) {
            cardsPerPage = 4
        } else {
            if (width > 1250) {
                cardsPerPage = 3
            } else {
                if (width > 650) {
                    cardsPerPage = 2
                } else {
                    cardsPerPage = 1
                }
            }
        }
    }
    const cards = block.content_array;

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div>
            <div>
                <b><h2 className='text-3xl pt-10'>{block.headline}</h2></b>
                <div className="description">
                    <span className="w-11/12">{block.paragraph}</span>
                </div>
            </div>
            
            <div className="flex items-center pt-16 pb-16 pl-[20px]">
            <button className="absolute top-50 z-10 left-[0px] " onClick={handlePrev}>❮</button>
                <div className="flex gap-10 justify-content transition-transform duration-500 ease-in-out ml-24 xs:ml-0  xs:w-full " style={{ transform: `translateX(-${currentIndex * 100 / cardsPerPage}%)` }}>
                    {[...cards, ...cards, ...cards].slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                        <div key={index} className="xs:w-full">
                            <Card text={card.content} />
                        </div>
                    ))}
                </div>
                <button className="absolute left-[93%] mr-14 z-10" onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default CardList;
