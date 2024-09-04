import React from 'react';
import { HiOutlineArrowSmLeft } from "react-icons/hi";

function NextArrow(props) {  // Added 'props' as a parameter
  const { onClick } = props;

  return (
    <div
    className="Arrow PrevArrow"
    onClick={onClick}
  >
    <HiOutlineArrowSmLeft size={20} color="#8A33FD" />
  </div>
  );
}

export default NextArrow;
