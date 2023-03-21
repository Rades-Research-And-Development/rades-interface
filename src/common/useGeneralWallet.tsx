import create from "zustand";
import web3 from "web3";
import IwalletDetails from "interface/walletDetails";
export type IGeneralWallet = {
  publicKey: string;
  details?: IwalletDetails;
  chain: "ETH" | "SOL" | "";
};

const useGeneralWallet = create<IGeneralWallet>(() => ({
  publicKey: "",
  chain: "",
}));

export default useGeneralWallet;
