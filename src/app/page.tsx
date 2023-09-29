import PieceCarousel from "@/components/PieceCarousel";
import Rook from '@/lib/assets/Rook.png';
import Bishop from '@/lib/assets/Bishop.png';
import Knight from '@/lib/assets/Knight.png';
import King from '@/lib/assets/King.png';
import Pawn from '@/lib/assets/Pawn.png';
import MoveSet from '@/lib/assets/moveSet.png';
import { Piece } from "@/lib/types/pieces";
import { Separator } from "@/components/ui/separator";
import Explainer from "@/components/Explainer";
import PieceHistory from "@/components/PieceHistory";
import Tournaments from "@/components/Tournaments";

export default function Home() {

  const pieces: Piece[] = [
    {
      id: '1',
      name: 'The Rookie',
      description: "This rookie is ready to play. He may not be the best, but he's got heart.",
      imagePiece: Rook,
      imageMovement: MoveSet,
      category: 'Rook',
      initialPrice: 0.1,
      dateCreated: '2021-10-10',
      auctionEndDate: '2021-10-10',
      currentBid: 0.1,
    },
    {
      id: '2',
      name: 'The Bouncer',
      description: "Have you ever been stuck against a wall and can't get out? No longer... this bouncer will get you out of any sticky situation.",
      imagePiece: Bishop,
      imageMovement: MoveSet,
      category: 'Bishop',
      initialPrice: 0.1,
      dateCreated: '2021-10-10',
      auctionEndDate: '2021-10-10',
      currentBid: 0.5,
    },
    {
      id: '3',
      name: 'The Crown',
      description: "The crown is the most important piece on the board. It's not the most powerful, but it's the most important.",
      imagePiece: King,
      imageMovement: MoveSet,
      category: 'King',
      initialPrice: 0.1,
      dateCreated: '2021-10-10',
      auctionEndDate: '2021-10-10',
      currentBid: 1,
    },
    {
      id: '4',
      name: 'The Little Guy',
      description: "This little guy is the most powerful piece on the board. He's small, but he's mighty.",
      imagePiece: Pawn,
      imageMovement: MoveSet,
      category: 'Pawn',
      initialPrice: 0.1,
      dateCreated: '2021-10-10',
      auctionEndDate: '2021-10-10',
      currentBid: 5,
    },
    {
      id: '5',
      name: 'Hippity Hoppity',
      description: "This guy is a little crazy. He's got a lot of energy and he's ready to go.",
      imagePiece: Knight,
      imageMovement: MoveSet,
      category: 'Knigh',
      initialPrice: 0.1,
      dateCreated: '2021-10-10',
      auctionEndDate: '2021-10-10',
      currentBid: 10,
    },
  ]

  return (
    <main className="pb-12 mx-8">
      <PieceCarousel pieces={pieces} />
      <Separator className="my-20 bg-black" />
      <Explainer />
      <Separator className="my-20 bg-black" />
      <PieceHistory />
      <Separator className="my-20 bg-black" />
      <Tournaments />
    </main>
  )
}
