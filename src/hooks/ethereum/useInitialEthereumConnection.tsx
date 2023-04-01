import standalChains from "chain";
import useGeneralConnection from "common/useGeneralConnection";
import ToastContext from "contexts/toastContext";
import IChains from "interface/chains.interface";
import IChainsSymbol from "interface/chainsSymbol.interface";
import { useContext, useEffect, useMemo } from "react";
import web3 from "web3";
export default function useInitialEthereumConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (!generalConnection.chainRPC.symbol) {
      (window as any)?.ethereum
        ?.request?.({ method: "eth_accounts" })
        ?.then((publicKeys) => {
          if (publicKeys[0]) {
            const w3 = new web3((window as any).ethereum);
            const currentProvider: any = w3.currentProvider;
            const chain: IChains = standalChains.filter(
              (res) => res.chainId === currentProvider.chainId
            )[0];
            useGeneralConnection.setState({
              connection: new web3((window as any).ethereum),
              chainRPC: chain || standalChains[0],
            });
          }
        });
    }
  }, [generalConnection.chainRPC]);
}
