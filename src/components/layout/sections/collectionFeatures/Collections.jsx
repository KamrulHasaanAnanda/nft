import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

const COLLECTION_IMAGES = [
    { src: '/img/unsplash9.png', alt: 'Collection image 1' },
    { src: '/img/unsplash10.png', alt: 'Collection image 2' },
    { src: '/img/unsplash11.png', alt: 'Collection image 3' },
];

function Collections({ image }) {
    return (
        <div className=' w-full sm:w-[48%] md:w-1/3'>
            <div className='flex flex-row sm:flex-col lg:flex-row gap-3'>
                <div className='relative '>

                    <Image src={image} alt='Main collection image' width={265} height={272} className="object-cover" />
                </div>
                <div className='flex flex-col sm:flex-row lg:flex-col gap-3'>
                    {COLLECTION_IMAGES.map((img, index) => (
                        <Image key={index} src={img.src} alt={img.alt} width={103} height={90} className="object-cover" />
                    ))}
                </div>
            </div>

            <h5 className='my-5 text-black font-dm-sans text-xl font-bold'>
                Amazing Collection
            </h5>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src="/img/avatar.svg" alt='avatar' height={28} width={28} />
                    <p className='text-black font-dm-sans text-sm font-normal'>
                        by Arkhan
                    </p>
                </div>
                <Button
                    className="w-[98px] h-[29px] px-5 py-2.5 rounded-[60px] border border-[#2639ED] text-[#2639ED] font-dm-sans text-[11px] font-bold bg-white hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out"
                >
                    Total 54 Items
                </Button>
            </div>
        </div>
    );
}

export default Collections;