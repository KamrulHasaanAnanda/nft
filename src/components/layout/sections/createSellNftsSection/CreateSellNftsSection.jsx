import React from 'react'
import CreateSellNftsSection1 from '../../../../../public/img/CreateSellNftsSection1.png'
import CreateSellNftsSectionM2 from '../../../../../public/img/CreateSellNftsSectionM2.png'
import CreateSellNftsSectionS3 from '../../../../../public/img/CreateSellNftsSectionS3.png'
import avatar from '../../../../../public/img/avatar.svg'
import Image from 'next/image'


function CreateSellNftsSection() {
    return (
        <div className='bg-white p-16 w-full flex items-center gap-10'>


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

            <div className='w-1/2'>
                <h5 className='text-black font-integral text-[32px] font-bold'>
                    Create and sell your NFTs
                </h5>

                <p className='my-4 text-[#636363] font-dm-sans text-lg font-normal leading-[160%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                </p>
            </div>


        </div>
    )
}

export default CreateSellNftsSection