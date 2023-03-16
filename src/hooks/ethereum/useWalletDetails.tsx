import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import useWalletDetailsToken from "common/solana/useWalletDetailsToken";
import useWalletDetailsNFTs from "common/solana/useWalletDetailsNFT";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { walletGetInfor } from "utils/contract/solana/useWallet";
import { useConnection } from "@solana/wallet-adapter-react";
import useEthereumConnection from "common/ethereum/useConnection";
import useEthereumWallet from "common/ethereum/useWallet";

export function useEthereumWalletLisntener() {
  const connection = useEthereumConnection((s) => s.connection);
  useEffect(() => {
    connection.eth.getAccounts().then((res) => {
      useEthereumWallet.setState({ publicKey: res[0] });
    });
  }, [connection]);
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
//         console.log(nftsmetadata_);
//         useWalletDetailsNFTs.setState({
//           walletDetailsNFTs: nftsmetadata_,
//         });
//       });
//     }
//   }, [connection, publicKey]);
// }
