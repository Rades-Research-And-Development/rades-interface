import create from "zustand";
export type walletDetailsNFTs = {
  walletDetailsNFTs: {}[];
};

const useWalletDetailsNFTs = create<walletDetailsNFTs>(() => ({
  walletDetailsNFTs: [],
}));
export default useWalletDetailsNFTs;
