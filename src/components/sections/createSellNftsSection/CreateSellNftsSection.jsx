import React from 'react'

import ImagePart from './ImagePart'
import LetterPart from './LetterPart'


function CreateSellNftsSection() {


    return (
        <div className='bg-white flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between gap-10 py-16 px-4 sm:px-10 md:px-16 '>
            <ImagePart />
            <LetterPart />
        </div>
    )
}

export default CreateSellNftsSection