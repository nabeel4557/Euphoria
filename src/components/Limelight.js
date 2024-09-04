import React from 'react'
import limelight from '../limelight.json'

function Limelight() {
  return (
    <div className='wrapper pb-[]'>
        
        <div className='flex items-center gap-x-4 my-[50px]'>
        <div className='bg-[#8A33FD] w-[6px] h-[30px]'></div>
        <h3 className='text-[28px] font-bold'>In The Limelight</h3>
      </div>
            <div className='grid grid-cols-4 w-full space-x-6'>
              {limelight.map((item)=> (
                  <div className='mb-10'>
                    <div className='relative'>
                        <div className='w-full h-[393px]'>
                            <img className='w-[100%] h-[100%]' src={item.image} alt={item.name}/>
                        </div>
                        <div className=' z-1 bg-white rounded-[50%] absolute top-6 right-5 cursor-pointer'>
                                <img src='/assets/wishlist.svg' alt="Wishlist"  className='p-2'/>
                            </div>

                    </div>

                    <div className='flex justify-between items-center w-[271px]'>
                      <div>
                        <h5 className=' text-[18px] font-bold'>{item.name}</h5>
                        <span className=' text-[14px] text-[#7F7F7F]'>Explore Now!</span>
                      </div>
                      <div>
                        <img src='./assets/Arrow.svg'/>
                        

                      </div>
                    </div>
                  </div>

              ))}
            </div>
        
    </div>
  )
}

export default Limelight