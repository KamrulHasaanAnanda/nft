"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import auction from '../../../../../public/img/auction.svg';
import CreateSellNftsSection1 from '../../../../../public/img/1.jpeg'
import CreateSellNftsSectionM2 from '../../../../../public/img/2.jpeg'
import CreateSellNftsSectionS3 from '../../../../../public/img/3.jpeg'
import avatar from '../../../../../public/img/avatar.svg'

const NFTCard = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    // console.log('hoveredCard', hoveredCard)



    const cards = [
        { id: 1, image: CreateSellNftsSection1, height: hoveredCard === 1 ? "100%" : "90%", width: "90%", zIndex: hoveredCard === 1 ? 40 : 30, name: "Abstr Gradient NFT", owner: "Arkhan17" },
        { id: 2, image: CreateSellNftsSectionM2, height: hoveredCard === 1 ? "100%" : "80%", width: "90%", zIndex: hoveredCard === 2 ? 40 : 20, name: "Abstr NFT", owner: "Arkhan17" },
        { id: 3, image: CreateSellNftsSectionS3, height: hoveredCard === 1 ? "100%" : "70%", width: "90%", zIndex: hoveredCard === 3 ? 40 : 10, name: " Gradient NFT", owner: "Arkhan17" },


    ];

    return (
        <div className='relative sm:min-h-[400px] lg:min-h-full'>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`absolute rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out`}
                    style={{
                        width: card.width,
                        height: card.height,
                        left: `${index * 16}px`,
                        top: `${index * 16}px`,
                        zIndex: card.zIndex,
                        // transform: hoveredCard === card.id ? 'scale(1.05) translateY(-10px)' : 'scale(1) translateY(0)',
                    }}
                // onMouseEnter={() => setHoveredCard(card.id)}
                // onMouseLeave={() => setHoveredCard(1)}
                >
                    <div className="relative w-full h-full">
                        <Image src={card.image} layout="fill" objectFit="cover" />
                    </div>
                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-white text-xl font-bold">{card.name}</h2>
                            <div className="flex items-center mt-2">
                                {/* <div className="w-6 h-6 rounded-full bg-gray-300 mr-2"></div> */}
                                <Image src={avatar} alt='avatar' height={24} width={24} />

                                <span className="ml-2 text-white text-sm">{card.owner}</span>
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-white text-xs">Current Bid</p>
                                    <p className="text-white font-bold">0.25 ETH</p>
                                </div>
                                <div>
                                    <p className="text-white text-xs">Ends in</p>
                                    <p className="text-white font-bold">12h 43m 42s</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            ))}
            <div className="absolute -left-[-50px] top-1/2 h-24 w-24 rounded-[50%] flex items-center justify-center transform -translate-y-1/2 shadow-md z-50 bg-[#ffe0d4]">
                <Image src={auction} alt='auction' height={100} width={100} />
            </div>
        </div>
    );
};

export default NFTCard;