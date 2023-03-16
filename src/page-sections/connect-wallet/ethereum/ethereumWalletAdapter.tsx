import { Button, ButtonProps } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal, WalletIcon } from "@solana/wallet-adapter-react-ui";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ConnectWallet } from "utils/contract/etherium/useWallet";

const EthereumWalletAdapter: FC<ButtonProps> = () => {
  const onConnectWallet = async () => {
    await ConnectWallet().then((res) => {});
  };
  return (
    <>
      <Button
        onClick={onConnectWallet}
        sx={{
          fontSize: "1rem",
          background: "none",
          height: "3rem",
        }}
      >
        Connect chain
      </Button>
    </>
  );
};
export default EthereumWalletAdapter;
