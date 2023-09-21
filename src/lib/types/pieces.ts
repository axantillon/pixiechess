import { StaticImageData } from "next/image";

export type Piece = {
    id: string;
    name: string;
    description: string;
    initialPrice: number;
    imagePiece: string | StaticImageData;
    imageMovement: string | StaticImageData;
    category: string;
    date: string;
}