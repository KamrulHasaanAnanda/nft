import { Button } from '@/components/ui/button'
import React from 'react'

// import dots from '../../../../../public/img/Dots.svg'
// import Image from 'next/image'
import Counts from './Counts'
import NFTCard from './NftCard'


function TopSection() {
    return (
        <section className=' py-16 px-4 sm:px-10 md:px-16 w-full flex gap-12 justify-between items-stretch flex-wrap sm:flex-nowrap'>

            <div className=' sm:w-[40%] lg:w-[60%]'>
                <h1 className='text-black font-integral text-3xl lg:text-[40px] font-normal tracking-[2px]'>

                    Discover, and collect Digital Art  NFTs
                </h1>

                <p className='text-[#565656] font-dm-sans text-lg lg:text-xl font-normal leading-[160%] my-6'>
                    Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                </p>

                <div className='relative w-fit h-full'>
                    <Button className="rounded-[60px] cursor-pointer border-2 bg-[#3D00B7] font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] min-w-[140px] text-[#fff] p-0 transition duration-300 ease-in-out hover:bg-[#3D00B7] hover:text-white">
                        Explore Now
                    </Button>
                    <div className='flex items-center gap-2 md:gap-4 my-4'>
                        <Counts count={98} label={"Artwork"} />
                        <Counts count={12} label={"Auction"} />
                        <Counts count={15} label={"Artist"} />


                    </div>

                </div >
            </div >
            <div className=' w-full sm:w-[60%] lg:w-[40%]   '>

                <NFTCard />
            </div>
        </section >
    )
}

export default TopSection