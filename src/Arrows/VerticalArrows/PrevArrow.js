import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";

function PrevArrow({onclick}) {
  return (
    <div onClick={onclick}>
        <MdKeyboardArrowUp size={20}/>

    </div>
  )
}

export default PrevArrow