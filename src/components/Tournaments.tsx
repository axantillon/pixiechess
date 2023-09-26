import React, { FC } from 'react'
import Tournament from '@/lib/assets/tournament.png'
import Image from 'next/image';

interface TournamentsProps {
  
}

const Tournaments: FC<TournamentsProps> = ({  }) => {
    return (
        <div className={'flex flex-col px-24 space-y-12'}>
            <div className="flex flex-col space-y-2">
                <h2 className='text-6xl font-extrabold'> Tournaments </h2>
                <h4 className='text-lg font-bold w-2/3'>
                    {"Use your pieces to compete against other players and have a shot at winning a portion of the treasury. May the best player win :)"}
                </h4>
            </div>
            <Image src={Tournament} alt='' />
        </div>
    )
}

export default Tournaments;