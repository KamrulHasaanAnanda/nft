import React from 'react'

import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

function CollectionSection() {
    return (
        <section className='p-16 bg-white flex items-center gap-16'>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </section>
    )
}

export default CollectionSection