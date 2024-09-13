import Image from 'next/image'
import React from 'react'
import unsplash from '../../../../../public/img/collection1.jpeg'
import avatar from '../../../../../public/img/avatar.svg'
import ethiriam from '../../../../../public/img/ethiriam.svg'
import SliderSection from './SliderSection'

const FirstSection = () => {
    return (
        <div className='flex items-start w-full lg:w-[75%] flex-wrap md:flex-nowrap gap-6 lg:border-r border-[#ECECEC] pr-3 '>
            <div className=' w-full md:w-1/2'>
                <Image src={unsplash} alt='Unsplash image' className='rounded-[24px] aspect-square ' />

                <div className='flex justify-between items-center my-4'>
                    <div className='flex gap-2 items-center'>
                        <Image src={avatar} alt='Avatar' />
                        <div>
                            <h4 className='text-black font-dm-sans text-xl font-bold'>
                                The Futr Abstr
                            </h4>
                            <p className="text-[#363639] font-dm-sans text-sm font-normal">
                                10 in the stock
                            </p>
                        </div>

                    </div>

                    <div>
                        <p className='text-[#3A3A3A] font-dm-sans text-xs font-normal'>
                            Highest Bid
                        </p>

                        <div className='flex gap-2 items-center'>
                            <Image src={ethiriam} alt='Ethereum icon' />
                            <p className='text-[#3A3A3A] font-dm-sans text-base font-bold'>

                                0.25 ETH
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <SliderSection />

        </div>

    )
}

export default FirstSection