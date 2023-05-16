import IChains from "interface/chains.interface";
import Web3 from "web3";
import web3 from "web3";
import create from "zustand";
export type IGeneralConnection = {
  chainRPC: IChains;
  connection: Web3;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chainRPC: {} as IChains,
  connection: new web3(),
}));
export default useGeneralConnection;
