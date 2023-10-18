import React, { FC } from 'react'

const PiecePreview: FC = () => {

    return (
        <div className="flex flex-col items-center">
            <div className="w-44 h-44 bg-black mb-4">
            </div>
            <span>Bishop Bouncer</span>
            <span>March 23, 2023</span>
        </div>
    )
}

interface PieceHistoryProps {
  
}

const PieceHistory: FC<PieceHistoryProps> = ({  }) => {
    return (
        <div className={'flex flex-col px-24 space-y-12'}>
            <div className="w-full flex justify-between text-6xl">
                <h2 className='font-extrabold'> Pieces: </h2>
                <span className='font-extralight text-black/50'> see all </span>
            </div>
            <div className="w-full flex flex-nowrap items-center justify-start overflow-hidden">
                <PiecePreview />
                
            </div>
        </div>
    )
}

export default PieceHistory;