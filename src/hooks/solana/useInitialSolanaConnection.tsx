import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useGeneralConnection from "common/useGeneralConnection";
import { useEffect } from "react";

export default function useInitialSolanaConnectionListener() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const generalConnection = useGeneralConnection((s) => s);

  useEffect(() => {
    // console.log("Solana: " + generalConnection.chain + publicKey?.toBase58());
    if (generalConnection.chain === "" && publicKey?.toBase58()) {
      useGeneralConnection.setState({
        connection: connection,
        chain: "SOL",
      });
    }
  }, [connection, generalConnection.chain, publicKey]);
}
