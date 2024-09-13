import React from 'react'
import chartSquare from '../../../../../public/img/chartSquare.svg'
import cardTick from '../../../../../public/img/cardTick.svg'

import NoticeCards from './NoticeCards'

function NoticeSection() {
    return (

        <section className="bg-[rgba(217,224,236,0.20)]  py-16 px-3 sm:px-10 md:px-16 backdrop-blur-[25px] gap-5  flex justify-center flex-wrap sm:flex-nowrap sm:items-start lg:items-center">
            <h1 className='text-black font-integral text-[28px] font-bold"'>
                The amazing NFT art of the world here
            </h1>
            <div className='flex items-center flex-col lg:flex-row'>

                <NoticeCards image={cardTick} title={"Fast Transaction"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."} />
                <NoticeCards image={chartSquare} title={"Growth Transaction"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."} />
            </div>

        </section>
    )
}

export default NoticeSection