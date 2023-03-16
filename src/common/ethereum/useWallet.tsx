import create from "zustand";
import web3 from "web3";
export type IConnection = {
  publicKey: string;
};

const useEthereumWallet = create<IConnection>(() => ({
  publicKey: "",
}));
export default useEthereumWallet;
