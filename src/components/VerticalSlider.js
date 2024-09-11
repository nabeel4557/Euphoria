import React from 'react';
import Slider from 'react-slick';
import Men from '../men.json';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import './VerticalSlider.css'
import styled from 'styled-components';

const VerticalSlider = () => {
  const { id } = useParams();
  const product = Men.find((item) => item.id === parseInt(id));

  const CustomPrevArrow = ({ onClick }) => (
    <div className="arrow arrow-up" onClick={onClick}>
      <IoIosArrowDropup size={30} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="arrow arrow-down" onClick={onClick}>
      <IoIosArrowDropdown size={30} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <VerticalSlideDiv style={{ width: '300px', height: '500px', position: 'relative' }}>
      <Slider {...settings}>
        {product.gallery.map((img) => (
          <ImageDiv key={img.id}>
            <Img src={img.image} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageDiv>
        ))}
      </Slider>
    </VerticalSlideDiv>
  );
};
const VerticalSlideDiv = styled.div`
    width: 100px;
    height: 100px;
`
const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    /* display: block; */
    width: 75px !important;
    height: 75px !important;
`
const Img = styled.img`
    width: 100%;
    background-repeat:no-repeat;
    margin: 0 auto;
    background-size:cover;
`


export default VerticalSlider;
