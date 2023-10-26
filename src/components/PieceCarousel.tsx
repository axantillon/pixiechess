'use client'
import { useAuctions } from '@/lib/hooks/useAuctions';
import { Auction } from '@/lib/types/auction';
import { GET_AUCTION_AND_BIDS_BY_ID } from '@/lib/types/graphql';
import { cn } from '@/lib/utils/cn';
import { useQuery } from '@apollo/client';
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import truncateEthAddress from 'truncate-eth-address';
import { formatEther } from 'viem';
import PlaceBid from './PlaceBid';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const AuctionBox = ({ auction }: { auction: Auction }) => {

    const { data: revalAuction, loading } = useQuery(GET_AUCTION_AND_BIDS_BY_ID, {
        variables: {
            id: auction.auctionId
        },
        pollInterval: 1000
    })

    const { finalized, canceled } = revalAuction?.auction || auction;
    const highestBid = (revalAuction?.auction && revalAuction?.auction?.highestBid !== null) ? formatEther(BigInt(revalAuction?.auction?.highestBid), "wei") : (auction.highestBid !== null ? formatEther(BigInt(auction.highestBid), "wei"): 'None')

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
                            <span>Ξ{highestBid === '0' ? 'None' : highestBid}</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Auction ends in</span>
                            <span>{DateTime.fromSeconds(Number(auction.endTime)).toLocaleString()}</span>
                        </div>
                    </div>

                    <PlaceBid auctionId={auction.auctionId} highestBid={highestBid} />

                    <div className="flex flex-col h-1/4 w-64 overflow-y-scroll">
                        {revalAuction?.auctionBids && revalAuction.auctionBids.map((bid: {bidder: string, amount: string, transactionHash: string}, index: number) => (<>
                            {index !== 0 && <Separator className='bg-black' />}
                            <div key={index} className="w-full flex items-center justify-between">
                                <div className="">
                                    <span>{truncateEthAddress(bid.bidder)}</span>
                                </div>
                                <div className="flex items-center justify-between space-x-1">
                                    <span>Ξ{formatEther(BigInt(bid.amount), "wei")}</span>
                                    <Link href={`https://goerli.etherscan.io/tx/${bid.transactionHash}`}  className="-mt-0.5">
                                        <BiLinkExternal />
                                    </Link>
                                </div>
                            </div>
                        </>))}
                    </div>

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