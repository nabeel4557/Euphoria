import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

function NextArrow(props) {  // Added 'props' as a parameter
  const {  onClick } = props;

  return (
    <div
    className='Arrow NextArrow'
    onClick={onClick}
  >
    <HiOutlineArrowSmRight size={20} color="#3C4242" />
  </div>
  );
}

export default NextArrow;
