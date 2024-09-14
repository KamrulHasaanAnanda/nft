import React from 'react'
import avatar from '../../../../../public/img/avatar.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function SecondSectionsSubs({ image, title, eImage, active }) {
    return (
        <div className='flex items-start sm:flex-wrap lg:flex-nowrap gap-2 mb-5'>
            <Image src={image} alt='image' className='aspect-square' />
            <div>
                <h4 className='text-black font-dm-sans text-xl font-bold tracking-tighter	'>
                    {title}
                </h4>

                <div className='flex gap-2 my-3  '>
                    <Image src={avatar} alt='avatar' width={34} height={34} />
                    <div className='flex  justify-between gap-2'>
                        <div className='rounded-[6px] min-w-24 gap-2 cursor-pointer h-9 border border-[#00AC4F] flex justify-center items-center'>
                            <Image src={eImage} alt='eImage' />
                            <p className='text-[#00AC4F] font-dm-sans text-xs font-bold'>
                                0.25 ETH
                            </p>
                        </div>
                        <p className='text-[#757575] font-dm-sans text-xs font-normal block md:hidden lg:block'>
                            1 of 8
                        </p>

                    </div>

                </div>

                <Button
                    className={`rounded-[60px] ${active ? "bg-[#3D00B7] text-white" : "bg-white text-[#3D00B7]"}   font-dm-sans text-sm font-normal leading-none tracking-[0.56px] h-[50px] w-32 hover:bg-[#2A0080] hover:shadow-lg border-2 border-[#3D00B7]`}
                >
                    Place a Bid
                </Button>
            </div>
        </div>
    )
}

export default SecondSectionsSubs