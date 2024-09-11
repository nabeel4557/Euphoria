
import React from 'react'

function ProductDiscribtion() {
  return (
    <>
    <div>

        <div className='w-full flex   justify-between py-10'>
        <div className='Describtion items-center w-1/2'>
            <div className=' heading flex items-center gap-x-4 '>
                <div className='bg-[#8A33FD] w-[6px] h-[30px]'></div>
                <h3 className='text-[28px] font-bold' >Product Description</h3>        
            </div>
            <div className='flex gap-8 mt-8'>
                <div>
                    <span className='one text-[18px] font-bold '>Description</span>

                </div>
                <div className='flex items-center gap-[10px]'>
                    <span className='two text-[18px] text-[#807D7E] flex items-center'>User comments</span>
                    <div className=' w-[20px] h-[20px] bg-[#8A33FD]  text-[#fff] text-[10px] p-1 flex items-center' >21</div>

                </div>
                <div className='flex items-center gap-[10px]'>
                    <span className='three text-[18px] text-[#807D7E]'>Question & Answer</span>
                    <div className=' w-[20px] h-[20px] bg-[#3C4242]  text-[#fff] text-[10px] p-2 flex items-center' >4</div>
                </div>
            </div>
            
        </div>
        <div className='product-type bg-[#F6F6F6] h-[185px] b-[40px] w-1/2'>
            <div className=''>

            </div>
        </div>
    </div>
    </div>
  
    
    </>

  )
}

export default ProductDiscribtion