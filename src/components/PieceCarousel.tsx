'use client'
import { Auction } from '@/lib/types/auction';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuctions } from '@/lib/hooks/useAuctions';
import { useQuery } from '@apollo/client';
import { GET_AUCTION_BY_ID } from '@/lib/types/graphql';

const AuctionBox = ({ auction }: { auction: Auction }) => {

    const { data: revalAuction, loading } = useQuery(GET_AUCTION_BY_ID, {
        variables: {
            id: auction.auctionId
        },
        pollInterval: 1000
    })

    const { finalized, canceled } = auction;

    return (
        <div className={cn("flex w-full h-full font-extrabold px-12 py-6 border-2 border-l-white border-t-white border-r-black border-b-black bg-[#F3F8FB]/50")}>
                <div className="w-2/3 flex flex-col space-y-8">

                    <div className="h-1/2 flex flex-col space-y-2">
                        <span className='text-3xl'>#{auction.token.id} {auction.token.name}</span>
                        <span>{auction.startTime}</span>
                        <span className=''>{auction.token.description}</span>
                    </div>

                    <div className="h-1/6 flex text-2xl font-bold space-x-10">
                        <div className="flex flex-col space-y-1">
                            <span>Highest bid</span>
                            <span>Ξ{revalAuction?.auction ? revalAuction.auction.highestBid : auction.highestBid}</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Auction ends in</span>
                            <span>{auction.endTime}</span>
                        </div>
                    </div>

                    <div className="h-1/6 flex items-center space-x-2">
                        <Input placeholder={`${revalAuction?.auction ? revalAuction.auction.highestBid : auction.highestBid} or more`} className='w-1/2 text-xl font-bold' />
                        <div className="diagonal-corners text-white px-4 bg-[#EC7FFB] z-10 leading-4 drop-shadow-md cursor-pointer">
                            <span>Place bid</span>
                        </div>
                    </div>

                    <div className="h-1/4"></div>

                </div>
                <div className="w-1/3 py-8">
                    {/* <Image src={auction.imageMovement} alt='' /> */}
                </div>
            </div>
    )
}

interface auctionCarouselProps {
}

const arrowPosition = [
    'before:left-[158px]',
    'before:left-[258px]',
    'before:left-[358px]',
    'before:left-[458px]',
    'before:left-[558px]',
]

const AuctionCarousel: FC<auctionCarouselProps> = ({}) => {

    const [activeauctionIndex, setActiveauctionIndex] = useState<number>(0);
    const { auctions, loading } = useAuctions()

    return (
        <div className='max-w-[800px] mx-auto px-6'>
            <div className={'flex items-center justify-center h-72 space-x-10 '}>
                {auctions !== null && <>
                    <Button onClick={() => setActiveauctionIndex(Math.max(0, activeauctionIndex - 1))} className='text-2xl'>
                        <FaArrowLeft />
                    </Button>

                    <div className="w-full h-full flex flex-nowrap items-center justify-evenly overflow-hidden ">
                        {auctions.map((auction, index) => (
                            <div onClick={() => {setActiveauctionIndex(index)}} key={index} className={cn("p-2 cursor-pointer border border-transparent rounded-lg transition-widthandheight ease-in-out delay-50", activeauctionIndex === index ? 'w-36 h-48 border-black/50' : 'w-20 h-28 hover:border-black/20')}>
                                <div className="relative w-full h-full">
                                    <Image src={auction.token.image!} alt='' fill style={{ objectFit: 'contain'}}/>
                                    <div className="absolute -bottom-2 right-1">
                                        <span className='bg-black rounded-full px-2 py-1 text-white text-xs'>Ξ1.00</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button onClick={() => setActiveauctionIndex(Math.min(auctions?.length! - 1, activeauctionIndex + 1))} className='text-2xl'>
                        <FaArrowRight />
                    </Button>
                </>}
            </div>
            {auctions !== null && <div className={cn("relative w-full h-[500px] before:content-[''] before:absolute before:w-8 before:h-8 before:-top-4 before:rotate-45 before:border-l-2 before:border-l-white before:bg-gradient-to-br before:from-[#F3F8FB80] before:from-50% before:to-50% before:z-10", arrowPosition[activeauctionIndex])}>
                <AuctionBox auction={auctions[activeauctionIndex]} />
            </div>}
        </div>
    )
}

export default AuctionCarousel;