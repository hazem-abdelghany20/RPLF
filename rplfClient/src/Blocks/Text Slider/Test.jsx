import React from "react";
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
        <button onClick={onClick} className="absolute top-[20%] bg-[transparent] left-[-30px] lg:left-[-100px] z-10 lg:text-8xl font-thin p-0 ">
            <img src="left-arrow (1).svg" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
        </button>
    )
}

const Test = () => {
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
            <PrevArrow/>
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
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const cards = [
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
    return (
        <div className="ml-[50px] w-[95%] mb-20 mt-20">
            <Slider {...settings}>
                {
                    cards.map((card, index) => (
                        <Card text={card.content} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default Test