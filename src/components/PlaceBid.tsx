'use client'
import auctionMinterABI from '@/lib/assets/abi/auctionMinterABI.json';
import { cn } from '@/lib/utils/cn';
import { FC, useState } from 'react';
import { parseEther } from 'viem';
import { useAccount, useContractWrite } from 'wagmi';
import { Input } from './ui/input';

interface placeBidProps {
  highestBid: string;
  auctionId: string;
}

const PlaceBid: FC<placeBidProps> = ({ highestBid, auctionId }) => {

    const { address, isConnected } = useAccount()
    const [ bid, setBid ] = useState<string>("")
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: process.env.NEXT_PUBLIC_AUCTION_MINTER_ADDRESS as `0x${string}`,
        abi: auctionMinterABI,
        functionName: 'bid'
    })

    const handleBid = () => {
        if (bid && bid !== '0' || bid > highestBid) {
            console.log(bid)
            console.log(bid)
            write({
                args: [auctionId],
                value: parseEther(bid, "wei")
            })
        }
    }


    return (
        <div className="h-1/6 flex items-center space-x-2">
            <Input value={bid} onChange={(e) => setBid(e.target.value)} placeholder={`${highestBid} or more`} className='w-1/2 text-xl font-bold' />
            <button disabled={!address || !isConnected} onClick={() => handleBid()} className={cn("w-36 diagonal-corners text-white px-4 bg-[#EC7FFB] z-10 leading-4 drop-shadow-md cursor-pointer")}>
                <span>{(address || isConnected) ? 'Place bid' : 'Connect First'}</span>
            </button>
        </div>
    )
}

export default PlaceBid;