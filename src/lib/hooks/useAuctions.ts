import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Auction } from "../types/auction"
import { GET_ALL_AUCTIONS_AND_TOKENS } from "../types/graphql"


export const useAuctions = () => {

    const { data, loading } = useQuery(GET_ALL_AUCTIONS_AND_TOKENS)
    const [ auctions, setAuctions ] = useState<Auction[] | null>(null)

    useEffect(() => {
        
        const fetchURI = async () => {
            if (!data) {
                return;
            }

            const metadataTokens = await Promise.all(
                data.tokens.map(async (token) => {
                    const metadata = await fetch(`https://ipfs.io/ipfs/${token?.uri.replace(/^ipfs:\/\//, '')}`).then((res) => res.json())
                    return {
                        name: metadata.name as string,
                        description: metadata.description as string,
                        image: `https://ipfs.io/ipfs/${metadata.image.replace(/^ipfs:\/\//, '')}`,
                        id: token.id,
                    }
                })
            )

            const fectchedData = data?.auctions.map((auction) => {
                const token = metadataTokens.find((token) => token.id === auction.tokenId)
                if (!token) return {} as Auction
                return {
                    token,
                    auctionId: auction.id,
                    highestBid: auction.highestBid as string | null,
                    highestBidder: auction.highestBidder as string | null,
                    startTime: auction.startTime as string,
                    endTime: auction.endTime as string,
                    finalized: auction.finalized,
                    canceled: auction.canceled,
                    reservePrice: auction.reservePrice as string,
                }
            })

            console.log(fectchedData)

            setAuctions(fectchedData)
        }

        if (!auctions && !loading) fetchURI()
    }, [data, loading, auctions])

    return { auctions, loading }
}