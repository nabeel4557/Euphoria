import React, { useRef } from "react";
import data from "../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./New_Arrival.css";
import { Link } from 'react-router-dom'


import NextArrow from "../Arrows/NextArrow";
import PrevArrow from "../Arrows/PrevArrow";

function New_Arrival() {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        autoplay: false,
    };

    return (
        <div className="wrapper">
            <div className="flex items-center gap-x-4 mb-[50px]">
                <div className="bg-[#8A33FD] w-[6px] h-[30px]"></div>
                <h3 className="text-[28px] font-bold">New Arrival</h3>
            </div>
            <div className="slider-container relative flex items-center justify-center">
                <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                <div className="slider-wrapper mx-4 w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item) => (
                            <Link to={`/products/${item.id}`}>
                                <div key={item.id}>
                                    <div className="image-container">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <h2 className="ml-[25px] font-bold">
                                        {item.name}
                                    </h2>
                                </div>
                            </Link>
                            
                        ))}
                    </Slider>
                </div>
                <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>
    );
}

export default New_Arrival;