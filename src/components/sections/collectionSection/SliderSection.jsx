import React from 'react'
import unsplash2 from '../../../../public/img/unsplash2.png'

import ethereumGreen from '../../../../public/img/ethereumGreen.svg'

import SecondSectionsSubs from './SecondSectionsSubs'
function SliderSection() {
    return (
        <div className='sm:flex md:gap-5 lg:gap-0 lg:block'>
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={true} />
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={false} />
            <SecondSectionsSubs image={unsplash2} title={"The Futr Abstr"} eImage={ethereumGreen} active={false} />



        </div>
    )
}

export default SliderSection