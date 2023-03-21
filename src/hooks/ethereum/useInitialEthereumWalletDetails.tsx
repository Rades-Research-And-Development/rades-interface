import { useEffect } from "react";

//State use for all wallet
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
// set Public Key When connection change

export function useInitialEthereumWalletListener() {
  const generalConnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (
      generalConnection.chain === "ETH" &&
      generalConnection?.connection?.eth
    ) {
      generalConnection.connection.eth.getAccounts().then((res) => {
        useGeneralWallet.setState({ publicKey: res[0], chain: "ETH" });
      });
    }
  }, [generalConnection]);
}
