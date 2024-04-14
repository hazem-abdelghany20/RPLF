import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const NextArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="absolute top-[20%] bg-[transparent] left-[85%] md:left-[80%] lg:left-[90%] z-10 overflow-hidden w-[150px] md:h-[150px] p-0">
            <img src="right-arrow.svg" className='w-[200px] h-[200px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
        </button>
    )
}

const PrevArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="absolute top-[20%] bg-[transparent] left-[-30px] md:left-[-90px] z-10 lg:text-8xl font-thin p-0 ">
            <img src="left-arrow (1).svg" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
        </button>
    )
}


const CardList = ({ block }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:
            <NextArrow />
        ,
        prevArrow:
            <PrevArrow />
        ,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 2600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var cards = block.content_array;
    
    var cardsPerPage = cards.length + 1;
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
        <div>
            <div>
                <b><h2 className='text-3xl pt-10'>{block.headline}</h2></b>
                <div className="description">
                    <span className="w-11/12">{block.paragraph}</span>
                </div>
            </div>

            <div className="mx-auto mt-14 mb-20 w-full overflow-hidden pl-[50px]">
                <Slider {...settings}>
                    {
                        cards.map((card, index) => (
                            <Card text={card.content} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default CardList;
