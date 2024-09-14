import React from 'react'
import unsplash from '../../../../../public/img/unsplash1.png'


import Collections from './Collections'

const FEATURED_COLLECTIONS = [
    { id: 1, image: unsplash },
    { id: 2, image: unsplash },
    { id: 3, image: unsplash },
];
function CollectionFeatures() {

    return (
        <section className="p-4 sm:p-8 md:p-16 bg-[rgba(217,224,236,0.20)] backdrop-blur-[25px] w-full">
            <h2 className="text-black font-integral text-2xl md:text-[28px] font-bold mb-6">
                Collection Featured NFTs
            </h2>

            <div className='flex justify-between items-center gap-2 sm:gap-3 my-6 flex-wrap sm:flex-nowrap'>

                {FEATURED_COLLECTIONS.map(({ id, image }) => (
                    <Collections key={id} image={image} />
                ))}


            </div>

        </section>
    )
}

export default CollectionFeatures