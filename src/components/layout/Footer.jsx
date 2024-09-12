import React from 'react'
import fbicon from '../../../public/img/fbicon.svg'
import twitter from '../../../public/img/twitter.svg'
import linkedln from '../../../public/img/linkedln.svg'





import Image from 'next/image'
import { Button } from '../ui/button'
function Footer() {
    return (
        <footer className='bg-white p-16 flex items-start justify-between gap-7'>

            <div className='w-1/3'>
                <h4 className="text-[#000] font-integral text-2xl font-bold">
                    NFters
                </h4>
                <p className='text-[#565656] font-dm-sans text-sm font-normal leading-[160%] my-4'>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </p>

                <div className='flex gap-5'>
                    <Image src={fbicon} alt='fbicon' />
                    <Image src={twitter} alt='twitter' />
                    <Image src={linkedln} alt='linkedln' />

                </div>
            </div>
            <div>
                <p className='text-black font-dm-sans text-lg font-bold capitalize'>
                    Market Place
                </p>

                <ul class="my-4">
                    <li class="nft-list-item">All NFTs</li>
                    <li class="nft-list-item">New</li>
                    <li class="nft-list-item">Art</li>
                    <li class="nft-list-item">Sports</li>
                    <li class="nft-list-item">Utility</li>
                    <li class="nft-list-item">Music</li>
                    <li class="nft-list-item">Domain Name</li>
                </ul>
            </div>
            <div>
                <p className='text-black font-dm-sans text-lg font-bold capitalize'>
                    My Account
                </p>

                <ul class="my-4">
                    <li class="nft-list-item">Profile</li>
                    <li class="nft-list-item">Favorite</li>
                    <li class="nft-list-item">My Collections</li>
                    <li class="nft-list-item">Settings</li>
                </ul>
            </div>
            <div className='w-1/3'>
                <p className='text-black font-dm-sans text-lg font-bold capitalize'>
                    Stay in the loop
                </p>

                <p className='my-6 text-[#363639] font-dm-sans text-sm font-normal leading-[160%]'>
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                </p>
                <div className='rounded-[45.595px] border-2 border-[#F1F1F1] bg-white h-14 flex justify-between items-center gap-3 p-4'>
                    <input className='border-none focus:border-none focus:ring-0' placeholder='Enter your email address..' />

                    <Button className="rounded-[45px] h-[30px] bg-[#2639ED] text-white font-dm-sans text-[12.159px] font-normal tracking-[0.79px]">
                        Subscibe Now
                    </Button>

                </div>
            </div>
        </footer>
    )
}

export default Footer