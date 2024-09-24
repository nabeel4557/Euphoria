import React,{useRef} from 'react';
// import Slider from 'react-slick';
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

  
  
  return (
    <VerticalSlideDiv style={{  width:'full',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}  >
      
        {product.gallery.map((img) => (
          <ImageDiv key={img.id} style={{ marginTop: '30px'}} >
            <Img src={img.image} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover',  }} />
          </ImageDiv>
        ))}
      
      <Arrows>
        <PrevArrowDiv>
            <PrevArrow onClick={() => sliderRef.current.slickPrev()}/>
        </PrevArrowDiv>
        <NextArrowDiv>
          <NextArrow onClick={() => sliderRef.current.slickNext()}/>
        </NextArrowDiv>
      </Arrows>
    </VerticalSlideDiv>
  );
};


const VerticalSlideDiv = styled.div`
    /* width: 25%; */
    /* position: relative; */

   
   
  

`
const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    width: 75px !important;
    height: 75px !important;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 3px;
`
const Img = styled.img`
    width: 100%;
    background-repeat:no-repeat;
    margin: 0 auto;
    background-size:cover;
    border-radius: 10px;
`
const SliderIcon = styled.div`
  /* position: absolute; */
`
const Arrows = styled.div`
  margin-top: 30px;

`
const PrevArrowDiv = styled.div`
  background: #F6F6F6;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  margin-bottom:15px;

  &:hover {
    background: #3C4242;
    color: #fff;
  }
  
`
const NextArrowDiv = styled.div`
  background: #F6F6F6;
  border-radius: 50%;
  width: 21.17px;
  height: 21.17px;

  &:hover {
    background: #3C4242;
    color: #fff;
  }
`


export default VerticalSlider;

