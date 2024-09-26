import React from 'react'
import limelight from '../limelight.json'
import { Link } from 'react-router-dom'


function SimilarProducts() {
  return (
    <div className='wrapper'>
        <div className="flex items-center gap-x-4 mb-[50px]">
            <div className="bg-[#8A33FD] w-[6px] h-[30px]"></div>
            <h3 className="text-[28px] font-bold max-[480px]:text-[23px]">Similar Products</h3>
        </div>

        <div className='grid grid-cols-4 w-full max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 '>
              {limelight.map((item)=> (
                <Link to={ `/products/${item.id}?category=similarproduct` }>
                    <div className='mb-10'>
                        <div className='relative w-[271px] h-[393px] max-[1280px]:w-[260px] max-[1280px]:h-[375px] max-[1080px]:w-[200px] max-[1080px]:h-[300px] max-[980px]:w-[150px] max-[980px]:h-[200px] max-[768px]:w-[250px] max-[768px]:h-[300px] max-[640px]:w-[200px] max-[480px]:w-full max-[480px]:h-[457px]'>
                            <div className='w-full h-full'>
                                <img className='w-[100%] h-[100%]' src={item.image} alt={item.name}/>
                            </div>
                            <div className=' z-1o bg-white rounded-[50%] absolute top-6 right-5 cursor-pointer'>
                                    <img src='/assets/wishlist.svg' alt="Wishlist"  className='p-2'/>
                            </div>

                        </div>

                        <div className='flex justify-between items-center w-[271px] max-[1280px]:w-[260px] max-[1080px]:w-[200px] max-[980px]:w-[150px] max-[768px]:w-[250px] max-[640px]:w-[200px] max-[1080px]:block max-[640px]:block max-[480px]:w-full  '>
                            <div className='mt-[20px]'>
                                <h5 className='  text-[15px] font-bold max-[1080px]:text-[15px] max-[980px]:text-[11px] max-[768px]:text-[14px]'>{item.name}</h5>
                                <span className=' text-[14px] max-[980px]:text-[11px] max-[768px]:text-[13px] text-[#7F7F7F]'>Explore Now!</span>
                            </div>
                            <div className='bg-[#F6F6F6] p-2 rounded-[5px] max-[640px]:w-[70px] max-[1080px]:w-[70px] max-[1080px]:mt-[10px]'>
                                <span className='font-bold text-[14px]'>{item.price}</span>
                            </div>
                        </div>
                  </div>
                </Link>
                  

              ))}
            </div>

    </div>
  )
}

export default SimilarProducts