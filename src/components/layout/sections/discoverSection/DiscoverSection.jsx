import { Button } from '@/components/ui/button'
import React from 'react'
import filter from '../../../../../public/img/filter.svg'
import CreateSellNftsSection1 from '../../../../../public/img/CreateSellNftsSection1.png'

import avatar from '../../../../../public/img/avatar.svg'


import Image from 'next/image'
import DiscoverCarts from './DiscoverCarts'


function DiscoverSection() {

    const images = [
        avatar,
        avatar,
        avatar,
        avatar,
    ];

    let discoverCarts = [{
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },
    {
        image: CreateSellNftsSection1, avatarImages: images, title: "ArtCrypto"
    },

    ]
    return (
        <section className="bg-[rgba(217,224,236,0.20)] py-16 px-5 sm:px-10 md:px-16 backdrop-blur-[25px]">

            <h4 className='text-black font-integral text-[34px] font-bold'>
                Discover more NFTs
            </h4>


            <div className='my-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                <div className='flex flex-wrap gap-2 md:gap-4 items-center'>
                    <Button className="flex justify-center items-center px-3 md:px-5 py-2 md:py-2.5 gap-[4.584px] flex-shrink-0 rounded-[100px] text-[#fff] font-dm-sans text-xs font-normal bg-[#2639ED] hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out">
                        All Categories
                    </Button>

                    {['Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto'].map((category) => (
                        <Button key={category} className="flex justify-center items-center px-3 md:px-5 py-2 md:py-2.5 gap-[4.584px] flex-shrink-0 rounded-[100px] text-[#000] font-dm-sans text-xs font-normal bg-[#F5F5F5] hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out">
                            {category}
                        </Button>
                    ))}
                </div>

                <Button className="flex justify-center items-center px-3 md:px-5 py-2 md:py-2.5 gap-[4.584px] flex-shrink-0 rounded-[100px] text-[#000] font-dm-sans text-xs font-normal bg-[#F5F5F5] hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out">
                    <Image src={filter} alt='filter' />
                    <p>All Filters</p>
                </Button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>

                {
                    discoverCarts.map(discoverCart => (
                        <DiscoverCarts image={discoverCart.image} avatarImages={discoverCart.avatarImages} title={discoverCart.title} />

                    ))
                }




            </div>

            <div className='flex justify-center items-center'>
                <Button className="rounded-[50px] border-2 border-[#3D00B7] bg-white text-[#4F33A3] font-dm-sans text-lg font-normal px-10 py-5 hover:bg-[#3D00B7] hover:text-white transition duration-300 ease-in-out">
                    More NFTs
                </Button>

            </div>

        </section>
    )
}

export default DiscoverSection