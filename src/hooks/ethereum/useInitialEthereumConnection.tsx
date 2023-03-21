import useGeneralConnection from "common/useGeneralConnection";
import { useEffect } from "react";
import web3 from "web3";

export default function useInitialEthereumConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (generalConnection.chain === "") {
      (window as any)?.ethereum
        ?.request?.({ method: "eth_accounts" })
        ?.then((res) => {
          if (res[0]) {
            useGeneralConnection.setState({
              connection: new web3((window as any).ethereum),
              chain: "ETH",
            });
          }
        });
    }
  }, [generalConnection.chain]);
}
