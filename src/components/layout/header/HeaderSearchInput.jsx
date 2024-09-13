import React from 'react'
import SearchIcon from '../../../../public/img/SearchIcon.svg'
import Image from 'next/image'
function HeaderSearchInput() {
    return (
        <div className='relative lg:w-[60%] hidden lg:block'>
            <input className='rounded-[100px] border-2 border-[#EFEFEF] h-12 w-full' />
            <Image src={SearchIcon} alt='searchIcon' className="absolute w-5 h-5 right-5 top-3" />
        </div>
    )
}

export default HeaderSearchInput