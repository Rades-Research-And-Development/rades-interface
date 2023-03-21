import create from "zustand";
import web3 from "web3";
import IwalletDetails from "interface/walletDetails";
export type IGeneralUtilsWallet = {
  walletAirDrop?: (...params_) => Promise<{ status: number; text: string }>;
  walletGetNativeTokenBalance?: (...params_) => Promise<number | undefined>;
  walletGetInfor?: (...params_) => Promise<{
    tokens: {
      address: string;
      value: Number;
      key: string;
    }[];
    nfts: {
      tokenId: string;
      collectionId: string | undefined;
      owner: string;
      metadata: object;
    }[];
  }>;
  walletTransaction?: (...params_) => Promise<any>;
};

const useGeneralUtilsWallet = create<IGeneralUtilsWallet>(() => ({}));

export default useGeneralUtilsWallet;
