import React from 'react';
import { HiOutlineArrowSmLeft } from "react-icons/hi";

function NextArrow(props) {  // Added 'props' as a parameter
  const { className, style, onClick } = props;

  return (
    <div
    className={className}
    style={{ ...style, display: 'block', left: '10px' }}  // Adjust positioning as needed
    onClick={onClick}
  >
    <HiOutlineArrowSmLeft size={20} color="#8A33FD" />
  </div>
  );
}

export default NextArrow;
