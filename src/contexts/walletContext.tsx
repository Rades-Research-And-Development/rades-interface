import { IwalletInfo } from "interface/walletInfor";
import React, { useState, useEffect, createContext } from "react";
interface IwalletContext {
  walletInfo: IwalletInfo;
  setWalletInfo?: (data: IwalletInfo) => void;
}
const defaultState = {
  walletInfo: [
    {
      address: "",
      value: 0,
      property: {
        type: "token",
        avatar: "string",
        metadata: {},
      },
    },
  ],
};

const WalletContext = createContext<any>(defaultState);

export default WalletContext;
