import PieceCarousel from "@/components/PieceCarousel";
import Explainer from "@/components/copy/Explainer";
import PieceHistory from "@/components/copy/PieceHistory";
import Tournaments from "@/components/copy/Tournaments";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  return (
    <main className="pb-12">
      <PieceCarousel />
      <Separator className="my-20 bg-black" />
      <Explainer />
      <Separator className="my-20 bg-black" />
      <PieceHistory />
      <Separator className="my-20 bg-black" />
      <Tournaments />
    </main>
  )
}
