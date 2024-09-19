import React from 'react'
import women from '../women.json'
import { Link } from 'react-router-dom'


function Women() {
  return (
    <div className='wrapper pb-[40px]'>
        
        <div className='flex items-center gap-x-4 mb-[50px]'>
        <div className='bg-[#8A33FD] w-[6px] h-[30px]'></div>
        <h3 className='text-[28px] font-bold'>Categories For Women</h3>
      </div>
            <div className='grid grid-cols-4 w-full'>
              {women.map((item)=> (
                <Link to={`/products/${item.id}`}>
                    <div className='mb-10'>
                        <div className='w-[271px] h-[393px]'>
                        <img className='w-[100%] h-[100%]' src={item.image} alt={item.name}/>
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

                </Link>
                  

              ))}
            </div>
        
    </div>
  )
}

export default Women