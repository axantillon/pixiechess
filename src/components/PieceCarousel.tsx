'use client'
import { Piece } from '@/lib/types/pieces';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from './ui/button';
import { Input } from './ui/input';

const PieceBox = ({ piece }: { piece: Piece }) => {

    return (
        <div className={cn("flex w-full h-full font-extrabold px-12 py-6 border-2 border-l-white border-t-white border-r-black border-b-black bg-[#F3F8FB]/50")}>
                <div className="w-2/3 flex flex-col space-y-8">

                    <div className="h-1/2 flex flex-col space-y-2">
                        <span className='text-3xl'>#{piece.id} {piece.name}</span>
                        <span>{piece.dateCreated}</span>
                        <span className=''>{piece.description}</span>
                        <span>{piece.category}</span>
                    </div>

                    <div className="h-1/6 flex text-2xl font-bold space-x-10">
                        <div className="flex flex-col space-y-1">
                            <span>Current bid</span>
                            <span>Ξ{piece.currentBid}</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Auction ends in</span>
                            <span>{piece.auctionEndDate}</span>
                        </div>
                    </div>

                    <div className="h-1/6 flex items-center space-x-2">
                        <Input placeholder={`${piece.currentBid} or more`} className='w-1/2 text-xl font-bold' />
                        <div className="diagonal-corners text-white px-4 bg-[#EC7FFB] z-10 leading-4 drop-shadow-md cursor-pointer">
                            <span>Place bid</span>
                        </div>
                    </div>

                    <div className="h-1/4"></div>

                </div>
                <div className="w-1/3 py-8">
                    <Image src={piece.imageMovement} alt='' />
                </div>
            </div>
    )
}

interface PieceCarouselProps {
  pieces: Piece[];
}

const arrowPosition = [
    'before:left-[158px]',
    'before:left-[258px]',
    'before:left-[358px]',
    'before:left-[458px]',
    'before:left-[558px]',
]

const PieceCarousel: FC<PieceCarouselProps> = ({ pieces }) => {

    const [activePieceIndex, setActivePieceIndex] = useState<number>(0);

    return (
    <div className='max-w-[800px] mx-auto px-6'>
        <div className={'flex items-center justify-center h-72 space-x-10 '}>
            <Button onClick={() => setActivePieceIndex(Math.max(0, activePieceIndex - 1))} className='text-2xl'>
                <FaArrowLeft />
            </Button>

            <div className="w-full h-full flex flex-nowrap items-center justify-evenly overflow-hidden ">
                {pieces.map((piece, index) => (
                    <div onClick={() => {setActivePieceIndex(index)}} key={index} className={cn("p-2 cursor-pointer border border-transparent rounded-lg transition-widthandheight ease-in-out delay-50", activePieceIndex === index ? 'w-36 h-48 border-black/50' : 'w-20 h-28 hover:border-black/20')}>
                        <div className="relative w-full h-full">
                            <Image src={piece.imagePiece} alt='' fill style={{ objectFit: 'contain'}}/>
                            <div className="absolute -bottom-2 right-1">
                                <span className='bg-black rounded-full px-2 py-1 text-white text-xs'>Ξ1.00</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Button onClick={() => setActivePieceIndex(Math.min(pieces.length - 1, activePieceIndex + 1))} className='text-2xl'>
                <FaArrowRight />
            </Button>
        </div>
        <div className={cn("relative w-full h-[500px] before:content-[''] before:absolute before:w-8 before:h-8 before:-top-4 before:rotate-45 before:border-l-2 before:border-l-white before:bg-[#F3F8FB]/50 before:-z-1", arrowPosition[activePieceIndex])}>
            <PieceBox piece={pieces[activePieceIndex]} />
        </div>
    </div>
    )
}

export default PieceCarousel;