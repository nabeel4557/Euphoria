import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";

function PrevArrow({onClick}) {
  return (
    <div onClick={onClick}>
        <MdKeyboardArrowUp size={20}/>

    </div>
  )
}

export default PrevArrow