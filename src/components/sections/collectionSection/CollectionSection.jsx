import React from 'react'

import FirstSection from './FirstSection'

import SecondSection from './SecondSection'


function CollectionSection() {
    return (
        <section className='py-16 px-4 sm:px-10 md:px-16 bg-white flex items-start justify-between gap-5 flex-wrap md:flex-nowrap'>
            <FirstSection />

            <SecondSection />
        </section>
    )
}

export default CollectionSection