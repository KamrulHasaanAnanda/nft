"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import auction from '../../../../public/img/auction.svg';
import CreateSellNftsSection1 from '../../../../public/img/1.jpeg'
import CreateSellNftsSectionM2 from '../../../../public/img/2.jpeg'
import CreateSellNftsSectionS3 from '../../../../public/img/3.jpeg'
import avatar from '../../../../public/img/avatar.svg'

const NFTCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState(null);

    const cards = [
        { id: 1, image: CreateSellNftsSection1, left: 0, height: "90%", width: "90%", name: "Abstr Gradient NFT", owner: "Arkhan17" },
        { id: 2, image: CreateSellNftsSectionM2, left: 25, height: "80%", width: "90%", name: "Abstr NFT", owner: "Arkhan17" },
        { id: 3, image: CreateSellNftsSectionS3, left: 50, height: "70%", width: "90%", name: " Gradient NFT", owner: "Arkhan17" },
    ];

    const handleSwipe = useCallback((direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === 'left') {
                return (prevIndex + 1) % cards.length;
            } else if (direction === 'right') {
                return (prevIndex - 1 + cards.length) % cards.length;
            }
            return prevIndex;
        });
    }, [cards.length]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowLeft') {
            handleSwipe('right');
        } else if (event.key === 'ArrowRight') {
            handleSwipe('left');
        }
    }, [handleSwipe]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const handleMouseDown = (e) => {
        setStartX(e.pageX);
    };

    const handleMouseUp = (e) => {
        if (startX) {
            const diff = startX - e.pageX;
            if (Math.abs(diff) > 50) { // Threshold for swipe
                handleSwipe(diff > 0 ? 'left' : 'right');
            }
            setStartX(null);
        }
    };

    const handleMouseLeave = () => {
        setStartX(null);
    };

    return (
        <div
            className='relative min-h-[300px] sm:min-h-[400px] xl:min-h-[500px]'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const zIndex = isActive ? 40 : 30 - index;
                return (
                    <div
                        key={card.id}
                        className={`absolute translate-x-[20px] sm:translate-x-[50px] rounded-3xl w-[80%] sm:w-[90%] overflow-hidden shadow-lg transition-all duration-300 ease-in-out`}
                        style={{
                            height: isActive ? "90%" : card.height,
                            left: `${isActive ? 0 : card.left}px`,
                            top: `${index * 16}px`,
                            zIndex: zIndex,
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image src={card.image} fill className='object-cover' alt='' />
                        </div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-white text-xl font-bold">{card.name}</h2>
                                <div className="flex items-center mt-2">
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
                );
            })}
            <div className="absolute left-[10px] sm:left-[5px] top-1/2 h-24 w-24 rounded-[50%] flex items-center justify-center transform -translate-y-1/2 shadow-md z-50 bg-[#ffe0d4]">
                <Image src={auction} alt='auction' height={100} width={100} />
            </div>
        </div>
    );
};

export default NFTCard;