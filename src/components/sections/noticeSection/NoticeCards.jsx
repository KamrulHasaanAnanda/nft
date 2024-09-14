import Image from 'next/image'
import React from 'react'

function NoticeCards({ image, title, description }) {
    return (
        <div className='flex items-start gap-4'>
            <Image src={image} alt={image} />
            <div>
                <h4 className='text-black font-dm-sans text-xl font-bold'>
                    {title}
                </h4>
                <p className='text-[#696969] font-dm-sans text-sm font-normal leading-[160%]'>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default NoticeCards