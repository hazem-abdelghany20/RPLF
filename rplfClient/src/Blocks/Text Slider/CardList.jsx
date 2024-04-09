import React, { useState } from 'react';
import Card from './Card';

const CardList = ({ block }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    var cardsPerPage = 5;

    var cards = block.content_array;
    cards = [
        {
            title: "Firm News 1",
            content: "Another Year - Still 'Most Feared 1",
        },
        {
            title: "Firm News 2",
            content: "Another Year - Still 'Most Feared' 2",
        },
        {
            title: "Firm News 3",
            content: "Another Year - Still 'Most Feared' 3",
        },
        {
            title: "Firm News 4",
            content: "Another Year - Still 'Most Feared' 4",
        },
    ];
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
                <button className="absolute bg-[transparent] top-50 z-10 lg:left-[-100px] lg:text-8xl font-thin " onClick={handlePrev}>〈</button>
                <div className="flex gap-10 justify-content transition-transform duration-500 ease-in-out ml-2 md:ml-11 xs:w-full overflow-hidden lg:ml-[-300px]" >
                    {[cards[cards.length-1], ...cards,...cards].slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
                        <div key={index} className="w-full">
                            <Card text={card.content} />
                        </div>
                    ))}
                </div>
                <button className="absolute bg-[transparent] left-[85%] md:left-[85%] mr-14 z-10 lg:text-8xl" onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default CardList;
