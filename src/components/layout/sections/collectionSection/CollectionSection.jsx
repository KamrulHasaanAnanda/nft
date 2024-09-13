import React from 'react'

import FirstSection from './FirstSection'

import SecondSection from './SecondSection'


function CollectionSection() {
    return (
        <section className='py-16 px-3 sm:px-10 md:px-16 bg-white flex items-center justify-between gap-5'>
            <FirstSection />

            <SecondSection />
        </section>
    )
}

export default CollectionSection