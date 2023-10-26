import { graphql } from '@/lib/types/graphql/generated/gql'
import { gql } from '@apollo/client'

export const GET_ALL_AUCTIONS_AND_TOKENS = graphql(/* GraphQL */ `
    query GetAllAuctions {
        auctions {
            id
            canceled
            duration
            endTime
            finalized
            highestBid
            highestBidder
            reservePrice
            startTime
            tokenId
        }
        tokens {
            id
            uri
        }
    }
`)

export const GET_AUCTION_AND_BIDS_BY_ID = gql`
    query GetAuction($id: ID!) { 
        auction (id: $id) {
            id
            canceled
            finalized
            highestBid
        }
        auctionBids (where: { auctionId: $id }) {
            id
            auctionId
            amount
            bidder
            blockNumber
            blockTimestamp
            duration
            transactionHash
        }
    }
`

export const GET_BIDS_BY_AUCTION_ID = gql`
    query GetBids($id: BigInt!) {
        auctionBids (auctionId: $id) {
            id
            auctionId
            amount
            bidder
            blockNumber
            blockTimestamp
            duration
            transactionHash
        }
    }
`