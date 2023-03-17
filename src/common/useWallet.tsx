import create from "zustand";
import web3 from "web3";
export type IWallet = {
  publicKey: string;
};

const useWallet = create<IWallet>(() => ({
  publicKey: "",
}));
export default useWallet;
