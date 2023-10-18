import { StaticImageData } from "next/image";

export type Auction = {
    auctionId: string;
    token: {
        id: string;
        name: string;
        image: string;
        description: string;
    }
    highestBid: string | null;
    highestBidder: string | null;
    startTime: string;
    endTime: string;
    finalized: boolean;
    canceled: boolean;
    reservePrice: string;
}