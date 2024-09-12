import React from 'react'
import HeaderSearchInput from './HeaderSearchInput'
import { Button } from '../ui/button'

function HeaderComponent() {
    return (
        <div className=' w-full h-20 flex justify-between items-center gap-3 px-16 py-2 border-b border-[#EFEFEF]'>

            <div className="text-[#3D00B7] font-integral text-2xl font-bold">
                NFters
            </div>

            <ul className='flex items-center gap-7 w-1/3'>
                <li>
                    Marketplace
                </li>
                <li>
                    Resource
                </li> <li>
                    About
                </li>
            </ul>

            <div className='flex items-center gap-3 lg:w-1/2 justify-end'>
                <HeaderSearchInput />

                <Button className="rounded-[60px] cursor-pointer bg-[#3D00B7] text-white font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] w-24 transition duration-300 ease-in-out hover:bg-[#2A0080] hover:shadow-lg">
                    Upload
                </Button>

                <Button className="rounded-[60px] cursor-pointer border-2 border-[#3D00B7] font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] min-w-[140px] bg-white text-[#3D00B7] p-0 transition duration-300 ease-in-out hover:bg-[#3D00B7] hover:text-white">
                    Connect Wallet
                </Button>

            </div>

        </div>
    )
}

export default HeaderComponent