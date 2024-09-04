import React, { useState } from 'react';
import Button from '../include/Button';

function Spotlight() {
    const bg1 = '/assets/bg-1.jpg';
    const bg2 = '/assets/bg-2.jpg';
    const leftarrow = '/assets/left-arrow-bold.svg';
    const rightarrow = '/assets/right-arrow-bold.svg';

    const [currentBg, setCurrentBg] = useState(bg1);

    const handleNext = () => {
        setCurrentBg(currentBg === bg1 ? bg2 : bg1);
    };

    const handlePrev = () => {
        setCurrentBg(currentBg === bg1 ? bg2 : bg1);
    };

    return (
        <>
            <div className='h-[750px] bg-cover bg-center relative' style={{ backgroundImage: `url(${currentBg})` }}>
                <div className='flex justify-between items-center h-full px-6'>
                    <img src={leftarrow} alt="Left Arrow" onClick={handlePrev} className="cursor-pointer" />
                    <img src={rightarrow} alt="Right Arrow" onClick={handleNext} className="cursor-pointer" />
                </div>
                <div className="wrapper">
                    <div className="absolute top-[130px] left-[190px] py-6 text-white font-causten">
                        <h4 className="text-[32px] font-medium leading-9">T-shirt / Tops</h4>
                        <h2 className='text-[78px] font-[800px] leading-[93px] my-8'>Summer<br />Value Pack</h2>
                        <h4 className="text-[32px] font-medium leading-9">cool / colorful / comfy</h4>
                        <Button text="Shop Now" className="mt-8 py-[16px] px-[72px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Spotlight;




