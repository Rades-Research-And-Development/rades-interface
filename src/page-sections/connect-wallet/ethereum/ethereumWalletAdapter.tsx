import { Button, ButtonProps } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal, WalletIcon } from "@solana/wallet-adapter-react-ui";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ConnectWallet } from "utils/contract/etherium/useWallet";

const EthereumWalletAdapter: FC<{ onCloseProp: () => void }> = (props) => {
  const onConnectWallet = async () => {
    props.onCloseProp();
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
        Connect chain adgfasd
      </Button>
    </>
  );
};
export default EthereumWalletAdapter;
