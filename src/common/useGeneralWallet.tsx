import create from "zustand";
import web3 from "web3";
import IwalletDetails from "interface/walletDetails.interface";
import IChainsSymbol from "interface/chainsSymbol.interface";
export type IGeneralWallet = {
  publicKey: string;
  details?: IwalletDetails;
  chain: IChainsSymbol["symbol"];
};

const useGeneralWallet = create<IGeneralWallet>(() => ({
  publicKey: "",
  chain: "",
}));

export default useGeneralWallet;
