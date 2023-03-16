import useEthereumConnection from "common/ethereum/useConnection";
import useEthereumWallet from "common/ethereum/useWallet";
import { useEffect } from "react";
import web3 from "web3";
export default function useInitialConnection() {
  useEffect(() => {
    (window as any)?.ethereum
      ?.request?.({ method: "eth_accounts" })
      ?.then((res) => {
        useEthereumConnection.setState({
          connection: new web3((window as any).ethereum),
        });
      })
      .catch((err) => console.log(err));
  }, []);
}
