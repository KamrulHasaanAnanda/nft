import Image from 'next/image'
import ethereumGreen from '../../../../../public/img/ethereumGreen.svg'
import React from 'react'
import { Button } from '@/components/ui/button'

function DiscoverCarts({ image, avatarImages, title }) {
    return (
        <div className='rounded-[13px] border border-[#F2F2F280] bg-white w-full min-w-[260px] p-3'>
            <div className='relative h-56'>
                <Image src={image} alt='CreateSellNftsSection1' layout='fill' />
                <div className="flex items-center absolute left-[20px] bottom-[-20px]">
                    <div className="flex -space-x-4">
                        {avatarImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-10 h-10 rounded-full overflow-hidden border-4 border-white"
                                style={{ zIndex: avatarImages.length + index }}
                            >
                                <Image
                                    height={38}
                                    width={38}
                                    src={image}
                                    alt={`Person ${index + 1}`}
                                    className=" object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="h-0.5 flex-grow bg-purple-300 ml-4"></div>
                </div>

            </div>

            <h4 className='text-black font-dm-sans text-[19.747px] font-bold leading-[19.146px] my-6'>
                {title}
            </h4>

            <div className='flex justify-between items-center border-b border-[#F4F4F4] pb-4'>
                <div className=' gap-2 cursor-pointer flex justify-center items-center'>
                    <Image src={ethereumGreen} alt='eImage' />
                    <p className='text-[#00AC4F] font-dm-sans text-xs font-bold'>
                        0.25 ETH
                    </p>
                </div>
                <p className='text-[#838383] text-right font-dm-sans text-sm font-medium leading-[145%]'>
                    1 of 321
                </p>
            </div>

            <div className='flex justify-between items-center my-4'>
                <Button className="text-[#5539A8] text-right font-dm-sans text-[10.971px] font-bold leading-[19.146px] rounded-[110px] bg-[#F5F5F5] px-3 py-1.5 space-x-0.5">
                    <span>3</span>
                    <span className='font-normal'>h</span>
                    <span className='ml-1'>50</span>
                    <span className='font-normal'>m</span>
                    <span className='ml-1'>2</span>
                    <span className='font-normal'>s</span>
                    <span className='font-normal ml-1'>left</span>
                </Button>

                <p className='text-[#4F33A3] font-dm-sans text-[15.359px] font-medium cursor-pointer'>
                    Place a bid
                </p>

            </div>



        </div>
    )
}

export default DiscoverCarts