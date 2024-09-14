import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import filter from '../../../../public/img/filter.svg'

import CreateSellNftsSection2 from '../../../../public/img/1.jpeg'
import CreateSellNftsSection3 from '../../../../public/img/2.jpeg'
import CreateSellNftsSection4 from '../../../../public/img/3.jpeg'
import avatar from '../../../../public/img/avatar.svg'
import DiscoverCarts from './DiscoverCarts'

const categories = ['All Categories', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto']

const DiscoverSection = () => {
    const avatarImages = Array(4).fill(avatar)

    const cartData = [
        { image: CreateSellNftsSection2, title: "ArtCrypto" },
        { image: CreateSellNftsSection2, title: "This NFT" },
        { image: CreateSellNftsSection3, title: "NameCrypto" },
        { image: CreateSellNftsSection4, title: "KingCrypto" },
    ]

    const discoverCarts = Array(16).fill().map((_, index) => ({
        ...cartData[index % 4],
        avatarImages,
    }))

    return (
        <section className="bg-[rgba(217,224,236,0.20)] py-16 px-5 sm:px-10 md:px-16 backdrop-blur-[25px]">
            <h2 className='text-black font-integral text-3xl sm:text-[34px] font-bold mb-8'>
                Discover more NFTs
            </h2>

            <div className='mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                <div className='flex flex-wrap gap-2 md:gap-4 items-center'>
                    {categories.map((category, index) => (
                        <Button
                            key={category}
                            className={`flex justify-center items-center px-3 md:px-5 py-2 md:py-2.5 gap-[4.584px] flex-shrink-0 rounded-[100px] font-dm-sans text-xs font-normal transition duration-300 ease-in-out
								${index === 0
                                    ? "bg-[#2639ED] text-white hover:bg-[#1e2ecc]"
                                    : "bg-[#F5F5F5] text-black hover:bg-[#2639ED] hover:text-white"}`
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <Button className="flex justify-center items-center px-3 md:px-5 py-2 md:py-2.5 gap-[4.584px] flex-shrink-0 rounded-[100px] text-black font-dm-sans text-xs font-normal bg-[#F5F5F5] hover:bg-[#2639ED] hover:text-white transition duration-300 ease-in-out">
                    <Image src={filter} alt='filter' className="mr-2" />
                    <span>All Filters</span>
                </Button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>
                {discoverCarts.map((cart, index) => (
                    <DiscoverCarts
                        key={index}
                        image={cart.image}
                        avatarImages={cart.avatarImages}
                        title={cart.title}
                    />
                ))}
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