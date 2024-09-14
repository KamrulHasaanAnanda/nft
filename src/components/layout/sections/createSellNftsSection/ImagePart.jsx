import Image from 'next/image'
import React from 'react'
import CreateSellNftsSection1 from '../../../../../public/img/CreateSellNftsSection1.png'
import CreateSellNftsSectionM2 from '../../../../../public/img/CreateSellNftsSectionM2.png'
import CreateSellNftsSectionS3 from '../../../../../public/img/CreateSellNftsSectionS3.png'
import avatar from '../../../../../public/img/avatar.svg'
function ImagePart() {

    return (
        <div className='flex items-center gap-3 sm:gap-14 w-full lg:w-1/2 justify-between'>
            <div className='w-1/2 flex flex-col items-end gap-7'>
                <div className='relative min-w-[90%]  min-h-[150px] sm:min-w-[300px] sm:min-h-[300px]'>
                    <Image src={CreateSellNftsSection1} alt='CreateSellNftsSection1' fill />
                    <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />
                </div>

                <div className='relative  sm:min-w-[200px] sm:min-h-[200px] min-w-[70%] min-h-[100px]'>
                    <Image src={CreateSellNftsSectionS3} alt='CreateSellNftsSectionS3' fill />
                    <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />
                </div>

            </div>

            <div className='w-1/2 flex justify-center sm:justify-start'>
                <div className='relative min-w-[70%] min-h-[150px] sm:min-w-[200px] xl:w-[240px] sm:min-h-[260px] '>
                    <Image src={CreateSellNftsSectionM2} alt='CreateSellNftsSectionM2' fill />
                    <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />

                </div>
            </div>



        </div>
    )
}

export default ImagePart