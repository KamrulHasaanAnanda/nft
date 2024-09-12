import React from 'react'
import chartSquare from '../../../../../public/img/chartSquare.svg'
import cardTick from '../../../../../public/img/cardTick.svg'

import NoticeCards from './NoticeCards'

function NoticeSection() {
    return (

        <section className="bg-[rgba(217,224,236,0.20)] p-16 backdrop-blur-[25px] min-h-[326px]  max-h-[326px] flex justify-center items-center">
            <h1 className='text-black font-integral text-[28px] font-bold"'>
                The amazing NFT art of the world here
            </h1>
            <NoticeCards image={cardTick} title={"Fast Transaction"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."} />
            <NoticeCards image={chartSquare} title={"Growth Transaction"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."} />

        </section>
    )
}

export default NoticeSection