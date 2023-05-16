import standalChains from "chain";
import useGeneralConnection from "common/useGeneralConnection";
import IChains from "interface/chains.interface";
import { useEffect } from "react";
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
            console.log(currentProvider);
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

// Registry contract deployed to 0x107a30aB3008B7FcBddd06EF76e509dd73987667
// Marketplace contract deployed to 0x535e0cF7d0533013343C68c7Dc93E841f3ccd7E2
// Creature contract deployed to 0xa213F98CC2F2CD5F657B4978fFF0949cD77c3796
// Creature Accessory contract deployed to 0x9EC41A36e3913Bc05B8C820ae4f7C54b255d8A1A
// RadesMockCurrency contract deployed to 0xee3424d777966E9ac50d23f21D4d4DB5b060ce44
