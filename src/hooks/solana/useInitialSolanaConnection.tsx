import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useGeneralConnection from "common/useGeneralConnection";
import { useEffect } from "react";

export default function useInitialSolanaConnectionListener() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const generalConnection = useGeneralConnection((s) => s);

  useEffect(() => {
    // console.log("Solana: " + generalConnection.chainRPC.symbol + publicKey?.toBase58());
    if (!generalConnection.chainRPC.symbol && publicKey?.toBase58()) {
      useGeneralConnection.setState({
        connection: connection,
        chainRPC: {
          symbol: "SOL",
          chainName: "Solana",
          chainId: "SOLx1",
          stableCoin: {
            symbol: "USDC",
            address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
            path: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
          },
        },
      });
    }
  }, [connection, generalConnection.chainRPC.symbol, publicKey]);
}
