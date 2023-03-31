import create from "zustand";
import web3 from "web3";
import IChainsSymbol from "interface/chainsSymbol.interface";
export type IGeneralConnection = {
  chain: IChainsSymbol["symbol"];
  connection: any;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chain: "",
  connection: new web3(),
}));
export default useGeneralConnection;
