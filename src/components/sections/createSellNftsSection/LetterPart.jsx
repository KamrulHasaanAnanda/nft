import { Button } from '@/components/ui/button'
import React from 'react'

function LetterPart() {
    return (
        <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
            <h5 className='text-black font-integral text-2xl sm:text-3xl lg:text-[32px] font-bold text-center lg:text-left'>
                Create and sell your NFTs
            </h5>

            <p className='my-4 text-[#636363] font-dm-sans text-base sm:text-lg font-normal leading-[160%] text-center lg:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
            </p>

            <div className=' flex justify-center lg:block'>
                <Button className="rounded-[45px] sm:min-w-[140px] h-[65px] bg-[#2639ED] text-white font-dm-sans text-[20.159px] font-normal tracking-[0.79px] hover:bg-[#1e2ecc] transition-colors">
                    Sign Up Now
                </Button>

            </div>

        </div>
    )
}

export default LetterPart