import IChains from "interface/chains.interface";
import web3 from "web3";
import create from "zustand";
export type IGeneralConnection = {
  chainRPC: IChains;
  connection: any;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chainRPC: {} as IChains,
  connection: new web3(),
}));
export default useGeneralConnection;
