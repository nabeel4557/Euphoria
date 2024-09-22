import React from 'react';
import Button from '../include/Button'

function Ad2() {
    return (
        <>
            <div className='wrapper w-full flex py-[50px] :'>
                <div className='w-1/2 max-[1080px]:w-full  bg-cover bg-no-repeat max-[1080px]:rounded-2xl' style={{backgroundImage: `url(/assets/bg-4.jpg)`}}>
                    <div className="px-20 max-[1080px]:py-40 text-white font-causten flex flex-col justify-center h-full">
                        <h2 className='text-[34px] font-bold leading-[45px] max-[768px]:text-[30px] max-[768px]:leading-[35px] mt-5 mb-2'>WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
                        <p className="text-[18px] font-thin leading-[24px] mt-8">In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                        <Button text="Shop Now" className="mt-8 py-[12px] items-start w-1/3 text-[16px] whitespace-nowrap max-[640px]:py-[10px] max-[640px]:w-1/2 max-[480px]:text-[13px] max-[360px]:text-[10px] " />
                    </div>
                </div>
                <div className='w-1/2 block max-[1080px]:hidden'>
                    <img src='/assets/bg-5.jpg' alt="Background"  className='w-full'/>
                </div>
            </div>
        </>
    )
}

export default Ad2