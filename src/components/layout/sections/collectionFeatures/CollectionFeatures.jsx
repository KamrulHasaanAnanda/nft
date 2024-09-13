import React from 'react'
import unsplash from '../../../../../public/img/unsplash1.png'


import Collections from './Collections'

function CollectionFeatures() {
    return (
        <section className='p-16 px-3 sm:px-10 md:px-16 bg-[rgba(217,224,236,0.20)] backdrop-blur-[25px] w-full '>

            <h4 className='text-black font-integral text-[28px] font-bold'>
                Collection Featured NFTs
            </h4>

            <div className='flex justify-between items-center gap-3 my-6 flex-wrap sm:flex-nowrap'>

                <Collections image={unsplash} />
                <Collections image={unsplash} />
                <Collections image={unsplash} />


            </div>

        </section>
    )
}

export default CollectionFeatures