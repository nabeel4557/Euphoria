
import React from 'react'

function ProductDiscribtion() {
    return (
        <>
            <div className='wrapper pt-5'>

                <div className='w-full flex   justify-between py-10 max-[980px]:block'>
                    <div className='Describtion items-center w-1/2 max-[980px]:w-full'>
                        <div className=' heading flex items-center gap-x-4 '>
                            <div className='bg-[#8A33FD] w-[6px] h-[30px]'></div>
                            <h3 className='text-[28px] font-bold max-[480px]:text-[23px]' >Product Description</h3>
                        </div>
                        <div className='w-1/2 space-y-10 mt-7  '>
                            <div className='flex space-x-8 whitespace-nowrap'>
                                <div className=''>
                                    <span className='text-[16px] max-[1280px]:text-[14px] text-[#3C4242] font-semibold'>Description</span>
                                    <div className='border-b-[3px] rounded-[1px] border-[#3C4242]  w-[50px] pb-3'></div>
                                </div>
                                <div className='flex space-x-3'>
                                    <span className='text-[16px] max-[1280px]:text-[14px] font-normal text-[#807D7E]'>User Comments</span>
                                    <span className='w-[24px] h-[24px] bg-[#8A33Fd] text-white flex items-center justify-center rounded-lg text-[12px]'>21</span>
                                </div>
                                <div className='flex space-x-3 max-[520px]:hidden'>
                                    <span className='text-[16px] max-[1280px]:text-[14px] font-normal text-[#807D7E]'>Question & Answer</span>
                                    <span className='w-[24px] h-[24px] bg-[#3c4242] text-white flex items-center justify-center rounded-lg text-[12px]'>4</span>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-[20px]'>
                            <p className='text-[16px] max-[1280px]:text-[14px] text-[#807D7E]'>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                        </div>

                    </div>
                    <div className='product-type bg-[#F6F6F6] h-full w-1/2  max-[980px]:w-full rounded-[12px]  max-[980px]:mt-[40px]'>
                        <div className='product flex flex-col max-[360px]:w-full'>

                            <div className='flex items-center justify-between border-b-2 max-[360px]:border-b-0 max-[360px]:block  '>
                                <div className=' w-[210px] pl-12 max-[1080px]:pl-4 border-r-2 max-[360px]:border-r-0 pt-5 pb-5 max-[360px]:w-full max-[360px]:border-b-2 '>
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E] '>Fabric</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Bio-washed Cotton</span>
                                </div>
                                <div className=' w-[210px] pl-12 max-[1080px]:pl-4 border-r-2 max-[360px]:border-r-0 pt-5 pb-5 max-[360px]:w-full max-[360px]:border-b-2'>
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E]'>Pattern</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Printed</span>
                                </div>
                                <div className=' w-[210px] pl-12 max-[1080px]:pl-4 pt-5 pb-5 max-[360px]:w-full max-[360px]:border-b-2'>
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E]'>Fit</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Regular-fit</span>
                                </div>
                            </div>


                            <div className='flex items-center justify-between max-[360px]:block '>
                                <div className='w-[210px] pl-12 max-[1080px]:pl-4 border-r-2 max-[360px]:border-r-0 pt-5 pb-5 max-[360px]:w-full max-[360px]:border-b-2'>
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E]'>Neck</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Round Neck</span>
                                </div>
                                <div className='w-[210px] pl-12 max-[1080px]:pl-4 border-r-2 max-[360px]:border-r-0 pt-5 pb-5 max-[360px]:w-full max-[360px]:border-b-2' >
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E]'>Sleeve</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Half-sleeves</span>
                                </div>
                                <div className='w-[210px] pl-12 max-[1080px]:pl-4 pt-5 pb-5 max-[360px]:w-full'>
                                    <h6 className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#807D7E]'>Style</h6>
                                    <span className='text-[16px] max-[1280px]:text-[14px] max-[480px]:text-[10px] text-[#3C4242]'>Casual Wear</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>

    )
}

export default ProductDiscribtion