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
            <div className='h-[750px] bg-cover bg-center relative ' style={{ backgroundImage: `url(${currentBg})`, backgroundSize: 'cover',}}>
                <div className='flex justify-between items-center h-full px-6  '>
                    <img src={leftarrow}  alt="Left Arrow" onClick={handlePrev} className="cursor-pointer max-[768px]: size-8  max-[360px]:hidden"/>
                    <img src={rightarrow} alt="Right Arrow" onClick={handleNext} className="cursor-pointer max-[768px]: size-8 max-[360px]:hidden" />
                </div>
                <div className="wrapper">
                    <div className="absolute top-[130px] max-[640px]:left-[120px] left-[190px] py-6 text-white font-causten max-[768px]:mt-[30px] max-[540px]:mt-[80px] ">
                        <h4 className="text-[32px] max-[768px]:text-[28px] max-[640px]:text-[23px] max-[560px]:text-[20px] font-medium leading-9">T-shirt / Tops</h4>
                        <h2 className='text-[78px] font-[800px] leading-[93px] max-[768px]:text-[50px] max-[540px]:text-[30px] max-[768px]:leading-[70px] max-[540px]:leading-[40px] my-8 max-[540px]:my-4'>Summer<br />Value Pack</h2>
                        <h4 className="text-[32px] font-medium leading-9 max-[768px]:text-[23px] max-[540px]:text-[20px] max-[480px]:text-[13px]">cool / colorful / comfy</h4>
                        <Button text="Shop Now" className="mt-8 py-[16px] px-[72px] max-[640px]:py-[10px] max-[640px]:px-[50px] max-[540px]:px-[30px] max-[480px]:px-[15px] max-[480px]:text-[15px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Spotlight;




