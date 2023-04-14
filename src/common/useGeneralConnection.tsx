import create from "zustand";
import web3 from "web3";
import IChainsSymbol from "interface/chainsSymbol.interface";
import IChains from "interface/chains.interface";
export type IGeneralConnection = {
  chainRPC: IChains;
  connection: any;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chainRPC: {} as IChains,
  connection: new web3(),
}));
export default useGeneralConnection;
