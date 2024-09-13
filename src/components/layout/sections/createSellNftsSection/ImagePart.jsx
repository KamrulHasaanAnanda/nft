import Image from 'next/image'
import React from 'react'
import CreateSellNftsSection1 from '../../../../../public/img/CreateSellNftsSection1.png'
import CreateSellNftsSectionM2 from '../../../../../public/img/CreateSellNftsSectionM2.png'
import CreateSellNftsSectionS3 from '../../../../../public/img/CreateSellNftsSectionS3.png'
import avatar from '../../../../../public/img/avatar.svg'
function ImagePart() {
    return (
        <div className='flex items-center gap-14 w-1/2'>
            <div>
                <div className='relative'>
                    <Image src={CreateSellNftsSection1} alt='CreateSellNftsSection1' width={300} height={300} />
                    <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />
                </div>

                <div className='relative flex justify-end mt-8'>
                    <Image src={CreateSellNftsSectionS3} alt='CreateSellNftsSectionS3' />
                    <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />
                </div>

            </div>

            <div className='relative'>
                <Image src={CreateSellNftsSectionM2} alt='CreateSellNftsSectionM2' width={240} height={260} />
                <Image src={avatar} alt='avatar' className='absolute bottom-[-22px] right-[-22px]' />
            </div>



        </div>
    )
}

export default ImagePart