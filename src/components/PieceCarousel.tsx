'use client'
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from './ui/button';
import { cn } from '@/lib/utils/cn';
import { Piece } from '@/lib/types/pieces';
import Image from 'next/image';

interface PieceCarouselProps {
  pieces: Piece[];
}

const PieceCarousel: FC<PieceCarouselProps> = ({ pieces }) => {

    const [activePiece, setActivePiece] = useState<Piece>(pieces[1]);

    return (<>
        <div className={'flex items-center justify-center w-full h-72 px-10 space-x-10'}>
            <Button className='text-2xl'>
                <FaArrowLeft />
            </Button>

            <div className="flex-1 h-full flex flex-nowrap items-center justify-evenly overflow-hidden ">
                {pieces.map((piece, index) => (
                    <div key={index} className={cn("mx-8 p-2 flex-shrink-0 cursor-pointer border border-transparent rounded-lg", index === 1 ? 'w-44 h-56 border-black/50' : 'w-28 h-36 hover:border-black/20')}>
                        <div className="relative w-full h-full">
                            <Image src={piece.imagePiece} alt='' fill style={{ objectFit: 'contain'}}/>
                            <div className="absolute -bottom-2 right-1">
                                <span className='bg-black rounded-full px-2 py-1 text-white text-xs'>Ξ1.00</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Button className='text-2xl'>
                <FaArrowRight />
            </Button>
        </div>
        <div className="w-full px-36">
            <div className={cn("flex font-extrabold px-12 py-6 border-2 border-l-white border-t-white border-r-black border-b-black bg-[#F3F8FB]/60")}>
                <div className="w-2/3 flex flex-col space-y-2">
                    <span className='text-3xl'>{activePiece.name} - #{activePiece.id}</span>
                    <span>{activePiece.date}</span>
                    <span className=''>{activePiece.description}</span>
                    <span>{activePiece.category}</span>
                    <span>{activePiece.initialPrice}</span>
                </div>
                <div className="w-1/3 py-8">
                    <Image src={activePiece.imageMovement} alt='' />
                </div>
            </div>
        </div>
    </>)
}

export default PieceCarousel;