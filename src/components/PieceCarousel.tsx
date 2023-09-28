'use client'
import { Piece } from '@/lib/types/pieces';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from './ui/button';

interface PieceCarouselProps {
  pieces: Piece[];
}

const PieceCarousel: FC<PieceCarouselProps> = ({ pieces }) => {

    const [activePieceIndex, setActivePieceIndex] = useState<number>(1);

    return (<>
        <div className={'flex items-center justify-center w-full h-72 px-14 space-x-10'}>
            <Button onClick={() => setActivePieceIndex(Math.max(0, activePieceIndex - 1))} className='text-2xl'>
                <FaArrowLeft />
            </Button>

            <div className="flex-1 h-full flex flex-nowrap items-center justify-evenly overflow-hidden ">
                {pieces.map((piece, index) => (
                    <div onClick={() => {setActivePieceIndex(index)}} key={index} className={cn("mx-8 p-2 flex-shrink-0 cursor-pointer border border-transparent rounded-lg", activePieceIndex === index ? 'w-44 h-56 border-black/50' : 'w-28 h-36 hover:border-black/20')}>
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
        <div className="w-full px-36">
            <div className={cn("flex w-full max-h-[1000px] font-extrabold px-12 py-6 border-2 border-l-white border-t-white border-r-black border-b-black bg-[#F3F8FB]/80")}>
                <div className="w-2/3 flex flex-col space-y-8">

                    <div className="flex flex-col space-y-2">
                        <span className='text-3xl'>#{pieces[activePieceIndex].id} {pieces[activePieceIndex].name}</span>
                        <span>{pieces[activePieceIndex].dateCreated}</span>
                        <span className=''>{pieces[activePieceIndex].description}</span>
                        <span>{pieces[activePieceIndex].category}</span>
                    </div>

                    <div className="flex text-2xl font-bold">
                        <div className="flex flex-col space-y-1">
                            <span>Current Bid</span>
                            <span>Ξ{pieces[activePieceIndex].currentBid}</span>
                        </div>
                        <div className="flex flex-col space-y-1">

                        </div>
                    </div>

                </div>
                <div className="w-1/3 py-8">
                    <Image src={pieces[activePieceIndex].imageMovement} alt='' />
                </div>
            </div>
        </div>
    </>)
}

export default PieceCarousel;