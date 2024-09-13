import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import fbicon from '../../../public/img/fbicon.svg'
import twitter from '../../../public/img/twitter.svg'
import linkedln from '../../../public/img/linkedln.svg'

const Footer = () => {
    const socialIcons = [
        { src: fbicon, alt: 'Facebook' },
        { src: twitter, alt: 'Twitter' },
        { src: linkedln, alt: 'LinkedIn' },
    ]

    const marketplaceItems = ['All NFTs', 'New', 'Art', 'Sports', 'Utility', 'Music', 'Domain Name']
    const accountItems = ['Profile', 'Favorite', 'My Collections', 'Settings']

    return (
        <footer className='bg-white px-3 sm:px-10 md:px-16 py-16 flex flex-wrap lg:flex-nowrap items-start justify-between gap-6'>
            {/* Company Info */}
            <div className='w-full sm:w-1/2 lg:w-1/3'>
                <h4 className="text-[#000] font-integral text-2xl font-bold">NFters</h4>
                <p className='text-[#565656] font-dm-sans text-sm font-normal leading-[160%] my-4'>
                    The world&apos;s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </p>
                <div className='flex gap-5'>
                    {socialIcons.map((icon, index) => (
                        <Image key={index} src={icon.src} alt={icon.alt} className="hover:opacity-80 transition-opacity" />
                    ))}
                </div>
            </div>

            {/* Market Place */}
            <div>
                <p className='text-black font-dm-sans text-lg font-bold capitalize mb-4'>Market Place</p>
                <ul className="space-y-2">
                    {marketplaceItems.map((item, index) => (
                        <li key={index} className="text-[#3D3D3D] hover:text-[#2639ED] transition-colors">{item}</li>
                    ))}
                </ul>
            </div>

            {/* My Account */}
            <div>
                <p className='text-black font-dm-sans text-lg font-bold capitalize mb-4'>My Account</p>
                <ul className="space-y-2">
                    {accountItems.map((item, index) => (
                        <li key={index} className="text-[#3D3D3D] hover:text-[#2639ED] transition-colors">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div className='w-full sm:w-1/2 lg:w-1/3'>
                <p className='text-black font-dm-sans text-lg font-bold capitalize'>Stay in the loop</p>
                <p className='my-6 text-[#363639] font-dm-sans text-sm font-normal leading-[160%]'>
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                </p>
                <div className='rounded-[45.595px] border-2 border-[#F1F1F1] bg-white h-14 flex justify-between items-center p-1'>
                    <input
                        className='border-none focus:border-none focus:ring-0 w-1/2 sm:w-10/12 pl-4'
                        placeholder='Enter your email address..'
                        aria-label="Email address"
                    />
                    <Button className="rounded-[45px] sm:w-[140px] h-[46px] bg-[#2639ED] text-white font-dm-sans text-[12.159px] font-normal tracking-[0.79px] hover:bg-[#1e2ecc] transition-colors">
                        Subscribe Now
                    </Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer