import React from 'react'
import Men from '../men.json'

function Mens() {
  return (
    <div>
        
            <h2>Categories For Men</h2>
            {Men.map((item)=> (
                <>
                    <img src={item.image} alt={item.name}/>
                    <h5>{item.name}</h5>
                    <span>Explore Now!</span>
                </>

            ))}
        
    </div>
  )
}

export default Mens