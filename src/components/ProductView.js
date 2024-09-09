import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Men from '../men.json';
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import styled from 'styled-components';
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

function ProductView() {
    const { id } = useParams();
    const product = Men.find((item) => item.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
      setSelectedSize(size);
  };

    return (
        <Product className='product'>
            <ProductLeft className='left'>
                <ImageContainer className='image-container'>
                    <Image src={product.image} alt={product.name} />
                </ImageContainer>
            </ProductLeft>
            <ProductRight className='right'>
                <Details className='details'>
                    <Heading>{product.name2}</Heading>
                    <Rating className='rating'>
                        <Star>
                            <IoStar color={"#EDD146"} size={22}/>
                            <IoStar color={"#EDD146"} size={22} />
                            <IoStar color={"#EDD146"} size={22}/>
                            <IoStarHalf color={"#EDD146"} size={22} />
                            <IoStarOutline color={"#EDD146"} size={22}/>
                            <RatingNamberDiv>
                              <RatingNumber>3.5</RatingNumber>
                            </RatingNamberDiv>
                        </Star>
                        <ComentDiv>
                          <CommentIcon><BiCommentDetail size={21} color={"#807D7E;"}/></CommentIcon>
                          <Comment>120 comment</Comment>
                        </ComentDiv>
                    </Rating>
                    <SizeDiv>
                      <Size>
                        <SizeText>Select Size</SizeText>
                        <SizeGuide>Size Guide <FaArrowRightLong/></SizeGuide>
                      </Size>

                      <SelectSize>
                        {product.size.map((size)=> (
                          <SizeBox key={size} onClick={()=> handleSizeClick(size)} isSelected = {selectedSize === size}>
                            {size}
                          </SizeBox>
                        ))}
                        
                      </SelectSize>
                    </SizeDiv>
                    <div>
                      <h5>Colours Available </h5>
                      <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                    </div>
                   
                </Details>
            </ProductRight>
        </Product>
    );
}

const Product = styled.div`
  display: flex;
  width: 100%;
`;
const ProductLeft = styled.div`
  width: 50%;
`;
const ImageContainer = styled.div`
  width: 520px;
  height: 785px;
`;
const Image = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
`;
const ProductRight = styled.div`

`;
const Details = styled.div`
  width: 400px;
`
const Heading = styled.h1`
  font-weight: 700;
  font-size: 30px;
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 30px
`;
const Star = styled.span`
  display: flex;
  align-items: center;
  gap:10px;
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
  
`
const


export default ProductView;
