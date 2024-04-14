import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css.css'

const NextArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="absolute top-[35%] md:top-[20%] bg-[transparent] left-[85%] md:left-[80%] lg:left-[90%] z-10 overflow-hidden w-[150px] md:h-[150px] p-0">
            <img src="right-arrow.svg" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
        </button>
    )
}

const PrevArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="absolute top-[35%] md:top-[20%] bg-[transparent] left-[-30px] md:left-[-90px] z-10 lg:text-8xl font-thin p-0 ">
            <img src="left-arrow (1).svg" className='w-[75px] h-[75px] md:w-[150px] md:h-[150px]' alt="Arrow Right Icon" />
        </button>
    )
}


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 5;

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
                    slidesToShow: images.length > 6 ? 6 : images.length,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
        <div className="mx-auto mt-14 mb-20 w-full overflow-hidden md:pl-[50px]">
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <div key={index} className='border-8 border-solid h-[240px] border-[#43351e] test'>
                            <div className="flex flex-col gap-0 h-308">
                                <div className={"text-left h-[200px]"}>
                                    <img src={`http://localhost:3000/block-media/${image.image.filename}`} className="w-[200px] h-[225px] lg:w-80 lg:h-56 " alt="Slider Image" />
                                </div>
                            </div>

                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ImageSlider;
