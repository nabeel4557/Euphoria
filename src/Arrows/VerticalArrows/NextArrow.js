import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function NextArrow({onClick}) {
  return (
    <div onClick={onClick}>
        <MdKeyboardArrowDown size={20}/>

    </div>
  )
}

export default NextArrow