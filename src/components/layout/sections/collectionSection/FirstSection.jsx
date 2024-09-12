import Image from 'next/image'
import React from 'react'
import unsplash from '../../../../../public/img/unsplash1.png'
import avatar from '../../../../../public/img/avatar.svg'
import ethiriam from '../../../../../public/img/ethiriam.svg'

const FirstSection = () => {
    return (
        <div>
            <Image src={unsplash} alt='Unsplash image' />

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
    )
}

export default FirstSection