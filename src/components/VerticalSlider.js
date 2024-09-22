import React,{useRef} from 'react';
import Slider from 'react-slick';
import Men from '../men.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
// import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import styled from 'styled-components';

import PrevArrow from '../Arrows/VerticalArrows/PrevArrow';
import NextArrow from '../Arrows/VerticalArrows/NextArrow';


const VerticalSlider = () => {
  const sliderRef = useRef(null);
  const { id } = useParams();
  const product = Men.find((item) => item.id === parseInt(id));

  // const CustomPrevArrow = ({ onClick }) => (
  //   <div className="arrow arrow-up" onClick={onClick} >
  //     <IoIosArrowDropup size={20} />
  //   </div>
  // );

  // const CustomNextArrow = ({ onClick }) => (
  //   <div className="arrow arrow-down" onClick={onClick} >
  //     <IoIosArrowDropdown size={20} />

  //   </div>
  // );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />
  };
  
  return (
    <VerticalSlideDiv style={{ padding:'20px', width:'full',background:'#F6F6F6',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}  >
      <Slider ref={sliderRef} {...settings} style={{ paddingLeft:"80px"}}>
        {product.gallery.map((img) => (
          <ImageDiv key={img.id} >
            <Img src={img.image} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover',  }} />
          </ImageDiv>
        ))}
      </Slider>
      <PrevArrow onClick={() => sliderRef.current.slickPrev()}/>
      <NextArrow onClick={() => sliderRef.current.slickNext()}/>
    </VerticalSlideDiv>
  );
};


const VerticalSlideDiv = styled.div`
    width: 25%;

`
const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
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

