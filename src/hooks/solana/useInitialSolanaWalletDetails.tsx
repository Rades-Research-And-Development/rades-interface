import { useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import { utilsCombineWallet } from "utils/contract";
// Need to import from connection all

export function useInitialSolanaWalletListener() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const generalConnnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (generalConnnection.chainRPC.symbol === "SOL") {
      useGeneralUtilsWallet.setState(utilsCombineWallet.utilsSolanaWallet);
      utilsCombineWallet.utilsSolanaWallet
        .walletGetInfor(connection, publicKey?.toBase58() || "")
        .then((res: any) => {
          useGeneralWallet.setState({
            publicKey: publicKey?.toBase58(),
            chain: "SOL",
            details: {
              tokens: res.tokens,
              nfts: res.nfts,
            },
          });
        });
    }
  }, [generalConnnection.chainRPC, publicKey, connection]);
}

// export function useWalletDetailsTokenListener() {
//   const { publicKey } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     if (publicKey) {
//       walletGetInfor(connection, publicKey).then((res) => {
//         useWalletDetailsToken.setState({
//           walletDetailsToken: res,
//         });
//       });
//     }
//   }, [publicKey, connection]);
// }

// export async function useWalletDetailsNFTListener() {
//   const { connection } = useConnection();
//   const { publicKey } = useWallet();

//   useEffect(() => {
//     if (publicKey) {
//       Metadata.findDataByOwner(
//         connection,
//         publicKey?.toBase58() as string
//       ).then(async (nftsmetadata) => {
//         const nftsmetadata_ = await Promise.all(
//           nftsmetadata.map(async (nft) => ({
//             ...nft,
//             metadata: await fetch(nft.data.uri).then((res) => res.json()),
//           }))
//         );
//         // console.log(nftsmetadata_);
//         useWalletDetailsNFTs.setState({
//           walletDetailsNFTs: nftsmetadata_,
//         });
//       });
//     }
//   }, [connection, publicKey]);
// }
