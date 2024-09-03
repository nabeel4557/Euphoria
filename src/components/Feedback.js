import React from 'react'

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";


function Feedback() {
    return (
        <div className='wrapper py-10'>
            <div className='flex items-center gap-x-4 mb-[50px]'>
                <div className='bg-[#8A33FD] w-[6px] h-[30px]  '></div>
                <h3 className='text-[28px] font-bold'>Feedback</h3>
            </div>
            <div className='flex font-causten w-full space-x-8'>
                <div className='w-1/3 border border-[#BEBCBD] p-6 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <img src='/assets/span-1.svg' alt="User" />
                            <h4 className='text-[#3C4242] text-[22px] font-semibold mt-3 mb-5'>Floyd Miles</h4>
                        </div>
                        <div className='flex space-x-2 text-[#EDD146]'>
                            <IoStar /><IoStar /><IoStar /><IoStarHalf /><IoStarOutline />
                        </div>
                    </div>
                    <div className='max-w-[95%]'>
                        <p className='text-[14px] text-[#807D7E] leading-[16px] font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                        <p className='text-[14px] text-[#807D7E] font-normal leading-[16px]'>Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className='w-1/3 border border-[#BEBCBD] p-6 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <img src='/assets/span-2.svg
                            ' alt="User" />
                            <h4 className='text-[#3C4242] text-[22px] font-semibold mt-3 mb-5'>Ronald Richards</h4>
                        </div>
                        <div className='flex space-x-2 text-[#EDD146]'>
                            <IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline />
                        </div>
                    </div>
                    <div className='max-w-[95%]'>
                        <p className='text-[14px] text-[#807D7E] leading-[16px] font-normal'>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
                    </div>
                </div>
                <div className='w-1/3 border border-[#BEBCBD] p-6 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <img src='/assets/span-3.svg' alt="User" />
                            <h4 className='text-[#3C4242] text-[22px] font-semibold mt-3 mb-5'>Savannah Nguyen</h4>
                        </div>
                        <div className='flex space-x-2 text-[#EDD146]'>
                            <IoStar /><IoStar /><IoStar /><IoStarHalf /><IoStarOutline />
                        </div>
                    </div>
                    <div className='max-w-[95%]'>
                        <p className='text-[14px] text-[#807D7E] leading-[16px] font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                        <p className='text-[14px] text-[#807D7E] font-normal leading-[16px]'>Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback