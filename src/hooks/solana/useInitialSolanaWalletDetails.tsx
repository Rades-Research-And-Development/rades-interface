import { useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralConnection from "common/useGeneralConnection";
// Need to import from connection all

export function useInitialSolanaWalletListener() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const generalConnnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (generalConnnection.chain === "SOL") {
      useGeneralWallet.setState({
        publicKey: publicKey?.toBase58(),
        chain: "SOL",
      });
    }
  }, [generalConnnection.chain, publicKey]);
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
