import { StaticImageData } from "next/image";

export type Piece = {
    id: string;
    name: string;
    description: string;
    initialPrice: number;
    currentBid: number;
    auctionEndDate: string;
    imagePiece: string | StaticImageData;
    imageMovement: string | StaticImageData;
    category: string;
    dateCreated: string;
}