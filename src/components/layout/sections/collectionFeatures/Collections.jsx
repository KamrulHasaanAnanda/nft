import Image from 'next/image'
import React from 'react'
import unsplash9 from '../../../../../public/img/unsplash9.png'
import unsplash10 from '../../../../../public/img/unsplash10.png'
import unsplash11 from '../../../../../public/img/unsplash11.png'
import avatar from '../../../../../public/img/avatar.svg'

import { Button } from '@/components/ui/button'
function Collections({ image }) {
    return (
        <div className='w-full sm:w-1/3'>
            <div className='flex gap-3 items-center  sm:flex-col lg:flex-row'>
                <Image src={image} alt='Unsplash image' width={265} height={272} />
                <div className='flex flex-col sm:flex-row  lg:flex-col gap-3'>
                    <Image src={unsplash9} alt='Unsplash image' />
                    <Image src={unsplash10} alt='Unsplash image' />
                    <Image src={unsplash11} alt='Unsplash image' />
                </div>
            </div>


            <h5 className='my-5 text-black font-dm-sans text-xl font-bold'>
                Amazing Collection
            </h5>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 sm:flex-wrap md:flex-nowrap'>
                    <Image src={avatar} alt='avatar' height={28} width={28} />
                    <p className='text-black font-dm-sans text-sm font-normal'>
                        by Arkhan
                    </p>
                </div>
                <Button className="flex justify-center items-center w-[98px] h-[29px] px-5 py-2.5 gap-[4.584px] flex-shrink-0 rounded-[60px] border border-[#2639ED] text-[#2639ED] font-dm-sans text-[11.001px] font-bold bg-white hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out">

                    Total 54 Items
                </Button>
            </div>


        </div>
    )
}

export default Collections