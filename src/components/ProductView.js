import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Men from '../men.json';
import data from "../data.json";
import women from '../women.json'

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import styled from 'styled-components';
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
// import VerticalSlider from './VerticalSlider';
import ProductDiscribtion from './ProductDiscribtion';
import SimilarProducts from './SimilarProducts';


function ProductView() {
  const { id } = useParams();
  const product = Men.find((item) => item.id === parseInt(id));


  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);

  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  return (
    <Product className='product '>
      <ProductContainer className='wrapper'>

        <ProductLeft >
          <VerticalSliderDiv >
            {/* <VerticalSlider /> */}
          </VerticalSliderDiv>
          <ImageContainer>
            <Image src={product.image} alt={product.name} />
          </ImageContainer>
        </ProductLeft>

        <ProductRight >
          <ShopDetails>
            <Choice>Shop<IoIosArrowForward /></Choice>
            <Choice>Women<IoIosArrowForward /></Choice>
            <Choice>Top</Choice>
          </ShopDetails>
          <Details className='details'>
            <Heading>{product.name2}</Heading>
            <Rating className='rating'>
              <Star>
                <StarIconFull color={"#EDD146"} size={22} />
                <StarIconFull color={"#EDD146"} size={22} />
                <StarIconFull color={"#EDD146"} size={22} />
                <StarIconHalf color={"#EDD146"} size={22} />
                <StarIconoutline color={"#EDD146"} size={22} />
              </Star>
              <RatingNamberDiv>
                  <RatingNumber>3.5</RatingNumber>
                </RatingNamberDiv>
              <ComentDiv>
                <CommentIcon><BiCommentDetail size={22} color={"#807D7E;"} /></CommentIcon>
                <Comment>120 comment</Comment>
              </ComentDiv>
            </Rating>
            <SizeDiv>
              <Size>
                <SizeText>Select Size</SizeText>
                <SizeGuide>Size Guide <FaArrowRightLong /></SizeGuide>
              </Size>

              <SelectSize>
                {product.size.map((size) => (
                  <SizeBox key={size} onClick={() => handleSizeClick(size)} isSelected={selectedSize === size}>
                    {size}
                  </SizeBox>
                ))}

              </SelectSize>
            </SizeDiv>
            <ColorAvailable>
              <ColorHeading>Colours Available </ColorHeading>
              <ColorDiv>
                <Color style={{ "background-color": '#3C4242' }} isSelected={selectedColor === '#3C4242'} onClick={() => handleColorClick('#3C4242')}></Color>
                <Color style={{ "background-color": '#EDD146' }} isSelected={selectedColor === '#EDD146'} onClick={() => handleColorClick('#EDD146')}></Color>
                <Color style={{ "background-color": '#EB84B0' }} isSelected={selectedColor === '#EB84B0'} onClick={() => handleColorClick('#EB84B0')}></Color>
                <Color style={{ "background-color": '#9C1F35' }} isSelected={selectedColor === '#9C1F35'} onClick={() => handleColorClick('#9C1F35')}></Color>
              </ColorDiv>
            </ColorAvailable>
            <PriceDetails>
              <Button> <MdOutlineShoppingCart /> Add to cart</Button>
              <Price> {product.price}</Price>
            </PriceDetails>
            
          </Details>
          <DeliveryDetails>
              <LeftSide className='left'>
                <Delivery><DeliveryIcon><MdOutlinePayment /></DeliveryIcon>Secure payment</Delivery>
                <Delivery><DeliveryIcon><MdOutlineLocalShipping /></DeliveryIcon>Free shipping</Delivery>
              </LeftSide>
              <RightSide className='right'>
                <Delivery><DeliveryIcon><IoShirtOutline /></DeliveryIcon>Size & Fit</Delivery>
                <Delivery><DeliveryIcon><img src='/assets/Free-Shipping&Returns.svg' alt='return' /></DeliveryIcon>Free Shipping & Returns</Delivery>
              </RightSide>
            </DeliveryDetails>
        </ProductRight>
      </ProductContainer>
      <div>
        <ProductDiscribtion />
      </div>

      <div>
        <SimilarProducts />
      </div>
    </Product>

  );
}

const Product = styled.div`
  width: 100%;
`;
const ProductContainer = styled.div`
    display: flex;
    padding-bottom:20px;
    gap:50px;
    height: 769px;
    @media (max-width: 1080px) {
        height: 700px;
    
    }
    @media (max-width: 980px) {
        display: block;
        height: 100%;
    
    }

`
const ProductLeft = styled.div`
  display: flex;
  width:65%;
  gap:30px ;

  @media (max-width: 1080px) {
        
    
  }
`;
const VerticalSliderDiv = styled.div`
  width: 10%;
  height: 300px;
  display: flex;
  align-items: center;
  margin-top: 150px;

  @media (max-width: 1280px) {
    margin-top:100px
  }
`

const ImageContainer = styled.div`
  width: 535px;

  @media (max-width: 1280px) {
    width: 450px;
  }
  @media (max-width: 1080px) {
    width: 380px;
  }
  
`;
const Image = styled.img`
  width: 100% !important;
  height: 100% !important;
`;
const ProductRight = styled.div`
  width: 100%;
  @media (max-width: 1080px) {
        height: 700px;
    
  }
`;
const ShopDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom:30px
 `
const Choice = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  color: #807D7E;

  @media (max-width: 1280px) {
    font-size: 15px;
  }
 `
const Details = styled.div`

`
const Heading = styled.h1`
  font-weight: 700;
  font-size: 30px;

  @media (max-width: 1280px) {
    font-size: 25px;
  }
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  /* gap: 50px; */
  margin-top: 30px
`;
const Star = styled.span`
  display: flex;
  align-items: center;
  gap:10px;

  @media (max-width: 1280px) {
    
  }
`
const StarIconFull = styled(IoStar)`
  color: #EDD146;
  size: 22px;
  `
  const StarIconHalf = styled(IoStarHalf)`
  color: #EDD146;
  size: 22px;
  `
  const StarIconoutline = styled(IoStarOutline)`
  color: #EDD146;
  size: 22px;
  `


const RatingNamberDiv = styled.div`
  margin-left:10px;
`
const RatingNumber = styled.span`
  color: #807D7E;

`
const ComentDiv = styled.div`
  display: flex;
  align-items:center;
  gap: 7px;
  margin-left: 40px;
`
const Comment = styled.span`
  font-size: 17px;
  color: #807D7E;
`
const CommentIcon = styled.span`
  color: #807D7E;
`
const SizeDiv = styled.div`
  margin-top:25px;
`
const Size = styled.div`
  display: flex;
  align-items: center;
  gap: 22px
`;
const SizeText = styled.span`
  font-weight:600;
  font-size: 18px
  
`
const SizeGuide = styled.span`
  font-size : 18px;
  color: #807D7E;
  display: flex;
  align-items: center;
  gap: 13px;
  ;
`
const SelectSize = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 22px;

`;
const SizeBox = styled.span`
  display: flex;
  align-items: center;
  border: 2px solid #BEBCBD;
  width: 42px;
  height:42px;
  justify-content: center;
  border-radius: 10px;
  color: #3C4242;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? ' #3C4242' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#3C4242')};

  @media (max-width: 1280px) {
    width: 35px;
    height: 35px;
    font-size: 13px;
  }
  
`
const ColorAvailable = styled.div`
  margin-top: 30px;
`
const ColorHeading = styled.h5`
font-weight:bold;
font-size: 18px;
`
const ColorDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${({ isSelected }) => (isSelected ? '2px solid #000' : 'none')}; 
  cursor: pointer;
  padding: ${({ isSelected }) => (isSelected ? '2px' : '0')};
  background-color: ${({ color }) => color}; 
  box-sizing: border-box;

  @media (max-width: 1280px) {
    width: 20px;
    height: 20px;
  }
`
const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  border-bottom:1px solid #BEBCBD;
  padding-bottom:40px
`
const Button = styled.button`
 border-radius: 8px;
 padding: 12px 40px 12px 40px;
 background-color: #8A33FD;
 color: #fff;
 display: flex;
 align-items: center;
 gap: 10px;
 font-size:18px;

 @media (max-width: 1280px) {
    padding: 12px 30px 12px 30px;
    font-size: 14px;
  }
`
const Price = styled.div`
  border: 1px solid #3C4242;
  padding: 12px 40px 12px 40px;
  border-radius: 8px;
  font-weight:700;
  font-size:18px;

  @media (max-width: 1280px) {
    font-size: 14px;
    padding: 12px 30px 12px 30px;
  }
`
const DeliveryDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 1080px) {
        margin-top: 0px;
    
  }

`
const LeftSide = styled.div`
  width: 50%;
`
const Delivery = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: #3C4242;
  font-weight:500;
  margin-top: 20px;

  @media (max-width: 1280px) {
    font-size: 14px;
  }
  
`
const RightSide = styled.div`
`
const DeliveryIcon = styled.span`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  font-size: 18px;
  color: #3C4242;
  background-color:#F6F6F6;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 30px;
    height: 30px;
  }
 `


export default ProductView;




  // width: 520px;
  // height: 785px;