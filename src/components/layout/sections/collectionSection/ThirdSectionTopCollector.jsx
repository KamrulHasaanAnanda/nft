import Image from 'next/image'
import React from 'react'
import verify from '../../../../../public/img/verify.svg'
import ethiriamBlack from '../../../../../public/img/ethiriamBlack.svg'


function ThirdSectionTopCollector({ indexKey, image, verified, name, value, positiveVal, positive }) {

    return (
        <div class="flex gap-6 lg:gap-2 items-center border-b border-[#F0F0F0] pb-3 mt-5 lg:justify-between">
            <h4 className='text-black text-center font-dm-sans text-2xl font-bold leading-[103%] tracking-[-0.6px]'>{indexKey}</h4>

            <div className='relative'>
                <Image src={image} alt='unsplash6.svg' />
                {
                    verified &&
                    <Image src={verify} alt='verify' className='absolute right-0 top-[-8px] ' />
                }
            </div>
            <div>
                <p className='text-black font-dm-sans text-base font-normal leading-[103%] tracking-[-0.4px]'>
                    {name}
                </p>
                <div className='flex items-center gap-2 mt-3'>
                    <Image src={ethiriamBlack} alt='ethiriamBlack' />
                    <p className='text-[#636363] font-dm-sans text-sm font-semibold leading-[103%] tracking-[-0.35px]'>
                        {value}
                    </p>
                </div>
            </div>
            <p className={`${positive ? "text-[#14C8B0]" : "text-[#FF002E]"} text-right font-dm-sans text-lg font-semibold leading-[103%] tracking-[-0.5px]`}>
                {positiveVal}
            </p>
        </div>
    )
}

export default ThirdSectionTopCollector