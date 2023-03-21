import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useWalletDetailsToken from "common/useWalletDetailsToken";
import useWalletDetailsNFTs from "common/useWalletDetailsNFT";
import { useEffect } from "react";

// import { walletGetInfor } from "utils/contract/solana/useUtilsWallet";

export function useWalletDetailsTokenListener() {
  // const { publicKey } = useWallet();
  // const { connection } = useConnection();
  // useEffect(() => {
  //   if (publicKey) {
  //     walletGetInfor(connection, publicKey).then((res) => {
  //       useWalletDetailsToken.setState({
  //         walletDetailsToken: res,
  //       });
  //     });
  //   }
  // }, [publicKey, connection]);
}

export async function useWalletDetailsNFTListener() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    // if (publicKey) {
    //   Metadata.findDataByOwner(
    //     connection,
    //     publicKey?.toBase58() as string
    //   ).then(async (nftsmetadata) => {
    //     const nftsmetadata_ = await Promise.all(
    //       nftsmetadata.map(async (nft) => ({
    //         ...nft,
    //         metadata: await fetch(nft.data.uri).then((res) => res.json()),
    //       }))
    //     );
    //     console.log(nftsmetadata_);
    //     useWalletDetailsNFTs.setState({
    //       walletDetailsNFTs: nftsmetadata_,
    //     });
    //   });
    // }
  }, [connection, publicKey]);
}
