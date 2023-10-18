import { graphql } from '@/lib/types/graphql/generated/gql'

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

export const GET_AUCTION_BY_ID = graphql(/* GraphQL */ `
    query GetAuction($id: ID!) { 
        auction (id: $id) {
            id
            canceled
            finalized
            highestBid
            highestBidder
        }
    }
`)