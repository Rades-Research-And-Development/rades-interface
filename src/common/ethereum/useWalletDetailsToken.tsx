import create from "zustand";

export type walletDetailsToken = {
  walletDetailsToken: {
    address: string;
    value: Number;
    avatar: string;
  }[];
};

const useWalletDetailsToken = create<walletDetailsToken>(() => ({
  walletDetailsToken: [],
}));
export default useWalletDetailsToken;
