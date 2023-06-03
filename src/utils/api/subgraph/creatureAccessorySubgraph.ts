import { gql } from "@apollo/client";
import API_SUBGRAPH from "./apiSubgraph";


export async function getNFTsByAddress(address: string) {
    const response = await API_SUBGRAPH.query({
        query: gql`
        query {
            transferSingles (where:{and:[{from :"0x0000000000000000000000000000000000000000"}, {to: "${address}"}]}) {
                CreatureAccessory_id
                blockTimestamp
              }
          }
        `
    })
    return response?.data?.transferSingles;
}

