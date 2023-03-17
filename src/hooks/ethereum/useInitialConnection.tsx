import useConnection from "common/useConnection";
import useEthereumWallet from "common/useWallet";
import { useEffect } from "react";
import web3 from "web3";
export default function useInitialConnection() {
  useEffect(() => {
    (window as any)?.ethereum
      ?.request?.({ method: "eth_accounts" })
      ?.then((res) => {
        useConnection.setState({
          connection: new web3((window as any).ethereum),
        });
      })
      .catch((err) => console.log(err));
  }, []);
}
