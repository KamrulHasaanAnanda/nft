import React from 'react'
import unsplash2 from '../../../../../public/img/unsplash2.png'

import ethereumGreen from '../../../../../public/img/ethereumGreen.svg'

import SecondSectionsSubs from './SecondSectionsSubs'
function SecondSection() {
    return (
        <section className='border-r border-[#ECECEC] pr-14'>
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={true} />
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={false} />
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={false} />



        </section>
    )
}

export default SecondSection