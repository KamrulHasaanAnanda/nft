import { Button } from '@/components/ui/button'
import React from 'react'

import dots from '../../../../../public/img/Dots.svg'

function TopSection() {
    return (
        <section className='p-16 w-full flex items-center gap-7'>

            <div>
                <h1 className='text-black font-integral text-[40px] font-normal tracking-[2px]">
  Your Text Here'>
                    Discover, and collect Digital Art  NFTs
                </h1>

                <p className='text-[#565656] font-dm-sans text-xl font-normal leading-[160%] my-4'>
                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                </p>

                <div className='relative w-fit p-4 bg-no-repeat bg-[length:100px_100px] bg-right-bottom' style={{ backgroundImage: `url(${dots.src})` }}>
                    <Button className="rounded-[60px] cursor-pointer border-2 bg-[#3D00B7] font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] min-w-[140px]  text-[#fff] p-0 transition duration-300 ease-in-out hover:bg-[#3D00B7] hover:text-white">
                        Explore Now
                    </Button>

                </div>
            </div>
        </section>
    )
}

export default TopSection