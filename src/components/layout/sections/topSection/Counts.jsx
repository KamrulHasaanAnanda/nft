import React from 'react'

function Counts({ count, label }) {
    return (
        <div className="mt-4">
            <h1 className='text-black font-integral text-[40px] font-bold tracking-[2px] leading-8'>
                {count}<span className='font-normal font-sans'>k+</span>
            </h1>
            <p className='text-[#565656] font-dm-sans text-lg font-light leading-[160%]'>
                {label}
            </p>
        </div>
    )
}

export default Counts