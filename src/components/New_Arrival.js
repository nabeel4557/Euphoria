import React from 'react';
import data from '../data.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './New_Arrival.css';

function New_Arrival() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    autoplay: false,
  };

  return (
    <div className='wrapper'>
      <div className='flex items-center gap-x-4 mb-[50px]'>
        <div className='bg-[#8A33FD] w-[6px] h-[30px]  '></div>
        <h3 className='text-[28px] font-bold'>New Arrival</h3>
      </div>
      <div className='p-3'>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default New_Arrival;

