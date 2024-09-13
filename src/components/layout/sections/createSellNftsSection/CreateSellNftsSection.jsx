import React from 'react'

import ImagePart from './ImagePart'
import LetterPart from './LetterPart'


function CreateSellNftsSection() {
    return (
        <div className='bg-white w-full flex items-center gap-10 py-16 px-5 sm:px-10 md:px-16 '>
            <ImagePart />
            <LetterPart />
        </div>
    )
}

export default CreateSellNftsSection