import create from "zustand";
import web3 from "web3";
export type IGeneralConnection = {
  chain: "ETH" | "SOL" | "";
  connection: any;
};

const useGeneralConnection = create<IGeneralConnection>(() => ({
  chain: "",
  connection: new web3(),
}));
export default useGeneralConnection;
