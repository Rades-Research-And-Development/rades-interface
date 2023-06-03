import { gql } from "@apollo/client";
import API_SUBGRAPH from "./apiSubgraph";

export async function getSales(first = 1, skip = 1) {
    const response = await API_SUBGRAPH.query({
        query: gql`
        query {
            saleCreateds (first: ${first}, skip: ${skip}) {
                id
                Marketplace_id
                nftID
                nftAddress
                blockNumber
                blockTimestamp
                transactionHash
                isERC721
                amount
                price
                currency
            }
          }
        `
    })
    return response;
}

