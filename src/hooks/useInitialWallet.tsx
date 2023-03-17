import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import useWalletDetailsToken from "common/useWalletDetailsToken";
import useWalletDetailsNFTs from "common/useWalletDetailsNFT";
import { useEffect } from "react";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { walletGetInfor } from "utils/contract/solana/useWallet";
import { useConnection } from "@solana/wallet-adapter-react";
import useEthereumWallet from "common/useWallet";

export function useInitialWalletListener() {
  const publicKeys = [
    { key: "SOL", publicKey: useSolanaWallet().publicKey?.toBase58() },
    { key: "ETH", publicKey: useEthereumWallet((s) => s.publicKey) },
  ];

  useEffect(() => {
    useWallet(publicKeys.filter((res) => res.publicKey)[0]);

    // connection.eth.getAccounts().then((res) => {
    //   useEthereumWallet.setState({ publicKey: res[0] });
    // });
  }, [publicKeys]);
}
