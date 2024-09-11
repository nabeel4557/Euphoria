
import React from 'react'

function ProductDiscribtion() {
  return (
    <>
    
    <div className='flex items-center gap-x-4 mb-[50px] mt-[50px]'>
        <div className='bg-[#8A33FD] w-[6px] h-[30px]'></div>
        <h3 className='text-[28px] font-bold'>Product Description</h3>
        <div className='right'></div>
    </div>
    <div className='w-[600px]'>
        <div className='Describtion flex items-center '>
            <div>
                <span className='one text-[18px] font-bold'>Description</span>

            </div>
            <div>
                <span className='two text-[18px]'>User comments<div className=' w-[20px] h-[20px] bg-[#8A33FD]  text-[#fff] text-[10px]' >21</div></span>

            </div>
            <div>
                <span className='three text-[18px]'>Question & Answer</span>
            </div>
        </div>
    </div>
    
    </>

  )
}

export default ProductDiscribtion