import React from 'react'

import unsplash5 from '../../../../../public/img/unsplash5.svg'
import unsplash4 from '../../../../../public/img/unsplash4.svg'
import unsplash6 from '../../../../../public/img/unsplash6.svg'




import ThirdSectionTopCollector from './ThirdSectionTopCollector'
function ThirdSection() {
    return (
        <section>
            <h5 className='text-black font-integral text-xl font-bold'>
                Top Collections over
            </h5>

            <p className='text-[#3D00B7] font-dm-sans text-lg font-bold'>
                Last 7 days
            </p>

            <ThirdSectionTopCollector key={1} image={unsplash6} verified={true} name={"CryptoFunks"} value={"19,769.39"} positiveVal={"+26.52%"} positive={true} />

            <ThirdSectionTopCollector key={2} image={unsplash4} verified={false} name={"Cryptix"} value={"2,769.39"} positiveVal={"+10.52%"} positive={false} />

            <ThirdSectionTopCollector key={3} image={unsplash5} verified={false} name={"CryptoFunks"} value={"19,769.39"} positiveVal={"+26.52%"} positive={true} />
            <ThirdSectionTopCollector key={4} image={unsplash4} verified={true} name={"CryptoFunks"} value={"19,769.39"} positiveVal={"+26.52%"} positive={true} />
            <ThirdSectionTopCollector key={5} image={unsplash5} verified={false} name={"CryptoFunks"} value={"19,769.39"} positiveVal={"+26.52%"} positive={false} />
        </section>
    )
}

export default ThirdSection