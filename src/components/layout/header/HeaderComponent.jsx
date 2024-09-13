import React from 'react'
import HeaderSearchInput from './HeaderSearchInput'
import { Button } from '../../ui/button'
import HeaderMenu from './HeaderMenu'


const HeaderComponent = () => {
    const navItems = ['Marketplace', 'Resource', 'About']

    return (
        <header className="w-full h-20 flex justify-between items-center gap-3 px-3 sm:px-10 md:px-16 py-2 border-b border-[#EFEFEF]">
            <h1 className="text-[#3D00B7] font-integral text-2xl font-bold">
                NFters
            </h1>

            <nav className='hidden md:block'>
                <ul className="flex items-center gap-7 w-1/3">
                    {navItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </nav>

            <div className=" items-center gap-3 lg:w-1/2 justify-end hidden md:flex">
                <HeaderSearchInput />
                <Button
                    className="rounded-[60px] bg-[#3D00B7] text-white font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] w-24 hover:bg-[#2A0080] hover:shadow-lg"
                >
                    Upload
                </Button>
                <Button
                    className="rounded-[60px] border-2 border-[#3D00B7] font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] min-w-[140px] bg-white text-[#3D00B7] p-0 hover:bg-[#3D00B7] hover:text-white"
                >
                    Connect Wallet
                </Button>
            </div>
            <HeaderMenu navItems={navItems} />
        </header>
    )
}

export default HeaderComponent