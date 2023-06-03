import { Provider, Web3Provider } from "@ethersproject/providers";
import { Signer, providers } from "ethers";
import IChains from "interface/chains.interface";
import create from "zustand";
export type IGeneralConnection = {
  chainRPC: IChains;
  signer: Signer | {};
  connection: Provider;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chainRPC: {} as IChains,
  connection: new providers.Web3Provider((window as any)?.ethereum),
  signer: {},
}));
export default useGeneralConnection;
