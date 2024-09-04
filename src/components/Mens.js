import React from 'react'
import Men from '../men.json'

function Mens() {
  return (
    <div className='wrapper'>
        
            <h2>Categories For Men</h2>
            <div className='grid grid-cols-4 w-full'>
              {Men.map((item)=> (
                  <div>
                    <div className='w-[271px] h-[393px]'>
                      <img className='w-[100%] h-[100%]' src={item.image} alt={item.name}/>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        <h5 className=' size-[18px] font-bold'>{item.name}</h5>
                        <span className=' size-[40px]'>Explore Now!</span>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>

              ))}
            </div>
        
    </div>
  )
}

export default Mens